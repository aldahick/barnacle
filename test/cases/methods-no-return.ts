import * as barnacle from "../../lib";

export class MethodsNoReturn {
    static description = `omit return type for void methods`;
    static schema = `type MethodsNoReturn {
    noReturn(a: String!)
}`;

    @barnacle.field()
    noReturn(a: string): void { console.log(a); }
}
