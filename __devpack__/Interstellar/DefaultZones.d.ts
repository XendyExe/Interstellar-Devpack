import Zone from "./Graphical/Zone";
import ZoneBackground from "./Graphical/ZoneBackground";
export declare class DefaultBackground extends ZoneBackground {
    bg_color: [number, number, number];
    constructor(bg_color: [number, number, number]);
    render(): void;
}
export declare const DEFAULT_ZONES: Record<string, DefaultZone>;
export declare class DefaultZone extends Zone {
    bg_rgb: [number, number, number];
    constructor(name: string, description: string, description_color: number, background_color: string);
    tick(): void;
    render(): void;
}
export declare function createDefaultZones(): Record<string, DefaultZone>;
