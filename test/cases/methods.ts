import * as barnacle from "../../lib";

export class Methods {
    static description = `create a basic method`;
    static schema = `type Methods {
    method(a: String!): String!
}`;

    @barnacle.field()
    method(a: string): string { return a; }
}
