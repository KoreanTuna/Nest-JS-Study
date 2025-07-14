import 'package:client_app/common/domain/entities/post_entity.dart';
import 'package:client_app/common/domain/usecase/post_usecase.dart';
import 'package:client_app/core/util/result.dart';
import 'package:client_app/environment/getit.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'post_list_provider.g.dart';

@riverpod
class PostList extends _$PostList {
  @override
  AsyncValue<List<PostEntity>> build() {
    return AsyncLoading();
  }

  Future<void> fetchPosts() async {
    Result<List<PostEntity>> result = await locator<PostUsecase>().getPosts();
    state = result.map(
      ok: (data) => AsyncData(data),
      error: (error) {
        // 에러 처리
        return AsyncError(error, StackTrace.current);
      },
    );
  }
}
