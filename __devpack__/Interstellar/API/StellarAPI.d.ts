import { VNode } from "preact";
import { CurrentShipData, PlayerListEntry } from "./Utils";
declare class InterstellarUIAPI {
    settingModels: Record<string, VNode>;
    showPrompt(title: string, description: string, callback: Function): void;
    openPromptEx(title: string, msg: string, type: any, callback: Function, fail_callback: Function): void;
    openPromptConfirm(title: string, description: string, callback: Function): void;
    openModal(model: VNode, error?: boolean, unclosable?: boolean): void;
    closeModel(): void;
    registerSettingsModel(name: string, model: VNode): void;
    preactAppendChild(parent: VNode, node: VNode): void;
    preactInsertBefore(parent: VNode, referenceNode: VNode, node: VNode): void;
    preactInsertAfter(parent: VNode, referenceNode: VNode, node: VNode): void;
    preactPrependChild(parent: VNode, node: VNode): void;
    preactGetChildWithID(vnode: VNode, id: string): VNode | null;
    preactNormalizeChildren(children: any): VNode[];
    toggleUI(model?: string): void;
    openChat(): void;
    closeChat(): void;
    writeChat(innerHTML: string): void;
    getChatInputElement(): HTMLInputElement;
    isChatInputFocused(): boolean;
}
declare class InterstellarInputAPI {
    keyDown(keyCode: string): boolean;
    keyPressed(keyCode: string): boolean;
    keyPressedFrame(keyCode: string): boolean;
    mouseX(): number;
    mouseY(): number;
    mouseButtonDown(mouseButton: number): boolean;
    mouseButtonPressed(mouseButton: number): boolean;
    mouseButtonPressedFrame(mouseButton: number): boolean;
    mouseButtonReleasedFrame(mouseButton: number): any;
    dragInventoryItem(sourceSlot: number, targetSlot: number, split?: boolean): void;
    getInputObject(): any;
    getInternalInputObject(): any;
}
export declare class InterstellarPacketAPI {
    ClMsgCtrlCmd: any;
    ClMsgHeartbeat: any;
    ClMsgChat: any;
    ClMsgComms: any;
    ClMsgTeamAct: any;
    ClMsgPUICommand: any;
    ClMsgBlockSettings: any;
    ClMsgOutfitRequest: any;
    ClMsgEntConfig: any;
    ClMsgBlueprint: any;
    ClMsgPvPTeam: any;
    ClMsgMuteWarning: any;
    SvMsgSetPaintColor: any;
    SvMsgCommsBubble: any;
    SvMsgOutfitResponse: any;
    SvMsgItemManifest: any;
    SvMsgLabScores: any;
    SvMsgLockdownOverrideWarning: any;
    SvMsgRelayStats: any;
    SvMsgFileDownload: any;
    SvMsgSnapshot: any;
    SvMsgCamFocus: any;
    SvMsgWorldInfo: any;
    SvMsgWorldBlocks: any;
    SvMsgChat: any;
    SvMsgCaptainInfo: any;
    SvMsgMotd: any;
    SvMsgPressureInfo: any;
    ClMsgSpawnPlayer: any;
    ClMsgEndSession: any;
    ClMsgShipControl: any;
    ClMsgGetAnchor: any;
    ClMsgUpdateAnchor: any;
    ClMsgSubSpawnDrop: any;
    ClMsgShipDestruct: any;
    ClMsgShipDecay: any;
    ClMsgToggleSlew: any;
    ClMsgPickupRequest: any;
    ClMsgCombatRating: any;
    ClMsgThrustInfo: any;
    ClMsgRequestRelocate: any;
    SvMsgCtrlXfer: any;
    SvMsgKillSession: any;
    SvMsgResetShip: any;
    SvMsgKillConnection: any;
    SvMsgComms: any;
    SvMsgPickupAvailable: any;
    SvMsgPickupUnavailable: any;
    SvMsgPickupSend: any;
    SvMsgDocked: any;
    SvMsgEventWon: any;
    SvMsgEnableEliminationCrit: any;
    SvMsgProfileRelay: any;
    SvMsgPvPTeamLog: any;
    SvMsgHarmShields: any;
    ShMsgSubSpawnShot: any;
    ShMsgResizeShip: any;
    ShMsgInternalRPC: any;
}
declare class InterstellarGameAPI {
    sentCrewControlRequest: boolean;
    cachedCrewControl: PlayerListEntry[];
    cachedPlayers: Set<string>;
    getLocalWorld(): any;
    getLocalOnlinePlayerNames(): string[];
    leaveShip(): any;
}
declare class TurretModes {
    ContinuousFire: any;
    VolleyFire: any;
}
export declare class InterstellarDrednotSettingsAPI {
    TurretModes: TurretModes;
    getSettings(): any;
    setEnableGriefingWarning(enabled: boolean): void;
}
declare class StellarAPI {
    websocket: WebSocket | undefined;
    UI: InterstellarUIAPI;
    Input: InterstellarInputAPI;
    Game: InterstellarGameAPI;
    DrednotSettings: InterstellarDrednotSettingsAPI;
    Packet: InterstellarPacketAPI;
    currentShip: CurrentShipData | null;
    joinShip(server: number | null, data: any): Promise<void>;
    sendPacket(packet: any): void;
    isCaptain(): boolean;
    playerName(): string;
    getSelectedServer(): number;
}
declare const _default: StellarAPI;
export default _default;
