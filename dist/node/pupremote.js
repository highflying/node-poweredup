"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const lpf2hub_1 = require("./lpf2hub");
const port_1 = require("./port");
const Consts = __importStar(require("./consts"));
const Debug = require("debug");
const debug = Debug("pupremote");
/**
 * The PUPRemote is emitted if the discovered device is a Powered UP Remote.
 * @class PUPRemote
 * @extends LPF2Hub
 * @extends Hub
 */
class PUPRemote extends lpf2hub_1.LPF2Hub {
    constructor(device, autoSubscribe = true) {
        super(device, autoSubscribe);
        this._ledPort = 0x34;
        this._voltagePort = 0x3b;
        this._voltageMaxV = 6.4;
        this._voltageMaxRaw = 3200;
        this.type = Consts.HubType.POWERED_UP_REMOTE;
        this._ports = {
            "LEFT": new port_1.Port("LEFT", 0),
            "RIGHT": new port_1.Port("RIGHT", 1)
        };
        debug("Discovered Powered UP Remote");
    }
    static IsPUPRemote(peripheral) {
        return (peripheral.advertisement &&
            peripheral.advertisement.serviceUuids &&
            peripheral.advertisement.serviceUuids.indexOf(Consts.BLEService.LPF2_HUB.replace(/-/g, "")) >= 0 &&
            peripheral.advertisement.manufacturerData &&
            peripheral.advertisement.manufacturerData.length > 3 &&
            peripheral.advertisement.manufacturerData[3] === Consts.BLEManufacturerData.POWERED_UP_REMOTE_ID);
    }
    connect() {
        return new Promise(async (resolve, reject) => {
            debug("Connecting to Powered UP Remote");
            await super.connect();
            debug("Connect completed");
            return resolve();
        });
    }
}
exports.PUPRemote = PUPRemote;
//# sourceMappingURL=pupremote.js.map