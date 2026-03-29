interface LoadedTextures extends Set<Blob> {
    memory?: number;
}
export declare const LOADED_TEXTURES: LoadedTextures;
export declare class Textures {
    textures: Record<string, Blob>;
    constructor();
    addTexture(path: string, blob: Blob): void;
    switchToTexture(): void;
}
export {};
