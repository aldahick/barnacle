import * as barnacle from "../../lib";

export class MethodsNoArguments {
    static description = `create a "field" for methods without arguments`;
    static schema = `type MethodsNoArguments {
    noArguments: String!
}`;
    @barnacle.field()
    noArguments(): string { return ""; }
}
