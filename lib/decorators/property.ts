import { getFullGraphQLType } from "../util";

type PropertyOptions = {
    type?: Function | string;
    nullable?: boolean;
};

export const property = (options?: PropertyOptions) => <T, K extends keyof T & string>(target: T, key: K) => {
    options = options || {};
    options.nullable = options.nullable === undefined ? false : options.nullable;
    options.type = options.type || Reflect.getMetadata("design:type", target, key) as Function;
    const type = getFullGraphQLType(options.type, options.nullable);
    Reflect.defineMetadata("barnacle:type", type, target, key);
    Reflect.defineMetadata("barnacle:propertyNames", (Reflect.hasMetadata("barnacle:propertyNames", target)
        ? Reflect.getMetadata("barnacle:propertyNames", target) as string[]
        : []).concat([key]), target);
};
