import ModpackConfig from "./ModdingTypes/ModpackConfig";
interface BlobContainer {
    blob: Blob;
    [key: string]: any;
}
export declare class TexturePack {
    config: ModpackConfig;
    files: Record<string, Blob>;
    constructor();
    init(flattened: Record<string, BlobContainer>): Promise<TexturePack>;
    load(cache: Record<string, Blob>): Promise<void>;
}
export declare function createTexturePack(flattened: Record<string, BlobContainer>): Promise<TexturePack>;
export {};
