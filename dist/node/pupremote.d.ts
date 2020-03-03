import { Peripheral } from "@abandonware/noble";
import { LPF2Hub } from "./lpf2hub";
import { IBLEDevice } from "./interfaces";
/**
 * The PUPRemote is emitted if the discovered device is a Powered UP Remote.
 * @class PUPRemote
 * @extends LPF2Hub
 * @extends Hub
 */
export declare class PUPRemote extends LPF2Hub {
    static IsPUPRemote(peripheral: Peripheral): boolean;
    protected _ledPort: number;
    protected _voltagePort: number;
    protected _voltageMaxV: number;
    protected _voltageMaxRaw: number;
    constructor(device: IBLEDevice, autoSubscribe?: boolean);
    connect(): Promise<unknown>;
}
