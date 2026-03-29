export declare function loadTransitionSfx(): void;
declare function glitch(time: number, callback?: () => undefined): void;
export declare function glitchEx(time: number, preback: () => Promise<void>, callback: () => Promise<void>): Promise<void>;
export declare function updateGlitch(): void;
export default glitch;
