import { Attributes, Component, ComponentChildren, MouseEventHandler, Ref, VNode } from "preact";
export declare abstract class BaseModSetting<T> {
    value: T;
    name: string;
    description: string;
    onChange: any;
    constructor(name: string, description: string, defaultValue: T);
    abstract deserialize(value: any): any;
    abstract serialize(): any;
    abstract getRender(state: any, setState: any, requestSerialize: any): VNode;
}
export declare class BooleanModSetting extends BaseModSetting<boolean> {
    deserialize(value: any): void;
    serialize(): boolean;
    getRender(state: any, setState: any, requestSerialize: any): VNode;
}
export declare class DropdownModSetting extends BaseModSetting<string> {
    options: string[];
    constructor(name: string, description: string, defaultValue: any, options: string[]);
    deserialize(value: any): void;
    serialize(): string;
    getRender(state: any, setState: any, requestSerialize: any): VNode;
}
export declare class SliderModSetting extends BaseModSetting<number> {
    min: number;
    max: number;
    step: number;
    constructor(name: string, description: string, defaultValue: any, min: number, max: number, step: number);
    deserialize(value: any): void;
    serialize(): number;
    getRender(state: any, setState: any): VNode;
}
export declare class InputModSetting extends BaseModSetting<string> {
    deserialize(value: any): void;
    serialize(): string;
    getRender(state: any, setState: any): VNode;
}
export declare class ButtonModSetting extends BaseModSetting<null> {
    onClick: MouseEventHandler<HTMLButtonElement>;
    constructor(name: string, description: string, onClick: MouseEventHandler<HTMLButtonElement>);
    deserialize(value: any): void;
    serialize(): void;
    getRender(state: any, setState: any): VNode;
}
type Props = {
    modId: string;
    modname: string;
    options: BaseModSetting<any>[];
};
export default class ModConfiguration extends Component<Props> {
    options: BaseModSetting<any>[];
    localStorageKey: string;
    modname: string;
    constructor(props: Props);
    render(props?: Readonly<Attributes & {
        children?: ComponentChildren;
        ref?: Ref<any>;
    }> | undefined, state?: Readonly<{}> | undefined, context?: any): ComponentChildren;
    save(): void;
}
export declare function createModConfigurationExports(): Record<string, any>;
export {};
