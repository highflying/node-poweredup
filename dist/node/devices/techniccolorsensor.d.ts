/// <reference types="node" />
import { Device } from "./device";
import { IDeviceInterface } from "../interfaces";
/**
 * @class TechnicColorSensor
 * @extends Device
 */
export declare class TechnicColorSensor extends Device {
    constructor(hub: IDeviceInterface, portId: number);
    receive(message: Buffer): void;
}
export declare enum Mode {
    COLOR = 0,
    REFLECTIVITY = 1,
    AMBIENT_LIGHT = 2
}
export declare const ModeMap: {
    [event: string]: number;
};
