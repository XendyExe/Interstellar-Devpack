import Zone, { SubZone } from "./Zone";
export default class CycleZone extends Zone {
    style: number[];
    time: number;
    cycleIndex: number;
    lastCycleTime: number;
    constructor(subzones: SubZone[], style: number[], cycleTime: number, currentIndex?: number);
    update(): void;
    updateCycle(): void;
}
