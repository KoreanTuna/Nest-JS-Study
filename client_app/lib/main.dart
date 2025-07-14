import 'package:client_app/core/util/provider_observer.dart';
import 'package:client_app/environment/getit.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();

  setUpGetItConfig();
  runApp(
    ProviderScope(
      observers: [ProviderLogger()],
      child: MainApp(),
    ),
  );
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      routerConfig: locator<GoRouter>(),
    );
  }
}
