function getGraphQLType(type: Function): string {
    switch (type.name) {
        case "Number":
            return "Int";
        case "Array":
        case "Object":
        case "Symbol":
            throw new Error("Can't infer type from " + type.name);
    }
    // includes Boolean and String
    return type.name;
}

export function getFullGraphQLType(type: Function | string | undefined, nullable: boolean): string | undefined {
    if (type === undefined) return undefined;
    let rawType = typeof(type) === "string" ? type : getGraphQLType(type);
    if (!nullable) rawType += "!";
    return rawType;
}
