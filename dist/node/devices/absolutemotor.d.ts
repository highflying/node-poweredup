/// <reference types="node" />
import { TachoMotor } from "./tachomotor";
import { IDeviceInterface } from "../interfaces";
import * as Consts from "../consts";
/**
 * @class AbsoluteMotor
 * @extends TachoMotor
 */
export declare class AbsoluteMotor extends TachoMotor {
    constructor(hub: IDeviceInterface, portId: number, modeMap?: {
        [event: string]: number;
    }, type?: Consts.DeviceType);
    receive(message: Buffer): void;
    /**
     * Rotate a motor by a given angle.
     * @method AbsoluteMotor#gotoAngle
     * @param {number} angle Absolute position the motor should go to (degrees from 0).
     * @param {number} [speed=100] For forward, a value between 1 - 100 should be set. For reverse, a value between -1 to -100.
     * @returns {Promise} Resolved upon successful completion of command (ie. once the motor is finished).
     */
    gotoAngle(angle: [number, number] | number, speed?: number): Promise<unknown>;
}
export declare enum Mode {
    ROTATION = 2,
    ABSOLUTE = 3
}
export declare const ModeMap: {
    [event: string]: number;
};
