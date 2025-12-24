export declare class StellarNotif {
    private _title;
    private _color;
    private _description;
    constructor(title: string, color: string, description: string);
    setDescription(description: string): Promise<void>;
    setProgress(name: string, progress: number, max: number): Promise<void>;
    complete(): void;
    log(): void;
}
export declare function createNotification(title: string, description: string, color: string): StellarNotif;
