import { Filter } from "pixi.js";
import ZoneBackground from "./ZoneBackground";
import { Music } from "../Music/Music";
import { Textures } from "../Modding/Textures";
export interface SubZone {
    name: string;
    color: number;
    description: string;
    background: ZoneBackground;
    filter: Filter[];
    textures: Textures;
    music: Music | null;
    theme: Record<string, string>;
}
declare class Zone {
    displayName: string;
    displayDescription: string;
    displayColor: number;
    subzones: SubZone[];
    active: boolean;
    useSmoothTransition: boolean;
    currentMusic: any | null;
    currentIndex: number;
    transitionTarget: number;
    constructor(subzones: SubZone[], currentIndex?: number);
    teleportToZone(other: Zone): void;
    createZone(): void;
    tick(): void;
    update(): void;
}
export default Zone;
