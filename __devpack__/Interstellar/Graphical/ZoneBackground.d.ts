declare class ZoneBackground {
    width: number;
    height: number;
    isPixelArt: boolean;
    alpha: number;
    constructor(width: number, height: number, isPixelArt: boolean);
    update(): void;
    render(): void;
    load(): Promise<void>;
    unload(): Promise<void>;
}
export default ZoneBackground;
