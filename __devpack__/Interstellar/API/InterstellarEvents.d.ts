import { Component, VNode } from "preact";
import { PlayerListEntry } from "./Utils";
export declare enum TriggerEvent {
    FRAME_START = 0,
    FRAME_END = 1,
    LOAD = 2,
    CONSTANT_TICK = 3,
    DRAW_TOP = 4
}
export declare abstract class BaseEvent {
    dispatch(): void;
}
export declare abstract class UIEvent extends BaseEvent {
    node: VNode;
    component: Component;
    constructor(component: Component, elm: VNode);
}
export declare abstract class CancelableEvent extends BaseEvent {
    private canceled;
    cancelEvent(): void;
    isCanceled(): boolean;
}
export declare class SocketOpenEvent extends BaseEvent {
    socket: WebSocket;
    constructor(ws: WebSocket);
}
export declare class SocketMessageRecieveEvent extends CancelableEvent {
    message: any;
    constructor(m: any);
}
export declare class SocketMessageSendEvent extends CancelableEvent {
    message: any;
    constructor(m: any);
}
export declare class SocketCloseEvent extends BaseEvent {
    socket: WebSocket;
    constructor(ws: WebSocket);
}
export declare class ChatMessageRecieveEvent extends CancelableEvent {
    static parser: DOMParser;
    raw: any;
    packet: any;
    constructor(raw: any, p: any);
    getText(): string;
    getHTML(): string;
}
export declare class ChatMessageSendEvent extends CancelableEvent {
    msg: string;
    constructor(msg: string);
}
export declare class JoinShipEvent extends BaseEvent {
    name: string;
    hex: string;
    constructor(n: string, h: string);
}
export declare class JoinShipRequestEvent extends CancelableEvent {
    server: number | null;
    data: any;
    constructor(s: number | null, d: any);
}
export declare class InventoryChangeEvent extends BaseEvent {
    oldInventory: (number | null)[];
    inventory: (number | null)[];
    inventoryState: any;
    constructor(o: (number | null)[], i: (number | null)[], s: any);
}
export declare class CrewListUpdateEvent extends BaseEvent {
    list: PlayerListEntry[];
    playerList: Record<string, PlayerListEntry>;
    constructor(c: any[]);
}
export declare class ChatCloseEvent extends BaseEvent {
}
export declare class RenderSettingsEvent extends UIEvent {
    accountSettings: VNode;
    audioSettings: VNode;
    gameplaySettings: VNode;
    displaySettings: VNode;
    inputSettings: VNode;
}
type FilterShipEntry = {
    id: number;
    ship: {
        color: string;
        hex_code: string;
        icon_path: string;
        owned: boolean;
        player_count: 0;
        saved: boolean;
        team_name: string;
        time: number;
    };
};
export declare class FilterShipEvent extends BaseEvent {
    data: FilterShipEntry;
    removed: boolean;
    constructor(data: FilterShipEntry);
    removeFromShipyard(): void;
}
export declare class RenderCrewListEvent extends UIEvent {
}
export declare class RenderCrewControlEvent extends UIEvent {
}
export declare class RenderShipSettingsEvent extends UIEvent {
}
export declare class RenderLauncherPUIEvent extends UIEvent {
}
export declare class RenderSignPUIEvent extends UIEvent {
}
export declare class RenderCraftingPUIEvent extends UIEvent {
}
export declare class RenderBlueprintPUIEvent extends UIEvent {
}
export declare class RenderBigShipEntryEvent extends UIEvent {
}
export declare class RenderSmallShipEntryEvent extends UIEvent {
}
export declare class RenderShiplistSidebarEvent extends UIEvent {
}
export declare class RenderShiplistAdSlotEvent extends UIEvent {
}
export declare class ProcessMOTDEvent extends BaseEvent {
    motd: string;
    constructor(d: string);
}
export declare class RenderInventoryEvent extends UIEvent {
}
export declare class RenderAdvertsEvent extends CancelableEvent {
}
export declare class ProcessAdvertsEvent extends BaseEvent {
    data: any;
    constructor(data: any);
}
export declare class AdvertClickEvent extends CancelableEvent {
    url: string;
    hover_sign: any;
    constructor(url: string, hover_sign: any);
}
export declare abstract class RenderPassEvent extends CancelableEvent {
    world: any;
    constructor(world: any);
}
export declare class RenderPassOneEvent extends RenderPassEvent {
}
export declare class RenderPassTwoEvent extends RenderPassEvent {
}
export declare class RenderPassThreeEvent extends RenderPassEvent {
}
export declare function createEventExports(): Record<string, any>;
export {};
