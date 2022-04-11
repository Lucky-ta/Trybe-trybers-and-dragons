import Race from "../Race";

class Dwarf extends Race{
    private _maxLifePoints: number;
    static _instances = 0;

    constructor(name: string, dexterity: number) {
        super(name, dexterity);
        this._maxLifePoints = 80;
    }

    get maxLifePoints(): number {
        return this._maxLifePoints;
    }

    static createdRacesInstances(): number {
        Dwarf._instances += 1;
        return this._instances;
    }
}

export default Dwarf;