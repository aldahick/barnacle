import * as barnacle from "../../lib";

export class MethodsComplex {
    static description = `use "type" option as return type for methods`;
    static schema = `type MethodsComplex {
    complex(a: String!): [String]!
}`;

    @barnacle.field({ type: "[String]" })
    complex(a: string): string[] { return [a]; }
}
