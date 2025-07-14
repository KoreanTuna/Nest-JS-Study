import 'package:client_app/common/domain/entities/post_entity.dart';
import 'package:client_app/common/domain/repository/post_repository.dart';
import 'package:client_app/core/util/result.dart';
import 'package:injectable/injectable.dart';

@lazySingleton
class PostUsecase {
  PostUsecase(this._postRepository);
  final PostRepository _postRepository;

  Future<Result<List<PostEntity>>> getPosts() {
    return _postRepository.getPosts();
  }
}
