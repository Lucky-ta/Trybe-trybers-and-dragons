import { EnergyType } from "../../Energy";
import Archetype from "../Archetype";

export default class Warrior extends Archetype {
    static type = 'stamina';
    static instances = 0;
    constructor(name: string) {
        super(name);
    }

    get energyType(): EnergyType {
        return Warrior.type as EnergyType;
    }

    static createdArchetypeInstances(): number {
        return Warrior.instances += 1;
    }
}