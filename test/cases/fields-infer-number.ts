import * as barnacle from "../../lib";

export class FieldsInferNumber {
    static description = "infer number types correctly";
    static schema = `type FieldsInferNumber {
    inferredNumber: Int!
}`;
    @barnacle.field()
    inferredNumber!: number;
}
