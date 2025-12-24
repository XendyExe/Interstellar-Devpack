import Zone, { SubZone } from "./Zone";
export default class NavZone extends Zone {
    navDefault: number;
    constructor(subzones: SubZone[], currentIndex?: number);
    update(): void;
}
