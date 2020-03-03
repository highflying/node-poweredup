import { Peripheral } from "@abandonware/noble";
import { LPF2Hub } from "./lpf2hub";
import { IBLEDevice } from "./interfaces";
/**
 * The DuploTrainBase is emitted if the discovered device is a Duplo Train Base.
 * @class DuploTrainBase
 * @extends LPF2Hub
 * @extends Hub
 */
export declare class DuploTrainBase extends LPF2Hub {
    static IsDuploTrainBase(peripheral: Peripheral): boolean;
    protected _ledPort: number;
    protected _voltagePort: number;
    protected _voltageMaxV: number;
    protected _voltageMaxRaw: number;
    constructor(device: IBLEDevice, autoSubscribe?: boolean);
    connect(): Promise<unknown>;
    /**
     * Set the motor speed on a given port.
     * @method DuploTrainBase#setMotorSpeed
     * @param {string} port
     * @param {number | Array.<number>} speed For forward, a value between 1 - 100 should be set. For reverse, a value between -1 to -100. Stop is 0. If you are specifying port AB to control both motors, you can optionally supply a tuple of speeds.
     * @param {number} [time] How long to activate the motor for (in milliseconds). Leave empty to turn the motor on indefinitely.
     * @returns {Promise} Resolved upon successful completion of command. If time is specified, this is once the motor is finished.
     */
    setMotorSpeed(port: string, speed: number, time?: number | boolean): Promise<unknown>;
    /**
     * Ramp the motor speed on a given port.
     * @method DuploTrainBase#rampMotorSpeed
     * @param {string} port
     * @param {number} fromSpeed For forward, a value between 1 - 100 should be set. For reverse, a value between -1 to -100. Stop is 0.
     * @param {number} toSpeed For forward, a value between 1 - 100 should be set. For reverse, a value between -1 to -100. Stop is 0.
     * @param {number} time How long the ramp should last (in milliseconds).
     * @returns {Promise} Resolved upon successful completion of command.
     */
    rampMotorSpeed(port: string, fromSpeed: number, toSpeed: number, time: number): Promise<unknown>;
    /**
     * Fully (hard) stop the motor on a given port.
     * @method DuploTrainBase#brakeMotor
     * @param {string} port
     * @returns {Promise} Resolved upon successful completion of command.
     */
    brakeMotor(port: string): Promise<unknown>;
    /**
     * Play a built-in train sound.
     * @method DuploTrainBase#playSound
     * @param {DuploTrainBaseSound} sound
     * @returns {Promise} Resolved upon successful issuance of command.
     */
    playSound(sound: number): Promise<unknown>;
}
