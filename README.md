# barnacle

[![CircleCI](https://circleci.com/gh/aldahick/barnacle/tree/master.svg?style=shield)](https://circleci.com/gh/aldahick/barnacle/tree/master) [![npm version](https://badge.fury.io/js/barnaclejs.svg)](https://badge.fury.io/js/barnaclejs)

Barnacle is a very simple GraphQL helper for Typescript. It exposes several
decorators which allow you to automatically build GraphQL type definitions from
Typescript classes.

## Warning

Barnacle is in very early stages - each version should be stable for use in production,
but breaking API changes are likely to occur semi-regularly between versions.
This will be the case until v0.2.0 is released, at which point the API will be
stable based on the minor version. (When v1.0.0 is released, the API will be stable
based on the major version - but that's a long way away.)

## Usage

Make sure you have the `reflect-metadata` package installed (`npm i reflect-metadata`),
then do `npm i barnaclejs`.

```typescript
import "reflect-metadata";
import * as barnacle from "barnaclejs";

class User {
    // nullable: false by default
    @barnacle.property()
    id!: number;

    @barnacle.property({ nullable: true })
    lastIP?: string;

    // manually override type inference (because Typescript doesn't automagically emit all types :( )
    @barnacle.property({ type: "[String]" })
    phoneNumbers!: string[];

    // not a GraphQL property, no decorator
    getName() {
        return "Bob";
    }
}

console.log(barnacle.toSchema(User)); /* should output:
type User {
    id: Int!
    lastIP: String
    phoneNumbers: [String]!
}
*/
```

## To-do

- [ ] Implement proper unit tests
- [ ] Better type inference (if possible?)
- [ ] Support methods
- [ ] Expand scope to handling requests? (generating resolvers, etc)
