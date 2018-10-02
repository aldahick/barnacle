import {
    getFullGraphQLType,
    getFunctionParameters,
    pushMetadataArray
} from "../util";

export const method = () => <T, K extends keyof T & string>(target: T, key: K) => {
    const func = target[key];
    if (typeof(func) !== "function") {
        throw new Error(`Can't define a method on a non-function member of ${target}: ${key}`);
    }
    const returnType = getFullGraphQLType(Reflect.getMetadata("design:returntype", target, key), false);
    const paramTypes = (Reflect.getMetadata("design:paramtypes", target, key) as any[]).map(type =>
        getFullGraphQLType(type, false)
    );
    const parameters = getFunctionParameters(func).map((parameter, i) => ({
        name: parameter,
        type: paramTypes[i]
    }));
    const schema = `${key}(${parameters.map(p => `${p.name}: ${p.type}`)}): ${returnType}`;
    Reflect.defineMetadata("barnacle:returnType", returnType, target, key);
    Reflect.defineMetadata("barnacle:parameters", parameters, target, key);
    Reflect.defineMetadata("barnacle:schema", schema, target, key);
    pushMetadataArray(target, "barnacle:propertyNames", key);
};
