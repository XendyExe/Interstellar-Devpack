export default class Telemetry {
    url: string;
    websocket: WebSocket | null;
    badgeUsers: string[];
    constructor();
    do_telemetry(): Promise<void>;
}
