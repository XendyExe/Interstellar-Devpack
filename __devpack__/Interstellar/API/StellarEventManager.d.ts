import { BaseEvent, TriggerEvent } from "./InterstellarEvents";
type EventCtor<T extends BaseEvent = BaseEvent> = new (...args: any[]) => T;
declare class StellarEventManager {
    eventListeners: Record<string, Function[]>;
    private counter;
    private eventRemovalMap;
    triggerListeners: Partial<Record<TriggerEvent, Function[]>>;
    private triggerRemovalMap;
    dispatchEvent(event: BaseEvent): void;
    dispatchTrigger(trigger: TriggerEvent): void;
    addEventListener(event: EventCtor, func: Function): number;
    addTriggerListener(event: TriggerEvent, func: Function): number;
    removeEventListener(id: number): boolean;
    removeTriggerListener(id: number): boolean;
}
declare const _default: StellarEventManager;
export default _default;
