import { EnergyType } from "../../Energy";
import Archetype from "../Archetype";

export default class Ranger extends Archetype {
    static type = 'stamina';
    static instances = 0;
    constructor(name: string) {
        super(name);
    }

    get energyType(): EnergyType {
        return Ranger.type as EnergyType;
    }

    static createdArchetypeInstances(): number {
        return Ranger.instances += 1;
    }
}