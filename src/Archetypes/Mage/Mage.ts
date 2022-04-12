import { EnergyType } from "../../Energy";
import Archetype from "../Archetype";

export default class Mage extends Archetype {
    static type = 'mana';
    static instances = 0;
    constructor(name: string) {
        super(name);
    }

    get energyType(): EnergyType {
        return Mage.type as EnergyType;
    }

    static createdArchetypeInstances(): number {
        return Mage.instances += 1;
    }
}