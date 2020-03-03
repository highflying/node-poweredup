/// <reference types="node" />
import { Device } from "./device";
import { IDeviceInterface } from "../interfaces";
/**
 * @class ColorDistanceSensor
 * @extends Device
 */
export declare class ColorDistanceSensor extends Device {
    constructor(hub: IDeviceInterface, portId: number);
    receive(message: Buffer): void;
}
export declare enum Mode {
    COLOR = 0,
    DISTANCE = 1,
    COLOR_AND_DISTANCE = 8
}
export declare const ModeMap: {
    [event: string]: number;
};
