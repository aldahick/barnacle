class Entity {
    constructor(readonly target: Function) {
    }

    toString(): string {
        const propertyNames: string[] = Reflect.getMetadata("barnacle:propertyNames", this.target.prototype) || [];
return `type ${this.target.name} {
    ${propertyNames.map(property => `${property}: ${Reflect.getMetadata("barnacle:type", this.target.prototype, property)}`).join("\n\t")}
}`.replace(/[ ]{4}/g, "\t");
    }
}

export class EntityManager {
    readonly entities: Entity[] = [];
    constructor() { }

    addEntity(target: Function) {
        this.entities.push(new Entity(target));
    }

    toString(target?: Function): string {
        if (!target) return "";
        const entity = this.entities.find(e => e.target === target);
        if (!entity) throw new Error(`Entity ${target.name} was never registered!`);
        return entity.toString();
    }
}
