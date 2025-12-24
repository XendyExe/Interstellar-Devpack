import { Container } from 'pixi.js';
declare class ZoneBackground {
    private created;
    width: number;
    height: number;
    isPixelArt: boolean;
    container: Container;
    style: string;
    constructor(width: number, height: number, isPixelArt: boolean);
    resize(zoom: number): void;
    create(): void;
    update(): void;
    tick(): void;
    start(): void;
    onSwitch(): void;
}
export default ZoneBackground;
