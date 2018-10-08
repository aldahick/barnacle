import * as barnacle from "../../lib";

export class FieldsNullable {
    static description = `use provided "nullable" option`;
    static schema = `type FieldsNullable {
    nullableField: String
}`;
    @barnacle.field({ nullable: true })
    nullableField?: string;
}
