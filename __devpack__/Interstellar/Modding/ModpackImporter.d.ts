import { InterstellarLoadingScreen } from "../InterstellarLoadingScreen";
import { AssetStoreData } from "../StellarAssetManager";
import ModpackConfig from "./ModdingTypes/ModpackConfig";
declare class ModpackImporter {
    importDirectory(dir: FileSystemDirectoryEntry): Promise<void>;
    readDirectoryRecursive(dir: FileSystemDirectoryEntry, result: [string, File][], loadingScreen: InterstellarLoadingScreen): Promise<void>;
    private getFile;
    readDirectoryEntries(dir: FileSystemDirectoryEntry): Promise<FileSystemEntry[]>;
    importZip(file: File): Promise<void>;
    importModpack(name: string, pack: AssetStoreData, loading: InterstellarLoadingScreen): Promise<void>;
    importTexturePack(config: ModpackConfig, pack: AssetStoreData, loading: InterstellarLoadingScreen): Promise<void>;
    importResourcePack(config: ModpackConfig, pack: AssetStoreData, loading: InterstellarLoadingScreen): Promise<void>;
}
declare const _default: ModpackImporter;
export default _default;
