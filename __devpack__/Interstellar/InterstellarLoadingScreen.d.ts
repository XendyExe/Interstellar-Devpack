export declare class InterstellarLoadingScreen {
    private _title;
    private _description;
    private _element;
    private _container;
    private progressElement;
    private titleElement;
    private descriptionElement;
    constructor(title: string, description: string);
    setDescription(text: string): void;
    setProgress(count: number, total: number): void;
    setUnbounded(): void;
    setTitle(text: string): void;
    complete(): void;
}
