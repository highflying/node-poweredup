/// <reference types="node" />
import { Hub } from "./hub";
/**
 * @class LPF2Hub
 * @extends Hub
 */
export declare class LPF2Hub extends Hub {
    private static decodeVersion;
    private static decodeMACAddress;
    protected _ledPort: number;
    protected _voltagePort: number | undefined;
    protected _voltageMaxV: number;
    protected _voltageMaxRaw: number;
    protected _currentPort: number | undefined;
    protected _currentMaxMA: number;
    protected _currentMaxRaw: number;
    private _lastTiltX;
    private _lastTiltY;
    private _lastTiltZ;
    private _messageBuffer;
    connect(): Promise<unknown>;
    /**
     * Shutdown the Hub.
     * @method LPF2Hub#shutdown
     * @returns {Promise} Resolved upon successful disconnect.
     */
    shutdown(): Promise<unknown>;
    /**
     * Set the name of the Hub.
     * @method LPF2Hub#setName
     * @param {string} name New name of the hub (14 characters or less, ASCII only).
     * @returns {Promise} Resolved upon successful issuance of command.
     */
    setName(name: string): Promise<unknown>;
    /**
     * Set the color of the LED on the Hub via a color value.
     * @method LPF2Hub#setLEDColor
     * @param {Color} color
     * @returns {Promise} Resolved upon successful issuance of command.
     */
    setLEDColor(color: number | boolean): Promise<unknown>;
    /**
     * Set the color of the LED on the Hub via RGB values.
     * @method LPF2Hub#setLEDRGB
     * @param {number} red
     * @param {number} green
     * @param {number} blue
     * @returns {Promise} Resolved upon successful issuance of command.
     */
    setLEDRGB(red: number, green: number, blue: number): Promise<unknown>;
    sendRaw(message: Buffer): Promise<unknown>;
    protected _activatePortDevice(port: number, type: number, mode: number, format: number, callback?: () => void): void;
    protected _deactivatePortDevice(port: number, type: number, mode: number, format: number, callback?: () => void): void;
    protected _writeMessage(uuid: string, message: Buffer, callback?: () => void): void;
    protected _combinePorts(port: string, type: number): void;
    protected _checkFirmware(version: string): void;
    private _parseMessage;
    private _parseDeviceInfo;
    private _parsePortMessage;
    private _sendPortInformationRequest;
    private _parsePortInformationResponse;
    private _sendModeInformationRequest;
    private _parseModeInformationResponse;
    private _parsePortAction;
    private _parseSensorMessage;
}
