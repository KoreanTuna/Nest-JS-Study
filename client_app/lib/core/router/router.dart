import 'package:client_app/core/router/router_observer.dart';
import 'package:client_app/core/router/router_path.dart';
import 'package:client_app/environment/getit.dart';
import 'package:client_app/feature/home/home_screen.dart';
import 'package:client_app/feature/splash/splash_screen.dart';
import 'package:flutter/widgets.dart';
import 'package:go_router/go_router.dart';
import 'package:injectable/injectable.dart';

final GlobalKey<NavigatorState> navigatorKey = GlobalKey<NavigatorState>();

Widget _fadeTransition(
  BuildContext context,
  Animation<double> animation,
  Animation<double> secondaryAnimation,
  Widget child,
) {
  return FadeTransition(opacity: animation, child: child);
}

CustomTransitionPage buildFadeTransitionPage({
  required GoRouterState state,
  required Widget child,
}) {
  return CustomTransitionPage(
    key: state.pageKey,
    child: child,
    transitionsBuilder: _fadeTransition,
  );
}

@module
abstract class GoRouterModule {
  @singleton
  GoRouter get router => GoRouter(
    navigatorKey: navigatorKey,
    observers: [locator<RouterObserver>()],
    initialLocation: '/${RouterPath.splash}',

    routes: [
      GoRoute(
        path: '/',
        builder: (context, state) => Container(),
        routes: [
          GoRoute(
            path: RouterPath.splash,
            name: RouterPath.splash,
            builder: (context, state) => const SplashScreen(),
            pageBuilder: (context, state) => buildFadeTransitionPage(
              state: state,
              child: const SplashScreen(),
            ),
          ),
          GoRoute(
            path: RouterPath.home,
            name: RouterPath.home,
            builder: (context, state) => const HomeScreen(),
            pageBuilder: (context, state) => buildFadeTransitionPage(
              state: state,
              child: const HomeScreen(),
            ),
          ),
        ],
      ),
    ],
  );
}
