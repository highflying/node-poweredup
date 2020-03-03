"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const compare_versions_1 = __importDefault(require("compare-versions"));
const lpf2hub_1 = require("./lpf2hub");
const Consts = __importStar(require("../consts"));
const Debug = require("debug");
const debug = Debug("movehub");
/**
 * The MoveHub is emitted if the discovered device is a Move Hub.
 * @class MoveHub
 * @extends LPF2Hub
 * @extends BaseHub
 */
class MoveHub extends lpf2hub_1.LPF2Hub {
    static IsMoveHub(peripheral) {
        return (peripheral.advertisement &&
            peripheral.advertisement.serviceUuids &&
            peripheral.advertisement.serviceUuids.indexOf(Consts.BLEService.LPF2_HUB.replace(/-/g, "")) >= 0 &&
            peripheral.advertisement.manufacturerData &&
            peripheral.advertisement.manufacturerData.length > 3 &&
            peripheral.advertisement.manufacturerData[3] === Consts.BLEManufacturerData.MOVE_HUB_ID);
    }
    constructor(device) {
        super(device, exports.PortMap, Consts.HubType.MOVE_HUB);
        debug("Discovered Move Hub");
    }
    connect() {
        return new Promise(async (resolve, reject) => {
            debug("Connecting to Move Hub");
            await super.connect();
            debug("Connect completed");
            return resolve();
        });
    }
    _checkFirmware(version) {
        if (compare_versions_1.default("2.0.00.0017", version) === 1) {
            throw new Error(`Your Move Hub's (${this.name}) firmware is out of date and unsupported by this library. Please update it via the official Powered Up app.`);
        }
    }
}
exports.MoveHub = MoveHub;
exports.PortMap = {
    "A": 0,
    "B": 1,
    "C": 2,
    "D": 3,
    "HUB_LED": 50,
    "TILT_SENSOR": 58,
    "CURRENT_SENSOR": 59,
    "VOLTAGE_SENSOR": 60
};
//# sourceMappingURL=movehub.js.map