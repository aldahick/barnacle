export function pushMetadataArray<T, V>(target: T, key: string, value: V) {
    Reflect.defineMetadata(key, (Reflect.hasMetadata(key, target)
        ? Reflect.getMetadata(key, target) as V[]
        : []).concat([value]), target);
}
