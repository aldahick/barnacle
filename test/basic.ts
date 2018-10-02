import { install } from "source-map-support";
install();
import * as barnacle from "../lib";

describe("basic", () => {
    it("should work", () => {
        const manager = new barnacle.EntityManager();
        @barnacle.entity(manager)
        class Test1 {
            @barnacle.property()
            aString!: string;

            @barnacle.property({ nullable: true })
            aNumber?: number;

            @barnacle.property({ type: "[Boolean]" })
            anArray!: boolean[];
        }
        console.log(manager.toString(Test1));
    });
});
