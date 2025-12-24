import { InterstellarLoadingScreen } from "../InterstellarLoadingScreen";
import { Music } from "./Music";
export interface MusicCache {
    used: boolean;
    length: number;
    entries: number;
    name: string;
}
declare class MusicPlayer {
    audioContext: AudioContext;
    private pendingPlay;
    private isUnlocked;
    musics: Music[];
    loader: Promise<void>;
    ready: boolean;
    musicCacheDB: IDBDatabase | undefined;
    musicCache: Record<string, MusicCache>;
    waitUntilReady(): Promise<void>;
    constructor();
    loadMusic(toBeLoaded: Music[]): Promise<void>;
    setupAudioCache(): Promise<void>;
    pushCache(name: string, hash: string, length: number, left: Int16Array[], right: Int16Array[]): Promise<void>;
    putIntoStore(store: IDBObjectStore, key: string, value: any): Promise<unknown>;
    pruneAudioCache(loading: InterstellarLoadingScreen): Promise<void>;
    private setupUnlockListeners;
    play(music: Music): Promise<void> | null;
    tick(dt: number): void;
    checkCache(id: string): Promise<void>;
}
declare const musicPlayer: MusicPlayer;
export default musicPlayer;
