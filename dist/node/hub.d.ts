/// <reference types="node" />
import { EventEmitter } from "events";
import { IBLEDevice } from "./interfaces";
import { Port } from "./port";
import * as Consts from "./consts";
/**
 * @class Hub
 * @extends EventEmitter
 */
export declare class Hub extends EventEmitter {
    autoSubscribe: boolean;
    useSpeedMap: boolean;
    type: Consts.HubType;
    protected _ports: {
        [port: string]: Port;
    };
    protected _virtualPorts: {
        [port: string]: Port;
    };
    protected _name: string;
    protected _firmwareVersion: string;
    protected _hardwareVersion: string;
    protected _primaryMACAddress: string;
    protected _batteryLevel: number;
    protected _voltage: number;
    protected _current: number;
    protected _rssi: number;
    protected _bleDevice: IBLEDevice;
    private _isConnecting;
    private _isConnected;
    constructor(device: IBLEDevice, autoSubscribe?: boolean);
    /**
     * @readonly
     * @property {string} name Name of the hub
     */
    get name(): string;
    /**
     * @readonly
     * @property {string} firmwareVersion Firmware version of the hub
     */
    get firmwareVersion(): string;
    /**
     * @readonly
     * @property {string} firmwareVersion Hardware version of the hub
     */
    get hardwareVersion(): string;
    /**
     * @readonly
     * @property {string} primaryMACAddress Primary MAC address of the hub
     */
    get primaryMACAddress(): string;
    /**
     * @readonly
     * @property {string} uuid UUID of the hub
     */
    get uuid(): string;
    /**
     * @readonly
     * @property {number} batteryLevel Battery level of the hub (Percentage between 0-100)
     */
    get batteryLevel(): number;
    /**
     * @readonly
     * @property {number} rssi Signal strength of the hub
     */
    get rssi(): number;
    /**
     * @readonly
     * @property {number} voltage Voltage of the hub (Volts)
     */
    get voltage(): number;
    /**
     * @readonly
     * @property {number} current Current usage of the hub (Milliamps)
     */
    get current(): number;
    /**
     * Connect to the Hub.
     * @method Hub#connect
     * @returns {Promise} Resolved upon successful connect.
     */
    connect(): Promise<unknown>;
    /**
     * Disconnect the Hub.
     * @method Hub#disconnect
     * @returns {Promise} Resolved upon successful disconnect.
     */
    disconnect(): Promise<void>;
    /**
     * Subscribe to sensor notifications on a given port.
     * @method Hub#subscribe
     * @param {string} port
     * @param {number} [mode] The sensor mode to activate. If no mode is provided, the default for that sensor will be chosen.
     * @returns {Promise} Resolved upon successful issuance of command.
     */
    subscribe(port: string, mode?: number): Promise<unknown>;
    /**
     * Unsubscribe to sensor notifications on a given port.
     * @method Hub#unsubscribe
     * @param {string} port
     * @returns {Promise} Resolved upon successful issuance of command.
     */
    unsubscribe(port: string): Promise<unknown>;
    /**
     * Sleep a given amount of time.
     *
     * This is a helper method to make it easier to add delays into a chain of commands.
     * @method Hub#sleep
     * @param {number} delay How long to sleep (in milliseconds).
     * @returns {Promise} Resolved after the delay is finished.
     */
    sleep(delay: number): Promise<unknown>;
    /**
     * Wait until a given list of concurrently running commands are complete.
     *
     * This is a helper method to make it easier to wait for concurrent commands to complete.
     * @method Hub#wait
     * @param {Array<Promise<any>>} commands Array of executing commands.
     * @returns {Promise} Resolved after the commands are finished.
     */
    wait(commands: Array<Promise<any>>): Promise<any[]>;
    /**
     * Get the hub type.
     * @method Hub#getHubType
     * @returns {HubType}
     */
    getHubType(): Consts.HubType;
    /**
     * Get the device type for a given port.
     * @method Hub#getPortDeviceType
     * @param {string} port
     * @returns {DeviceType}
     */
    getPortDeviceType(port: string): Consts.DeviceType;
    protected _activatePortDevice(port: number, type: number, mode: number, format: number, callback?: () => void): void;
    protected _deactivatePortDevice(port: number, type: number, mode: number, format: number, callback?: () => void): void;
    protected _registerDeviceAttachment(port: Port, type: number): void;
    protected _getPortForPortNumber(num: number): false | Port;
    protected _mapSpeed(speed: number): number;
    protected _calculateRamp(fromSpeed: number, toSpeed: number, time: number, port: Port): EventEmitter;
    protected _portLookup(portName: string): Port;
    private _getModeForDeviceType;
}
