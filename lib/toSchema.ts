import { GraphQLSchemaType } from "./GraphQLSchemaType";

export function toSchema(targets: Function | Function[]) {
    if (typeof(targets) === "function") {
        targets = [targets];
    }
    return targets.map(t => new GraphQLSchemaType(t).schema).join("\n");
}
