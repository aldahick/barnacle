import {
    getFullGraphQLType,
    getFunctionParameters,
    pushMetadataArray
} from "../util";

type FieldOptions = {
    /** return type if this decorator is applied to a method */
    type?: Function | string;
    /**
     * default: false
     * applies to return type if decorating a method
     */
    nullable?: boolean;
    /** only applicable for methods */
    arguments?: {[key: string]: Function | string};
};

export const field = (options?: FieldOptions) => <T, K extends keyof T & string>(target: T, key: K) => {
    const isFunction = typeof(target[key]) === "function";
    options = options || {};
    if (options.arguments && !isFunction) {
        throw new Error("Cannot define arguments for non-function " + target.constructor.name + "." + key);
    }
    options.type = options.type || Reflect.getMetadata(isFunction ? "design:returntype" : "design:type", target, key) as Function;
    options.nullable = options.nullable === undefined ? false : options.nullable;
    options.arguments = options.arguments || {};
    const type = getFullGraphQLType(options.type, options.nullable);
    let schema = key as string;
    if (isFunction) {
        const paramTypes = ((Reflect.getMetadata("design:paramtypes", target, key) || []) as any[]).map(type =>
            getFullGraphQLType(type, false)
        );
        const parameters = getFunctionParameters(target[key] as any).map((parameter, i) => ({
            name: parameter,
            type: options!.arguments![parameter] || paramTypes[i]
        }));
        if (parameters.length > 0) {
            schema += `(${parameters.map(p => `${p.name}: ${p.type}`)})`;
        }
        Reflect.defineMetadata("barnacle:parameters", parameters, target, key);
    }
    if (type !== undefined) {
        schema += `: ${type}`;
    }
    Reflect.defineMetadata("barnacle:type", type, target, key);
    Reflect.defineMetadata("barnacle:schema", schema, target, key);
    pushMetadataArray(target, "barnacle:propertyNames", key);
};
