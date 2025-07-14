import 'package:client_app/common/data/data_source/post_data_source.dart';
import 'package:client_app/common/data/models/post_model.dart';
import 'package:client_app/common/domain/entities/post_entity.dart';
import 'package:client_app/common/domain/repository/post_repository.dart';
import 'package:client_app/core/util/logger.dart';
import 'package:client_app/core/util/result.dart';
import 'package:injectable/injectable.dart';

@LazySingleton(as: PostRepository)
class PostRepositoryImpl implements PostRepository {
  PostRepositoryImpl(this._postDataSource);

  final PostDataSource _postDataSource;

  Future<Result<List<PostEntity>>> getPosts() async {
    try {
      final List<PostModel> posts = await _postDataSource.getPosts();
      final List<PostEntity> postEntities = List.from(
        posts.map((post) => PostEntity.fromJson(post.toJson())),
      );
      return Result.ok(postEntities);
    } catch (e) {
      logger.e('Failed to fetch posts', error: e);
      return Result.error(Exception('Failed to fetch posts: $e'));
    }
  }
}
