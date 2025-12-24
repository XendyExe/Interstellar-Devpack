interface Elements {
    chat: HTMLDivElement;
    inventory: HTMLDivElement;
    motd: HTMLDivElement;
    bottom: HTMLDivElement;
    top: HTMLDivElement;
}
declare class UIPatcher {
    elements: Elements;
    overrideOpacity: number;
    constructor();
    setMenuOpacity(zoom: number): void;
}
declare const _default: UIPatcher;
export default _default;
