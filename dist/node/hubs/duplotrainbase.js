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
const debug = Debug("duplotrainbase");
/**
 * The DuploTrainBase is emitted if the discovered device is a Duplo Train Base.
 * @class DuploTrainBase
 * @extends LPF2Hub
 * @extends BaseHub
 */
class DuploTrainBase extends lpf2hub_1.LPF2Hub {
    static IsDuploTrainBase(peripheral) {
        return (peripheral.advertisement &&
            peripheral.advertisement.serviceUuids &&
            peripheral.advertisement.serviceUuids.indexOf(Consts.BLEService.LPF2_HUB.replace(/-/g, "")) >= 0 &&
            peripheral.advertisement.manufacturerData &&
            peripheral.advertisement.manufacturerData.length > 3 &&
            peripheral.advertisement.manufacturerData[3] === Consts.BLEManufacturerData.DUPLO_TRAIN_BASE_ID);
    }
    constructor(device) {
        super(device, exports.PortMap, Consts.HubType.DUPLO_TRAIN_BASE);
        debug("Discovered Duplo Train Base");
    }
    connect() {
        return new Promise(async (resolve, reject) => {
            debug("Connecting to Duplo Train Base");
            await super.connect();
            debug("Connect completed");
            return resolve();
        });
    }
}
exports.DuploTrainBase = DuploTrainBase;
exports.PortMap = {
    "MOTOR": 0,
    "COLOR": 18,
    "SPEEDOMETER": 19
};
//# sourceMappingURL=duplotrainbase.js.map