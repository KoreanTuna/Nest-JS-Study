import 'package:client_app/common/data/models/post_model.dart';
import 'package:client_app/environment/api_config.dart';
import 'package:dio/dio.dart' hide Headers;
import 'package:injectable/injectable.dart';
import 'package:retrofit/retrofit.dart';

part 'post_data_source.g.dart';

@module
abstract class PostDataSourceModule {
  @lazySingleton
  PostDataSource providePostDataSource(Dio dio) {
    return PostDataSource(dio, baseUrl: ApiConfig.baseUrl);
  }
}

@RestApi()
abstract class PostDataSource {
  factory PostDataSource(
    Dio dio, {
    String? baseUrl,
    ParseErrorLogger? errorLogger,
  }) = _PostDataSource;

  @GET('/posts')
  Future<List<PostModel>> getPosts();
}
