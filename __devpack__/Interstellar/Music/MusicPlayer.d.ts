import { Music } from "./Music";
export interface MusicDebugData {
    name: string;
    started: boolean;
    time: bigint;
    length: bigint;
    playing: boolean;
    pause_time_song?: bigint;
    pause_time_start?: bigint;
    buffer_length: number;
    resampler: boolean;
    active: boolean;
    unloading: boolean;
}
export interface CacheDebugData {
    name: string;
    completion: number;
    length: number;
}
export interface ProcessorDebugData {
    wasm_mem: number;
    cache_mem: number;
    loaded_song: MusicDebugData;
    caches: CacheDebugData[];
}
declare class MusicPlayer {
    audioContext: AudioContext;
    requestDebugData: boolean;
    private debugCounter;
    private pendingPlay;
    private isUnlocked;
    musics: Music[];
    ready: boolean;
    current_index: number;
    loadedPromise: Promise<any>;
    private _loadedResolve;
    debug_data: ProcessorDebugData | null;
    node: AudioWorkletNode | null;
    set_master_volume: number;
    set_focused: boolean;
    waitUntilReady(): Promise<void>;
    constructor();
    loadMusic(toBeLoaded: Music[]): Promise<void>;
    private setupUnlockListeners;
    play(music: Music): Promise<void> | null;
    tick(dt: number): void;
}
declare const musicPlayer: MusicPlayer;
export default musicPlayer;
