import { GraphQLSchemaField } from "./GraphQLSchemaField";

export class GraphQLSchemaType {
    readonly fields: {[key: string]: GraphQLSchemaField} = {};
    constructor(
        readonly target: Function
    ) {
        for (const fieldName of this.fieldNames) {
            this.fields[fieldName] = new GraphQLSchemaField(this.target, fieldName);
        }
    }

    get fieldNames(): string[] {
        return Reflect.getMetadata("barnacle:fieldNames", this.target.prototype) || [];
    }

    get schema() {
        const fieldsSchema = Object.values(this.fields).map(f => f.schema).join("\n\t");
        return `type ${this.target.name} {\n\t${fieldsSchema}\n}`.replace(/[ ]{4}/g, "\t");
    }
}
