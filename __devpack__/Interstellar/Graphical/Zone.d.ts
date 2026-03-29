import ZoneBackground from "./ZoneBackground";
import { Music } from "../Music/Music";
import { Textures } from "../Modding/Textures";
import PostProcessor from "./PostProcessing/PostProcessor";
import ComplexPostProcessor from "./PostProcessing/ComplexPostProcessor";
export interface SubZone {
    name: string;
    color: number;
    description: string;
    background: ZoneBackground;
    textures: Textures;
    music: Music | null;
    theme: Record<string, string>;
    allProcessors: (PostProcessor | ComplexPostProcessor)[];
    gameProcessors: (PostProcessor | ComplexPostProcessor)[];
    bgProcessors: (PostProcessor | ComplexPostProcessor)[];
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
    render(): void;
}
export default Zone;
