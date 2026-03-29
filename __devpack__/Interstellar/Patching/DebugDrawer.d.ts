export declare function LoadDebugRequires(): void;
export declare class DebugDrawer {
    frameTimeTotal: number;
    actualFrameTime: number;
    debugMenuDrawTime: number;
    debuggerElement: HTMLPreElement;
    drawingDebugInfo: boolean;
    showing: boolean;
    constructor();
    updateTotalFrameTime(t: number): void;
    shipTimeText(t: string, a: any): string;
    drawTickTime(t: string, a: any, l: number): void;
    frameAverage: number;
    idleAverage: number;
    actualIdleAverage: number;
    drawDebugInfo(network: any, ship: any, world: any, relay: any): void;
    writeDebugInfo(network: any, ship: any, world: any, relay: any): void;
}
