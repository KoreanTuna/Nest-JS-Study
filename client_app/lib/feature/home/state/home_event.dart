import 'package:client_app/common/provider/post_list_provider.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

mixin class HomeEvent {
  Future<void> fetchPosts(WidgetRef ref) async {
    ref.read(postListProvider.notifier).fetchPosts();
  }
}
