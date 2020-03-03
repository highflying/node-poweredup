"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Debug = require("debug");
const events_1 = require("events");
const debug = Debug("bledevice");
class WebBLEDevice extends events_1.EventEmitter {
    constructor(device) {
        super();
        this._name = "";
        this._listeners = {};
        this._characteristics = {};
        this._queue = Promise.resolve();
        this._mailbox = [];
        this._connected = false;
        this._connecting = false;
        this._webBLEServer = device;
        this._uuid = device.device.id;
        this._name = device.device.name;
        device.device.addEventListener("gattserverdisconnected", () => {
            this._connecting = false;
            this._connected = false;
            this.emit("disconnect");
        });
        setTimeout(() => {
            this.emit("discoverComplete");
        }, 2000);
    }
    get uuid() {
        return this._uuid;
    }
    get name() {
        return this._name;
    }
    get connecting() {
        return this._connecting;
    }
    get connected() {
        return this._connected;
    }
    connect() {
        return new Promise((resolve, reject) => {
            this._connected = true;
            return resolve();
        });
    }
    disconnect() {
        return new Promise((resolve, reject) => {
            this._webBLEServer.device.gatt.disconnect();
            return resolve();
        });
    }
    discoverCharacteristicsForService(uuid) {
        return new Promise(async (discoverResolve, discoverReject) => {
            debug("Service/characteristic discovery started");
            let service;
            try {
                service = await this._webBLEServer.getPrimaryService(uuid);
            }
            catch (err) {
                return discoverReject(err);
            }
            const characteristics = await service.getCharacteristics();
            for (const characteristic of characteristics) {
                this._characteristics[characteristic.uuid] = characteristic;
            }
            debug("Service/characteristic discovery finished");
            return discoverResolve();
        });
    }
    subscribeToCharacteristic(uuid, callback) {
        if (this._listeners[uuid]) {
            this._characteristics[uuid].removeEventListener("characteristicvaluechanged", this._listeners[uuid]);
        }
        // @ts-ignore
        this._listeners[uuid] = (event) => {
            const buf = Buffer.alloc(event.target.value.buffer.byteLength);
            const view = new Uint8Array(event.target.value.buffer);
            for (let i = 0; i < buf.length; i++) {
                buf[i] = view[i];
            }
            return callback(buf);
        };
        this._characteristics[uuid].addEventListener("characteristicvaluechanged", this._listeners[uuid]);
        for (const data of this._mailbox) {
            callback(data);
        }
        this._mailbox = [];
        this._characteristics[uuid].startNotifications();
    }
    addToCharacteristicMailbox(uuid, data) {
        this._mailbox.push(data);
    }
    readFromCharacteristic(uuid, callback) {
        // @ts-ignore
        this._characteristics[uuid].readValue().then((data) => {
            const buf = Buffer.alloc(data.buffer.byteLength);
            const view = new Uint8Array(data.buffer);
            for (let i = 0; i < buf.length; i++) {
                buf[i] = view[i];
            }
            callback(null, buf);
        });
    }
    writeToCharacteristic(uuid, data, callback) {
        this._queue = this._queue.then(() => this._characteristics[uuid].writeValue(data)).then(() => {
            if (callback) {
                callback();
            }
        });
    }
    _sanitizeUUID(uuid) {
        return uuid.replace(/-/g, "");
    }
}
exports.WebBLEDevice = WebBLEDevice;
//# sourceMappingURL=webbledevice.js.map