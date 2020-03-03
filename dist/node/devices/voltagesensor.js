"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const device_1 = require("./device");
const Consts = __importStar(require("../consts"));
/**
 * @class VoltageSensor
 * @extends Device
 */
class VoltageSensor extends device_1.Device {
    constructor(hub, portId) {
        super(hub, portId, exports.ModeMap, Consts.DeviceType.VOLTAGE_SENSOR);
    }
    receive(message) {
        const mode = this._mode;
        switch (mode) {
            case Mode.VOLTAGE:
                if (this.isWeDo2SmartHub) {
                    const voltage = message.readInt16LE(2) / 40;
                    this.notify("voltage", { voltage });
                }
                else {
                    let maxVoltageValue = MaxVoltageValue[this.hub.type];
                    if (maxVoltageValue === undefined) {
                        maxVoltageValue = MaxVoltageValue[Consts.HubType.UNKNOWN];
                    }
                    let maxVoltageRaw = MaxVoltageRaw[this.hub.type];
                    if (maxVoltageRaw === undefined) {
                        maxVoltageRaw = MaxVoltageRaw[Consts.HubType.UNKNOWN];
                    }
                    const voltage = message.readUInt16LE(4) * maxVoltageValue / maxVoltageRaw;
                    /**
                     * Emits when a voltage change is detected.
                     * @event VoltageSensor#voltage
                     * @type {object}
                     * @param {number} voltage
                     */
                    this.notify("voltage", { voltage });
                }
                break;
        }
    }
}
exports.VoltageSensor = VoltageSensor;
var Mode;
(function (Mode) {
    Mode[Mode["VOLTAGE"] = 0] = "VOLTAGE";
})(Mode = exports.Mode || (exports.Mode = {}));
exports.ModeMap = {
    "voltage": Mode.VOLTAGE
};
const MaxVoltageValue = {
    [Consts.HubType.UNKNOWN]: 9.615,
    [Consts.HubType.DUPLO_TRAIN_BASE]: 6.4,
    [Consts.HubType.REMOTE_CONTROL]: 6.4,
};
const MaxVoltageRaw = {
    [Consts.HubType.UNKNOWN]: 3893,
    [Consts.HubType.DUPLO_TRAIN_BASE]: 3047,
    [Consts.HubType.REMOTE_CONTROL]: 3200,
    [Consts.HubType.TECHNIC_MEDIUM_HUB]: 4095,
};
//# sourceMappingURL=voltagesensor.js.map