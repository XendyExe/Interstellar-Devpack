import ModpackConfig from "./ModdingTypes/ModpackConfig";
import { BlobContainer } from "../API/Utils";
import InterstellarScriptingMod from "../API/InterstellarScriptingMod";
export declare class Modpack {
    config: ModpackConfig;
    urlCache: Record<string, string>;
    scripting: InterstellarScriptingMod | undefined;
    getFile: Function;
    cleanFiles: Function;
    devpack: boolean;
    initdevpack(getFilesFunction: Function, internal: boolean, cleanFilesFunction: Function, nonvalidation?: boolean): Promise<Modpack>;
    init(getFilesFunction: Function, internal: boolean, cleanFilesFunction: Function, nonvalidation?: boolean): Promise<Modpack>;
    load(textureCache: Record<string, Blob>, nonvalidation?: boolean): Promise<void>;
    loadZones(textureCache: Record<string, Blob>, nonvalidation?: boolean): Promise<void>;
    getFileURL(path: string): Promise<string>;
    readJson(path: string): Promise<any>;
}
export declare function createModpack(flattened: Record<string, BlobContainer>, internal: boolean): Promise<Modpack>;
