import { EnergyType } from "../../Energy";
import Archetype from "../Archetype";

export default class Necromancer extends Archetype {
    static type = 'mana';
    static instances = 0;
    constructor(name: string) {
        super(name);
    }

    get energyType(): EnergyType {
        return Necromancer.type as EnergyType;
    }

    static createdArchetypeInstances(): number {
        return Necromancer.instances += 1;
    }
}