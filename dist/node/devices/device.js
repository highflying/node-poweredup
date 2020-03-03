"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const Consts = __importStar(require("../consts"));
/**
 * @class Device
 * @extends EventEmitter
 */
class Device extends events_1.EventEmitter {
    constructor(hub, portId, modeMap = {}, type = Consts.DeviceType.UNKNOWN) {
        super();
        this.autoSubscribe = true;
        this._busy = false;
        this._connected = true;
        this._modeMap = {};
        this._isVirtualPort = false;
        this._eventTimer = null;
        this._hub = hub;
        this._portId = portId;
        this._type = type;
        this._modeMap = modeMap;
        this._isWeDo2SmartHub = (this.hub.type === Consts.HubType.WEDO2_SMART_HUB);
        this._isVirtualPort = this.hub.isPortVirtual(portId);
        const eventAttachListener = (event) => {
            if (event === "detach") {
                return;
            }
            if (this.autoSubscribe) {
                if (this._modeMap[event] !== undefined) {
                    this.subscribe(this._modeMap[event]);
                }
            }
        };
        const deviceDetachListener = (device) => {
            if (device.portId === this.portId) {
                this._connected = false;
                this.hub.removeListener("detach", deviceDetachListener);
                this.emit("detach");
            }
        };
        for (const event in this._modeMap) {
            if (this.hub.listenerCount(event) > 0) {
                eventAttachListener(event);
            }
        }
        this.hub.on("newListener", eventAttachListener);
        this.on("newListener", eventAttachListener);
        this.hub.on("detach", deviceDetachListener);
    }
    /**
     * @readonly
     * @property {boolean} connected Check if the device is still attached.
     */
    get connected() {
        return this._connected;
    }
    /**
     * @readonly
     * @property {Hub} hub The Hub the device is attached to.
     */
    get hub() {
        return this._hub;
    }
    get portId() {
        return this._portId;
    }
    /**
     * @readonly
     * @property {string} portName The port the device is attached to.
     */
    get portName() {
        return this.hub.getPortNameForPortId(this.portId);
    }
    /**
     * @readonly
     * @property {number} type The type of the device
     */
    get type() {
        return this._type;
    }
    get typeName() {
        return Consts.DeviceTypeNames[this.type];
    }
    /**
     * @readonly
     * @property {number} mode The mode the device is currently in
     */
    get mode() {
        return this._mode;
    }
    get isWeDo2SmartHub() {
        return this._isWeDo2SmartHub;
    }
    /**
     * @readonly
     * @property {boolean} isVirtualPort Is this device attached to a virtual port (ie. a combined device)
     */
    get isVirtualPort() {
        return this._isVirtualPort;
    }
    writeDirect(mode, data) {
        if (this.isWeDo2SmartHub) {
            return this.send(Buffer.concat([Buffer.from([this.portId, 0x01, 0x02]), data]), Consts.BLECharacteristic.WEDO2_MOTOR_VALUE_WRITE);
        }
        else {
            return this.send(Buffer.concat([Buffer.from([0x81, this.portId, 0x11, 0x51, mode]), data]), Consts.BLECharacteristic.LPF2_ALL);
        }
    }
    send(data, characteristic = Consts.BLECharacteristic.LPF2_ALL) {
        this._ensureConnected();
        return this.hub.send(data, characteristic);
    }
    subscribe(mode) {
        this._ensureConnected();
        console.log('subscribe', this.portId, this.type, mode);
        if (mode !== this._mode) {
            this._mode = mode;
            this.hub.subscribe(this.portId, this.type, mode);
        }
    }
    unsubscribe(mode) {
        this._ensureConnected();
    }
    receive(message) {
        this.notify("receive", { message });
    }
    notify(event, values) {
        // this.values[event] = values;
        this.emit(event, values);
        if (this.hub.listenerCount(event) > 0) {
            console.log({ event, this: this, values });
            this.hub.emit(event, this, values);
        }
    }
    finish() {
        this._busy = false;
        if (this._finished) {
            this._finished();
            this._finished = undefined;
        }
    }
    setEventTimer(timer) {
        this._eventTimer = timer;
    }
    cancelEventTimer() {
        if (this._eventTimer) {
            clearTimeout(this._eventTimer);
            this._eventTimer = null;
        }
    }
    _ensureConnected() {
        if (!this.connected) {
            throw new Error("Device is not connected");
        }
    }
}
exports.Device = Device;
//# sourceMappingURL=device.js.map