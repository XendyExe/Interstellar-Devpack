import { AssetStoreData } from "../StellarAssetManager";
import ModpackConfig from "./ModdingTypes/ModpackConfig";
export interface ModManifest {
    name: string;
    creator: string;
    id: string;
    icon?: string;
    description?: string;
    scripting: boolean;
    texturePack: boolean;
    interstellar: boolean;
    resourcePack: boolean;
    immovable?: boolean;
    fileCount: number;
    size: number;
}
export declare class ModpackManager {
    container: HTMLDivElement | undefined;
    unloadedContainer: HTMLElement | undefined;
    loadedContainer: HTMLElement | undefined;
    defaultIcon: string;
    drednotIcon: string;
    m_interstellarIcon: string;
    m_texturePackIcon: string;
    m_resourcePackIcon: string;
    m_scriptingPackIcon: string;
    deleteModIcon: string;
    update: Function[];
    currentLoadedMods: string[];
    constructor();
    getEnabledModNames(): string[];
    init(): void;
    processModConfig(store: AssetStoreData, storeName: string, stellarData: ModpackConfig, mods: ModManifest[]): void;
    discoverMods(): Promise<void>;
    resize(): void;
    open(): Promise<void>;
    close(): void;
    exportModToZip(id: string): Promise<void>;
    createModEntry(manifest: ModManifest, parent: HTMLElement): HTMLDivElement;
    updateUI(): void;
    createTooltipIcon(icon: string, text: string): HTMLDivElement;
    createAlert(title: string, description: string): boolean;
}
