// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'post_list_provider.dart';

// **************************************************************************
// RiverpodGenerator
// **************************************************************************

@ProviderFor(PostList)
const postListProvider = PostListProvider._();

final class PostListProvider
    extends $NotifierProvider<PostList, AsyncValue<List<PostEntity>>> {
  const PostListProvider._()
    : super(
        from: null,
        argument: null,
        retry: null,
        name: r'postListProvider',
        isAutoDispose: true,
        dependencies: null,
        $allTransitiveDependencies: null,
      );

  @override
  String debugGetCreateSourceHash() => _$postListHash();

  @$internal
  @override
  PostList create() => PostList();

  /// {@macro riverpod.override_with_value}
  Override overrideWithValue(AsyncValue<List<PostEntity>> value) {
    return $ProviderOverride(
      origin: this,
      providerOverride: $SyncValueProvider<AsyncValue<List<PostEntity>>>(value),
    );
  }
}

String _$postListHash() => r'3de56e074c225039de39a05f43edf70ecd2f41bf';

abstract class _$PostList extends $Notifier<AsyncValue<List<PostEntity>>> {
  AsyncValue<List<PostEntity>> build();
  @$mustCallSuper
  @override
  void runBuild() {
    final created = build();
    final ref =
        this.ref
            as $Ref<AsyncValue<List<PostEntity>>, AsyncValue<List<PostEntity>>>;
    final element =
        ref.element
            as $ClassProviderElement<
              AnyNotifier<
                AsyncValue<List<PostEntity>>,
                AsyncValue<List<PostEntity>>
              >,
              AsyncValue<List<PostEntity>>,
              Object?,
              Object?
            >;
    element.handleValue(ref, created);
  }
}

// ignore_for_file: type=lint
// ignore_for_file: subtype_of_sealed_class, invalid_use_of_internal_member, invalid_use_of_visible_for_testing_member, deprecated_member_use_from_same_package
