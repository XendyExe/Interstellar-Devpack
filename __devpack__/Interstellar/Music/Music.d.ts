export declare class Music {
    id: number;
    active: boolean;
    loaded: boolean;
    hash: string;
    name: string;
    assetStore: string;
    path: string;
    start_time: number;
    constructor(path: string, hash: string, startTime: number);
    load(): Promise<void>;
    activate(): Promise<void>;
    play(): Promise<void>;
    tick(): Promise<void>;
    deactivate(): void;
}
