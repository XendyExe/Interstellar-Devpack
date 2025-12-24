export declare function stellarFormatLoadTimes(ms: number): string;
declare class PerformanceMetrics {
    startTime: number;
    splitTime: number;
    text: string[];
    split(name: string): void;
    start(name: string): void;
    end(): void;
    pushBlankLine(): void;
    push(text: string): void;
}
declare const _default: PerformanceMetrics;
export default _default;
