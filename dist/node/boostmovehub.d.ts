import { Peripheral } from "@abandonware/noble";
import { LPF2Hub } from "./lpf2hub";
import { IBLEDevice } from "./interfaces";
/**
 * The BoostMoveHub is emitted if the discovered device is a Boost Move Hub.
 * @class BoostMoveHub
 * @extends LPF2Hub
 * @extends Hub
 */
export declare class BoostMoveHub extends LPF2Hub {
    static IsBoostMoveHub(peripheral: Peripheral): boolean;
    protected _currentPort: number;
    protected _voltagePort: number;
    constructor(device: IBLEDevice, autoSubscribe?: boolean);
    connect(): Promise<unknown>;
    /**
     * Set the motor speed on a given port.
     * @method BoostMoveHub#setMotorSpeed
     * @param {string} port
     * @param {number | Array.<number>} speed For forward, a value between 1 - 100 should be set. For reverse, a value between -1 to -100. Stop is 0. If you are specifying port AB to control both motors, you can optionally supply a tuple of speeds.
     * @param {number} [time] How long to activate the motor for (in milliseconds). Leave empty to turn the motor on indefinitely.
     * @returns {Promise} Resolved upon successful completion of command. If time is specified, this is once the motor is finished.
     */
    setMotorSpeed(port: string, speed: number | [number, number], time?: number | boolean): Promise<unknown>;
    /**
     * Ramp the motor speed on a given port.
     * @method BoostMoveHub#rampMotorSpeed
     * @param {string} port
     * @param {number} fromSpeed For forward, a value between 1 - 100 should be set. For reverse, a value between -1 to -100. Stop is 0.
     * @param {number} toSpeed For forward, a value between 1 - 100 should be set. For reverse, a value between -1 to -100. Stop is 0.
     * @param {number} time How long the ramp should last (in milliseconds).
     * @returns {Promise} Resolved upon successful completion of command.
     */
    rampMotorSpeed(port: string, fromSpeed: number, toSpeed: number, time: number): Promise<unknown>;
    /**
     * Rotate a motor by a given angle.
     * @method BoostMoveHub#setMotorAngle
     * @param {string} port
     * @param {number} angle How much the motor should be rotated (in degrees).
     * @param {number | Array.<number>} [speed=100] For forward, a value between 1 - 100 should be set. For reverse, a value between -1 to -100. Stop is 0. If you are specifying port AB to control both motors, you can optionally supply a tuple of speeds.
     * @returns {Promise} Resolved upon successful completion of command (ie. once the motor is finished).
     */
    setMotorAngle(port: string, angle: number, speed?: number | [number, number]): Promise<unknown>;
    /**
     * Tell motor to goto an absolute position
     * @method BoostMoveHub#setAbsolutePosition
     * @param {string} port
     * @param {number} pos The position of the motor to go to
     * @param {number | Array.<number>} [speed=100] A value between 1 - 100 should be set (Direction does not apply when going to absolute position)
     * @returns {Promise} Resolved upon successful completion of command (ie. once the motor is finished).
     */
    setAbsolutePosition(port: string, pos: number, speed?: number): Promise<unknown>;
    /**
     * Reset the current motor position as absolute position zero
     * @method BoostMoveHub#resetAbsolutePosition
     * @param {string} port
     * @returns {Promise} Resolved upon successful completion of command (ie. once the motor is finished).
     */
    resetAbsolutePosition(port: string): Promise<unknown>;
    /**
     * Fully (hard) stop the motor on a given port.
     * @method BoostMoveHub#brakeMotor
     * @param {string} port
     * @returns {Promise} Resolved upon successful completion of command.
     */
    brakeMotor(port: string): Promise<unknown>;
    /**
     * Set the light brightness on a given port.
     * @method BoostMoveHub#setLightBrightness
     * @param {string} port
     * @param {number} brightness Brightness value between 0-100 (0 is off)
     * @param {number} [time] How long to turn the light on (in milliseconds). Leave empty to turn the light on indefinitely.
     * @returns {Promise} Resolved upon successful completion of command. If time is specified, this is once the light is turned off.
     */
    setLightBrightness(port: string, brightness: number, time?: number): Promise<unknown>;
    protected _checkFirmware(version: string): void;
}
