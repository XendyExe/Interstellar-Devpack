declare class ZoneBackground {
    width: number;
    height: number;
    isPixelArt: boolean;
    alpha: number;
    constructor(width: number, height: number, isPixelArt: boolean);
    update(): void;
    render(defaultFillColor: [number, number, number]): void;
    load(): Promise<void>;
    unload(): Promise<void>;
}
export default ZoneBackground;
