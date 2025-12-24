export declare function LoadDebugRequires(): void;
export declare class DebugDrawer {
    frameTimeTotal: number;
    interstellarFrameTime: number;
    updateTotalFrameTime(t: number): void;
    updateInterstellarFrameTime(t: number): void;
    drawTickTime(t: string, a: any, l: number): void;
    drawDebugInfo(network: any, ship: any, world: any, relay: any): void;
}
