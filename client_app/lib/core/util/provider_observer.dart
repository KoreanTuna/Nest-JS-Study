// Package imports:

import 'package:client_app/core/util/logger.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class ProviderLogger extends ProviderObserver {
  @override
  void didUpdateProvider(
    ProviderObserverContext context,
    Object? previousValue,
    Object? newValue,
  ) {
    logger.d(
      '[Provider Logger]: ${context.provider.name ?? context.runtimeType} didUpdateProvider / pv: $previousValue / nv: $newValue',
    );
  }

  @override
  void didAddProvider(
    ProviderObserverContext context,
    Object? value,
  ) {
    logger.d(
      '[Provider Logger]: ${context.provider.name ?? context.runtimeType} didAddProvider / value : $value',
    );
  }

  @override
  void didDisposeProvider(ProviderObserverContext context) {
    logger.d(
      '[Provider Logger]: ${context.provider.name ?? context.runtimeType} didDisposeProvider',
    );
  }
}
