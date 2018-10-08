import * as barnacle from "../../lib";

export class Fields {
    static description = `create a basic field`;
    static schema = `type Fields {
    field: String!
}`;
    @barnacle.field()
    field!: string;
}
