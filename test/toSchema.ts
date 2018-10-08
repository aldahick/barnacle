import { expect } from "chai";
import * as barnacle from "../lib";
import * as Cases from "./cases";

describe("#toSchema()", () => {
    const models = Object.values(Cases);
    for (const model of models) {
        it("should " + model.description, () => {
            expect(barnacle.toSchema(model)).to.equal(model.schema.replace(/[ ]{4}/g, "\t"));
        });
    }
});
