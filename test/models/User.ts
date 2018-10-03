import * as barnacle from "../../lib";

export class User {
    constructor(id: number) { this.id = id; }

    @barnacle.field()
    id: number;

    @barnacle.field({ nullable: true })
    firstName?: string;

    @barnacle.field({ type: "[String]" })
    phoneNumbers?: string[];

    static readonly schema = `type User {
    id: Int!
    firstName: String
    phoneNumbers: [String]!
}`.replace(/[ ]{4}/g, "\t");
}
