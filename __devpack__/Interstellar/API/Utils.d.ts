export interface BlobContainer {
    blob: Blob;
    [key: string]: any;
}
export declare function arraysEqual(a: any[], b: any[]): boolean;
export interface InputDragInfo {
    source: number;
    target: number;
    split: boolean;
}
export interface CurrentShipData {
    name: string;
    hex: string;
    health: number;
    max_health: number;
    warp_time: number;
    max_warp_time: number;
}
export interface PlayerListEntry {
    alias_discrims: [string, number][];
    captain_rank: number;
    discrim: string;
    discrim_color: number;
    extra_aliases: number | null;
    items: number[];
    online_count: number;
    ref_id: number;
    team_rank: number;
    time: number;
}
