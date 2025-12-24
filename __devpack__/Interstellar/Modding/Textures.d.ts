export declare class Textures {
    textures: Record<string, Blob>;
    constructor();
    addTexture(path: string, blob: Blob): void;
    switchToTexture(): void;
}
