import * as barnacle from "../../lib";

export class FieldsComplex {
    static description = `use provided "type" option`;
    static schema = `type FieldsComplex {
    complexField: [String]!
}`;

    @barnacle.field({ type: "[String]" })
    complexField!: string[];
}
