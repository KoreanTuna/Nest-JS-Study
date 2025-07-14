import 'package:client_app/core/util/logger.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

import 'package:hooks_riverpod/hooks_riverpod.dart';

/// 앱의 화면 페이지를 생성하는 유틸리티 클래스
/// [HookConsumerWidget]을 상속하여 hook과 WidetRef로직에 접근할 수 있음
/// Hooks와 StatefulWidget의 Bolierplate 코드를 줄이기 위해 사용

abstract class BaseScreen extends HookConsumerWidget {
  const BaseScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    useEffect(() {
      onInit(ref, context);
      return () {
        onDispose(ref, context);
      };
    }, []);

    useOnAppLifecycleStateChange((previousState, state) async {
      switch (state) {
        case AppLifecycleState.resumed:
          logger.w('App Resumed');
          break;
        case AppLifecycleState.paused:
          logger.w('App Paused');
          onPaused(ref, context);
          break;
        case AppLifecycleState.inactive:
          logger.w('App Inactive');
          onInactive(ref, context);
          break;
        case AppLifecycleState.detached:
          logger.w('App Detached');
          onDetached(ref, context);
          break;
        case AppLifecycleState.hidden:
      }
    });
    return Container(
      color: baseBackgroundColor,
      child: SafeArea(
        top: setTopSafeArea,
        bottom: setBottomSafeArea,
        left: setLeftSafeArea,
        right: setRightSafeArea,
        child: PopScope(
          canPop: canPop,
          child: Scaffold(
            appBar: renderAppBar(context, ref),
            backgroundColor: baseBackgroundColor,
            resizeToAvoidBottomInset: baseResizeToAvoidBottomInset,
            body: buildScreen(context, ref),
          ),
        ),
      ),
    );
  }

  @protected
  PreferredSizeWidget? renderAppBar(BuildContext context, WidgetRef ref) =>
      null;

  @protected
  bool get applyBodyPadding => true;

  @protected
  Widget buildScreen(BuildContext context, WidgetRef ref);

  @protected
  Color? get baseBackgroundColor => Colors.white;

  @protected
  LinearGradient? get backgroundGradient => null;

  @protected
  bool get setBottomSafeArea => true;

  @protected
  bool get setTopSafeArea => true;

  @protected
  bool get setLeftSafeArea => false;

  @protected
  bool get setRightSafeArea => false;

  @protected
  bool get canPop => false;

  @protected
  bool get baseResizeToAvoidBottomInset => true;

  /// 앱이 활성화된 상태로 돌아올 때 호출
  @protected
  void onResumed(WidgetRef ref, BuildContext context) {}

  /// 앱이 일시 정지될 때 호출
  @protected
  void onPaused(WidgetRef ref, BuildContext context) {}

  /// 앱이 비활성 상태로 전환될 때 호출
  @protected
  void onInactive(WidgetRef ref, BuildContext context) {}

  /// 앱이 분리되었을 때 호출
  @protected
  void onDetached(WidgetRef ref, BuildContext context) {}

  /// 페이지 초기화 시 호출
  @protected
  void onInit(WidgetRef ref, BuildContext context) {}

  /// 페이지 해제 시 호출
  @protected
  void onDispose(WidgetRef ref, BuildContext context) {}

  /// will pop시
  @protected
  void onScreenPop(WidgetRef ref, BuildContext context) {}
}
