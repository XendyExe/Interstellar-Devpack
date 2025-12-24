import { InterstellarLoadingScreen } from "./InterstellarLoadingScreen";
import { AssetStoreData } from "./StellarAssetManager";
export declare function devUpdate(updateData: AssetStoreData, update: string[], loadingScreen: InterstellarLoadingScreen): Promise<void>;
export declare function cloudflareUpdate(updateData: AssetStoreData, update: string[], loadingScreen: InterstellarLoadingScreen): Promise<void>;
