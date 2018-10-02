export function toSchema(target: Function) {
    const propertyNames: string[] = Reflect.getMetadata("barnacle:propertyNames", target.prototype) || [];
    const graphqlProperties = propertyNames.map(property =>
        `${property}: ${Reflect.getMetadata("barnacle:type", target.prototype, property)}`
    );
    return `type ${target.name} {\n\t${graphqlProperties.join("\n\t")}\n}`.replace(/[ ]{4}/g, "\t");
}
