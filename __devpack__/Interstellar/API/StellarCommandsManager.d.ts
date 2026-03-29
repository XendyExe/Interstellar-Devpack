export declare abstract class Argument<T> {
    abstract autocomplete(split: string): string[];
    abstract extractValue(split: string): T;
    name: string;
    greedy: boolean;
    constructor(name: string);
}
export declare class OptionsArgument extends Argument<string> {
    options: string[];
    hidden: string[];
    constructor(name: string, options: string[], hidden?: string[]);
    autocomplete(split: string): string[];
    extractValue(split: string): string;
}
export declare class IntArgument extends Argument<number> {
    autocomplete(split: string): string[];
    extractValue(split: string): number;
}
export declare class FloatArgument extends Argument<number> {
    autocomplete(split: string): string[];
    extractValue(split: string): number;
}
export declare class StringArgument extends Argument<string> {
    autocomplete(split: string): string[];
    extractValue(split: string): string;
}
export declare class PlayerArgument extends Argument<string> {
    greedy: boolean;
    autocomplete(split: string): string[];
    extractValue(split: string): string;
}
export declare abstract class BaseCommand {
    abstract name: string;
    abstract alias: string[];
    abstract arguments: Argument<any>[];
    abstract testOnly: boolean;
    requireCaptain: boolean;
    abstract execute(...any: any): string | undefined | void;
}
export declare class DrednotCommand extends BaseCommand {
    name: string;
    alias: string[];
    testOnly: boolean;
    arguments: Argument<any>[];
    constructor(name: string, aliases: string[], testOnly: boolean, args: Argument<any>[], requireCaptain?: boolean);
    execute(...args: string[]): string;
}
export declare class WarpCommand extends BaseCommand {
    name: string;
    alias: never[];
    testOnly: boolean;
    requireCaptain: boolean;
    arguments: OptionsArgument[];
    execute(arg: string): string;
}
declare class StellarCommandsManager {
    chatAutocompleteElement: HTMLDivElement;
    chatInputElement: HTMLInputElement;
    activeAutocomplete: HTMLDivElement | null;
    possibleAutocomplete: string[];
    autoIndex: number;
    inputSplits: string[];
    pullingChatHistory: boolean;
    registeredCommands: BaseCommand[];
    currentChatHistory: number;
    chatHistory: string[];
    allCommands: Record<string, BaseCommand>;
    constructor();
    onChatClose(): void;
    onMessageSend(text: string): string;
    chatChanged(text: string): void;
    private generateAutocompletes;
    private updateActiveAutoComplete;
    registerCommand(command: BaseCommand): void;
    removeCommand(name: string): void;
    private autocomplete;
    private findCommand;
    executeCommand(text: string): string;
}
declare const _default: StellarCommandsManager;
export default _default;
