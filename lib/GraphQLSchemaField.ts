type MetadataParameter = {
    name: string;
    type: string | Function;
};

export class GraphQLSchemaField {
    constructor(
        readonly target: Function,
        readonly name: string
    ) { }

    getMetadata<T>(key: string): T {
        return Reflect.getMetadata(key, this.target.prototype, this.name);
    }

    get schema() {
        let schema = this.name;
        if (typeof(this.target.prototype[this.name]) === "function") {
            const parameters = this.getMetadata<MetadataParameter[]>("barnacle:parameters");
            if (parameters.length > 0) {
                schema += `(${parameters.map(p => `${p.name}: ${p.type}`)})`;
            }
        }
        const type: string | undefined = this.getMetadata("barnacle:type");
        if (type) schema += ": " + type;
        return schema;
    }
}
