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
 * @class CurrentSensor
 * @extends Device
 */
class CurrentSensor extends device_1.Device {
    constructor(hub, portId) {
        super(hub, portId, exports.ModeMap, Consts.DeviceType.CURRENT_SENSOR);
    }
    receive(message) {
        const mode = this.mode;
        switch (mode) {
            case Mode.CURRENT:
                if (this.isWeDo2SmartHub) {
                    const current = message.readInt16LE(2) / 1000;
                    this.notify("current", { current });
                }
                else {
                    let maxCurrentValue = MaxCurrentValue[this.hub.type];
                    if (maxCurrentValue === undefined) {
                        maxCurrentValue = MaxCurrentValue[Consts.HubType.UNKNOWN];
                    }
                    let maxCurrentRaw = MaxCurrentRaw[this.hub.type];
                    if (maxCurrentRaw === undefined) {
                        maxCurrentRaw = MaxCurrentRaw[Consts.HubType.UNKNOWN];
                    }
                    const current = message.readUInt16LE(4) * maxCurrentValue / maxCurrentRaw;
                    /**
                     * Emits when a current change is detected.
                     * @event CurrentSensor#current
                     * @type {object}
                     * @param {number} current
                     */
                    this.notify("current", { current });
                }
                break;
        }
    }
}
exports.CurrentSensor = CurrentSensor;
var Mode;
(function (Mode) {
    Mode[Mode["CURRENT"] = 0] = "CURRENT";
})(Mode = exports.Mode || (exports.Mode = {}));
exports.ModeMap = {
    "current": Mode.CURRENT
};
const MaxCurrentValue = {
    [Consts.HubType.UNKNOWN]: 2444,
    [Consts.HubType.TECHNIC_MEDIUM_HUB]: 4175,
};
const MaxCurrentRaw = {
    [Consts.HubType.UNKNOWN]: 4095,
};
//# sourceMappingURL=currentsensor.js.map