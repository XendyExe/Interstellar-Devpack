import { BaseModSetting } from "./ModConfiguration";
export declare const settingsModels: {
    name: string;
    model_name: string;
}[];
export declare class IndividualModAPI {
    telemetry: any;
    modid: string;
    modname: string;
    constructor(modid: string, modname: string);
    setConfiguration(options: Record<string, BaseModSetting<any>>): void;
    requestTelemetry(): any;
}
export default class InterstellarScriptingMod {
    modAPI: IndividualModAPI;
    constructor(api: IndividualModAPI);
    preload(): Promise<void>;
    load(): Promise<void>;
}
