import { Component, VNode } from "preact";
export default class UIEventDispatcher {
    renderSettings(component: Component, elm: VNode): void;
    renderCrewControl(component: Component, elm: VNode): void;
    renderCrewList(component: Component, elm: VNode): void;
    renderShiplistAdSlotEvent(component: Component, elm: VNode): void;
    renderShipSettings(component: Component, elm: VNode): void;
    renderShiplistSidebar(component: Component, elm: VNode): void;
    renderBigShipEntryEvent(component: Component, elm: VNode): void;
    renderSmallShipEntryEvent(component: Component, elm: VNode): void;
    renderLauncherPUIEvent(component: Component, elm: VNode): void;
    renderSignPUIEvent(component: Component, elm: VNode): void;
    renderCraftingPUIEvent(component: Component, elm: VNode): void;
    renderBlueprintPUIEvent(component: Component, elm: VNode): void;
    private inventory;
    inventoryUpdate(component: Component, elm: VNode): void;
}
