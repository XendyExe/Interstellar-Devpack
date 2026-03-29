type AssetRecord = {
    blob: Blob;
    hash: string;
};
export type AssetStoreData = Record<string, AssetRecord>;
export declare const internalModpackName = "StrawberryJamPack";
declare class AssetManager {
    database: IDBDatabase | undefined;
    internal: AssetStoreData | undefined;
    urlTable: Record<string, string>;
    modAssetTable: Record<string, AssetStoreData>;
    internalMap: Record<string, string>;
    assetPaths: string[];
    init(): Promise<void>;
    getUpdates(): Promise<number[]>;
    getInternalUpdates(): [string[], string[]];
    pushAssetStore(name: string, storeData: AssetStoreData): Promise<void>;
    loadAssetStore(name: string): Promise<AssetStoreData>;
    putIntoStore(store: IDBObjectStore, key: string, value: any): Promise<unknown>;
    removeFromStore(store: IDBObjectStore, key: string): Promise<unknown>;
    initDatabase(): Promise<IDBDatabase>;
    createAssetStore(name: string, dbName?: string): Promise<void>;
    deleteAssetStore(name: string, dbName?: string): Promise<void>;
    reloadDatabaseWithUpgrade(dbName: string, upgrade: (db: IDBDatabase) => void): Promise<void>;
}
declare const _default: AssetManager;
export default _default;
