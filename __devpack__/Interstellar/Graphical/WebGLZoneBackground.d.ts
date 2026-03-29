import { BackgroundConfig, BackgroundSpriteConfig } from "../Modding/ModdingTypes/BackgroundConfig";
import Backdrop from "./Backdrops/Backdrop";
import ZoneBackground from "./ZoneBackground";
interface Subtexture {
    bitmap: number;
    x: number;
    y: number;
    width: number;
    height: number;
}
interface RawSprite {
    bitmaps: ImageBitmap[];
    subtextures: Subtexture[];
    tiling: string | undefined;
    width: number;
    height: number;
    config: BackgroundSpriteConfig;
    layer: number;
    padding: number;
}
interface GPUSprite {
    x: number;
    y: number;
    width: number;
    height: number;
    tileX: boolean;
    tileY: boolean;
    frameCount: number;
    px: number;
    py: number;
    pxo: number;
    pyo: number;
    pz: number;
    mx: number;
    my: number;
    mt: number;
    bobx: number;
    boby: number;
    bobt: number;
    bobo: number;
    fps: number;
    layer: number;
    startLayer: number;
    startX: number;
    startY: number;
    layerCount: number;
}
export declare class WebGLZoneBackground extends ZoneBackground {
    texture: WebGLTexture | null;
    atlasSize: {
        width: number;
        height: number;
    };
    atlasLayerCount: number;
    spriteCount: number;
    instanceVBO: WebGLBuffer | null;
    quadVBO: WebGLBuffer | null;
    vao: WebGLVertexArrayObject | null;
    instanceData: Float32Array;
    loadedBackdrops: Backdrop[];
    shader: WebGLProgram | null;
    uniforms: Record<string, WebGLUniformLocation | null>;
    shaderOrder: Record<string, [number, number]>;
    startTime: number;
    config_path: string;
    config: BackgroundConfig;
    object_store: string;
    internal_name: string;
    constructor(config_path: string, config: BackgroundConfig, object_store: string, width: number, height: number, isPixelArt: boolean, internal_name: string | undefined);
    logGroup: any[][];
    log(...logged: any[]): void;
    pushLog(msg: string): void;
    performance: Record<string, number>;
    locked: boolean;
    loaded: boolean;
    unload_locked: boolean;
    load(): Promise<void>;
    /**
     * Loads assets from IndexedDB, returning a list of bitmaps and subtextures for further processing.
     * Validates that animated sprites are the same size.
     * @returns The raw sprites loaded from IndexedDB
     */
    loadAssets(): Promise<RawSprite[]>;
    /**
     * Packs raw sprites into spritesheets, and creates the gl textures they use.
     * Also creates the vertex data of each sprite.
     *
     * For now, this function packs all the textures into inefficent shelves for each sprite,
     * not taking account of sprite tail space. Mabye look into skyline shelves in the future?
     * @returns GPUSpries ready for GL loading
     */
    generateTextures(sprites: RawSprite[]): Promise<GPUSprite[]>;
    /**
     * Creates the WebGL2 items to finalize rendering and uploads textures
     * @returns The raw sprites loaded from IndexedDB
     */
    loadGL(sprites: GPUSprite[]): Promise<void>;
    buildInstanceData(sprites: GPUSprite[], shaderData: Record<string, number[][]>): void;
    lastResolutionWidth: number;
    lastResolutionHeight: number;
    lastOpacity: number;
    lastZoomScale: number;
    render(): void;
    unload(): Promise<void>;
}
export {};
