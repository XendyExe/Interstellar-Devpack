export default class Telemetry {
    url: string;
    websocket: WebSocket | null;
    eventSchema: Record<string, string>;
    eventState: Record<string, {
        time: number;
        event: string;
    }>;
    badgeUsers: string[];
    connected: boolean;
    constructor();
    connect(): void;
    isDisabled(): boolean;
    open(ev: Event): Promise<void>;
    close(ev: CloseEvent): void;
    message(ev: MessageEvent): void;
    error(ev: Event): void;
    send(message: any): void;
}
