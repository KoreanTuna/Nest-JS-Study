import 'package:client_app/common/widget/base/base_screen.dart';
import 'package:client_app/feature/home/state/home_event.dart';
import 'package:client_app/feature/home/state/home_state.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class HomeScreen extends BaseScreen with HomeState, HomeEvent {
  const HomeScreen({super.key});

  @override
  Widget buildScreen(BuildContext context, WidgetRef ref) {
    useEffect(
      () {
        fetchPosts(ref);
      },
      [],
    );

    return Column(
      children: [
        Text('Home Screen'),

        Expanded(
          child: postListState(ref).when(
            data: (data) => ListView.builder(
              itemCount: data.length,
              itemBuilder: (context, index) {
                final post = data[index];
                return ListTile(
                  title: Text(post.title),
                  subtitle: Text(post.content),
                );
              },
            ),
            error: (error, stackTrace) => Center(
              child: Text('Error: $error'),
            ),
            loading: () => const Center(
              child: CircularProgressIndicator(),
            ),
          ),
        ),
      ],
    );
  }
}
