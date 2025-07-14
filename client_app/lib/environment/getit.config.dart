// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// InjectableConfigGenerator
// **************************************************************************

// ignore_for_file: type=lint
// coverage:ignore-file

// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:client_app/common/data/data_source/post_data_source.dart'
    as _i931;
import 'package:client_app/common/data/repository/post_repository_impl.dart'
    as _i170;
import 'package:client_app/common/domain/repository/post_repository.dart'
    as _i19;
import 'package:client_app/common/domain/usecase/post_usecase.dart' as _i110;
import 'package:client_app/core/router/router.dart' as _i471;
import 'package:client_app/core/router/router_observer.dart' as _i215;
import 'package:client_app/core/util/dio.dart' as _i196;
import 'package:dio/dio.dart' as _i361;
import 'package:get_it/get_it.dart' as _i174;
import 'package:go_router/go_router.dart' as _i583;
import 'package:injectable/injectable.dart' as _i526;

extension GetItInjectableX on _i174.GetIt {
  // initializes the registration of main-scope dependencies inside of GetIt
  _i174.GetIt init({
    String? environment,
    _i526.EnvironmentFilter? environmentFilter,
  }) {
    final gh = _i526.GetItHelper(this, environment, environmentFilter);
    final dioModule = _$DioModule();
    final goRouterModule = _$GoRouterModule();
    final postDataSourceModule = _$PostDataSourceModule();
    gh.factory<_i215.RouterObserver>(() => _i215.RouterObserver());
    gh.singleton<_i361.Dio>(() => dioModule.createGitHubDio());
    gh.singleton<_i583.GoRouter>(() => goRouterModule.router);
    gh.lazySingleton<_i931.PostDataSource>(
      () => postDataSourceModule.providePostDataSource(gh<_i361.Dio>()),
    );
    gh.lazySingleton<_i19.PostRepository>(
      () => _i170.PostRepositoryImpl(gh<_i931.PostDataSource>()),
    );
    gh.lazySingleton<_i110.PostUsecase>(
      () => _i110.PostUsecase(gh<_i19.PostRepository>()),
    );
    return this;
  }
}

class _$DioModule extends _i196.DioModule {}

class _$GoRouterModule extends _i471.GoRouterModule {}

class _$PostDataSourceModule extends _i931.PostDataSourceModule {}
