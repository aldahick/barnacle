# barnacle

Barnacle is a very simple GraphQL helper for Typescript. It exposes several
decorators which allow you to automatically build GraphQL type definitions from
Typescript classes.

## Usage

Make sure you have the `reflect-metadata` package installed (`npm i reflect-metadata`),
then do `npm i barnaclejs`.

```typescript
import "reflect-metadata";
import * as barnacle from "barnaclejs";

const manager = new barnacle.EntityManager();

@barnacle.entity()
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

console.log(manager.toString(User)); /* should output:
type User {
    id: Int!
    lastIP: String
    phoneNumbers: [String]!
}
*/
```

## To-do

- Implement proper unit tests
- Remove manual instantiation of EntityManager (allow still, but use a singleton instance if not specified)
- Better type inference (if possible?)
- Support methods
- Expand scope to handling requests? (generating resolvers, etc)
