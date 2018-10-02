import { EntityManager } from "../EntityManager";

export const entity = (manager: EntityManager): ClassDecorator => target => {
    console.log("entity()");
    Reflect.defineMetadata("barnacle:manager", manager, target);
    manager.addEntity(target);
};
