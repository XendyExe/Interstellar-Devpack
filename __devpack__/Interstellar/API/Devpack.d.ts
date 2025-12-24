import { Modpack } from "../Modding/Modpack";
import { ModManifest } from "../Modding/ModpackManager";
import { AssetStoreData } from "../StellarAssetManager";
declare class Devpack {
    assetTree: AssetStoreData;
    dirurl: string;
    modpack: Modpack | undefined;
    load(): Promise<void>;
    getFile(path: string): Promise<{
        blob: Blob;
        hash: string;
    }>;
    getManifest(): Promise<ModManifest | null>;
}
declare const _default: Devpack;
export default _default;
