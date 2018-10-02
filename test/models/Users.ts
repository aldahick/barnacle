import * as barnacle from "../../lib";
import { User } from "./User";

export class Users {
    @barnacle.method()
    findOne(id: number): User { return new User(id); }

    static readonly schema = `type Users {
    findOne(id: Int!): User!
}`.replace(/[ ]{4}/g, "\t");
}
