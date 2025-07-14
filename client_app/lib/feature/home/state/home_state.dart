import 'package:client_app/common/domain/entities/post_entity.dart';
import 'package:client_app/common/provider/post_list_provider.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

mixin class HomeState {
  AsyncValue<List<PostEntity>> postListState(WidgetRef ref) {
    return ref.watch(postListProvider);
  }
}
