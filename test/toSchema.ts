import { expect } from "chai";
import * as barnacle from "../lib";
import { User } from "./models";

describe("#toSchema()", () => {
    it("should produce correct output for simple model", () => {
        const schema = barnacle.toSchema(User);
        expect(schema).to.equal(User.schema);
    });
});
