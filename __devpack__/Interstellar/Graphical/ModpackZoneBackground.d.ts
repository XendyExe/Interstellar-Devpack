import { AnimatedSprite, Sprite, TilingSprite } from "pixi.js";
import ZoneBackground from "./ZoneBackground";
import { BackgroundSprite } from "../Modding/ModdingTypes/BackgroundConfig";
export declare class ModpackSprite {
    sprite: Sprite | TilingSprite | AnimatedSprite | undefined;
    mx: number;
    my: number;
    mt: number;
    px: number;
    py: number;
    bobx: number;
    boby: number;
    bobt: number;
    bobo: number;
    tile: number;
    x: number;
    y: number;
    ox: number;
    oy: number;
    config: BackgroundSprite;
    constructor(config: BackgroundSprite, bgw: number, bgh: number);
    loadSprite(blob: Blob, bgw: number, bgh: number, pixel: boolean): Promise<void>;
    loadAnimated(blobs: Blob[], bgw: number, bgh: number, pixel: boolean): Promise<void>;
    loadSpritesheet(json: Blob, blob: Blob, bgw: number, bgh: number, pixel: boolean): Promise<void>;
    finalizeAnimatedSprite(animatedSprite: AnimatedSprite, bgw: number, bgh: number): Promise<void>;
    tick(px: number, py: number, time: number): void;
}
export declare class ModpackZoneBackground extends ZoneBackground {
    sprites: ModpackSprite[];
    loading: Promise<void>[];
    startTime: number;
    constructor(width: number, height: number, isPixelArt: boolean);
    addSprite(data: BackgroundSprite, blob: Blob): void;
    addAnimatedSprites(data: BackgroundSprite, blobs: Blob[]): void;
    addSpritesheetSprites(data: BackgroundSprite, blob: Blob, json: Blob): void;
    sortSprites(): void;
    tick(): void;
    onSwitch(): void;
}
