interface InterstellarSettingTypes {
    musicVolume: number;
}
export declare class InterstellarSettings {
    settings: InterstellarSettingTypes;
    constructor();
    createState(state: Record<string, any>): void;
    update(): void;
    setDefault(): void;
    load(): void;
}
export {};
