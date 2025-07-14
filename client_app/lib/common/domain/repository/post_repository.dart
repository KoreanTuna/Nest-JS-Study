import 'package:client_app/common/domain/entities/post_entity.dart';
import 'package:client_app/core/util/result.dart';

abstract interface class PostRepository {
  Future<Result<List<PostEntity>>> getPosts();
}
