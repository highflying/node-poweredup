/// <reference types="node" />
import { Peripheral } from "@abandonware/noble";
import { Hub } from "./hub";
import { IBLEDevice } from "./interfaces";
/**
 * The WeDo2SmartHub is emitted if the discovered device is a WeDo 2.0 Smart Hub.
 * @class WeDo2SmartHub
 * @extends Hub
 */
export declare class WeDo2SmartHub extends Hub {
    static IsWeDo2SmartHub(peripheral: Peripheral): boolean;
    private _lastTiltX;
    private _lastTiltY;
    constructor(device: IBLEDevice, autoSubscribe?: boolean);
    connect(): Promise<unknown>;
    /**
     * Set the name of the Hub.
     * @method WeDo2SmartHub#setName
     * @param {string} name New name of the hub (14 characters or less, ASCII only).
     * @returns {Promise} Resolved upon successful issuance of command.
     */
    setName(name: string): Promise<unknown>;
    /**
     * Set the color of the LED on the Hub via a color value.
     * @method WeDo2SmartHub#setLEDColor
     * @param {Color} color
     * @returns {Promise} Resolved upon successful issuance of command.
     */
    setLEDColor(color: number | boolean): Promise<unknown>;
    /**
     * Shutdown the Hub.
     * @method WeDo2SmartHub#shutdown
     * @returns {Promise} Resolved upon successful disconnect.
     */
    shutdown(): Promise<unknown>;
    /**
     * Set the color of the LED on the Hub via RGB values.
     * @method WeDo2SmartHub#setLEDRGB
     * @param {number} red
     * @param {number} green
     * @param {number} blue
     * @returns {Promise} Resolved upon successful issuance of command.
     */
    setLEDRGB(red: number, green: number, blue: number): Promise<unknown>;
    /**
     * Set the motor speed on a given port.
     * @method WeDo2SmartHub#setMotorSpeed
     * @param {string} port
     * @param {number} speed For forward, a value between 1 - 100 should be set. For reverse, a value between -1 to -100. Stop is 0.
     * @param {number} [time] How long to activate the motor for (in milliseconds). Leave empty to turn the motor on indefinitely.
     * @returns {Promise} Resolved upon successful completion of command. If time is specified, this is once the motor is finished.
     */
    setMotorSpeed(port: string, speed: number, time?: number | boolean): Promise<unknown>;
    /**
     * Ramp the motor speed on a given port.
     * @method WeDo2SmartHub#rampMotorSpeed
     * @param {string} port
     * @param {number} fromSpeed For forward, a value between 1 - 100 should be set. For reverse, a value between -1 to -100. Stop is 0.
     * @param {number} toSpeed For forward, a value between 1 - 100 should be set. For reverse, a value between -1 to -100. Stop is 0.
     * @param {number} time How long the ramp should last (in milliseconds).
     * @returns {Promise} Resolved upon successful completion of command.
     */
    rampMotorSpeed(port: string, fromSpeed: number, toSpeed: number, time: number): Promise<unknown>;
    /**
     * Fully (hard) stop the motor on a given port.
     * @method WeDo2SmartHub#brakeMotor
     * @param {string} port
     * @returns {Promise} Resolved upon successful completion of command.
     */
    brakeMotor(port: string): Promise<unknown>;
    /**
     * Play a tone on the Hub's in-built buzzer
     * @method WeDo2SmartHub#playTone
     * @param {number} frequency
     * @param {number} time How long the tone should play for (in milliseconds).
     * @returns {Promise} Resolved upon successful completion of command (ie. once the tone has finished playing).
     */
    playTone(frequency: number, time: number): Promise<unknown>;
    /**
     * Set the light brightness on a given port.
     * @method WeDo2SmartHub#setLightBrightness
     * @param {string} port
     * @param {number} brightness Brightness value between 0-100 (0 is off)
     * @param {number} [time] How long to turn the light on (in milliseconds). Leave empty to turn the light on indefinitely.
     * @returns {Promise} Resolved upon successful completion of command. If time is specified, this is once the light is turned off.
     */
    setLightBrightness(port: string, brightness: number, time?: number): Promise<unknown>;
    sendRaw(message: Buffer, characteristic?: string): Promise<unknown>;
    protected _activatePortDevice(port: number, type: number, mode: number, format: number, callback?: () => void): void;
    protected _deactivatePortDevice(port: number, type: number, mode: number, format: number, callback?: () => void): void;
    private _writeMessage;
    private _getCharacteristicNameFromUUID;
    private _parseHighCurrentAlert;
    private _parseBatteryMessage;
    private _parseFirmwareRevisionString;
    private _parsePortMessage;
    private _parseSensorMessage;
}
