import * as barnacle from "../../lib";

export class User {
    constructor(id: number) { this.id = id; }

    @barnacle.property()
    id: number;

    @barnacle.property({ nullable: true })
    firstName?: string;

    @barnacle.property({ type: "[String]" })
    phoneNumbers?: string[];

    static readonly schema = `type User {
    id: Int!
    firstName: String
    phoneNumbers: [String]!
}`.replace(/[ ]{4}/g, "\t");
}
