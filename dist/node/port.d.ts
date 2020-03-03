/// <reference types="node" />
import * as Consts from "./consts";
export declare class Port {
    id: string;
    value: number;
    type: Consts.DeviceType;
    connected: boolean;
    busy: boolean;
    finished: (() => void) | null;
    private _eventTimer;
    constructor(id: string, value: number);
    cancelEventTimer(): void;
    setEventTimer(timer: NodeJS.Timer): void;
}
