import Race from "../Race";

class Orc extends Race{
    private _maxLifePoints: number;
    static _instances = 0;

    constructor(name: string, dexterity: number) {
        super(name, dexterity);
        this._maxLifePoints = 74;
    }

    get maxLifePoints(): number {
        return this._maxLifePoints;
    }

    static createdRacesInstances(): number {
        Orc._instances += 1;
        return this._instances;
    }
}

export default Orc;