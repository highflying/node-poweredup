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
const Consts = __importStar(require("../consts"));
const Debug = require("debug");
const debug = Debug("remotecontrol");
/**
 * The RemoteControl is emitted if the discovered device is a Remote Control.
 * @class RemoteControl
 * @extends LPF2Hub
 * @extends BaseHub
 */
class RemoteControl extends lpf2hub_1.LPF2Hub {
    static IsRemoteControl(peripheral) {
        return (peripheral.advertisement &&
            peripheral.advertisement.serviceUuids &&
            peripheral.advertisement.serviceUuids.indexOf(Consts.BLEService.LPF2_HUB.replace(/-/g, "")) >= 0 &&
            peripheral.advertisement.manufacturerData &&
            peripheral.advertisement.manufacturerData.length > 3 &&
            peripheral.advertisement.manufacturerData[3] === Consts.BLEManufacturerData.REMOTE_CONTROL_ID);
    }
    constructor(device) {
        super(device, exports.PortMap, Consts.HubType.REMOTE_CONTROL);
        debug("Discovered Powered UP Remote");
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
exports.RemoteControl = RemoteControl;
exports.PortMap = {
    "LEFT": 0,
    "RIGHT": 1,
    "HUB_LED": 52,
    "VOLTAGE_SENSOR": 59,
    "REMOTE_CONTROL_RSSI": 60
};
//# sourceMappingURL=remotecontrol.js.map