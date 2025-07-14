import 'package:client_app/common/widget/base/base_screen.dart';
import 'package:client_app/core/router/router_path.dart';
import 'package:flutter/widgets.dart';
import 'package:go_router/go_router.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class SplashScreen extends BaseScreen {
  const SplashScreen({super.key});

  @override
  Widget buildScreen(BuildContext context, WidgetRef ref) {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      context.goNamed(RouterPath.home);
    });

    return Container();
  }
}
