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
 * @class TechnicMediumHubTiltSensor
 * @extends Device
 */
class TechnicMediumHubTiltSensor extends device_1.Device {
    constructor(hub, portId) {
        super(hub, portId, exports.ModeMap, Consts.DeviceType.TECHNIC_MEDIUM_HUB_TILT_SENSOR);
    }
    receive(message) {
        const mode = this._mode;
        switch (mode) {
            case Mode.TILT:
                /**
                 * Emits when a tilt sensor is activated.
                 * @event TechnicMediumHubTiltSensor#tilt
                 * @type {object}
                 * @param {number} x
                 * @param {number} y
                 * @param {number} z
                 */
                const z = -message.readInt16LE(4);
                const y = message.readInt16LE(6);
                const x = message.readInt16LE(8);
                this.notify("tilt", { x, y, z });
                break;
        }
    }
}
exports.TechnicMediumHubTiltSensor = TechnicMediumHubTiltSensor;
var Mode;
(function (Mode) {
    Mode[Mode["TILT"] = 0] = "TILT";
})(Mode = exports.Mode || (exports.Mode = {}));
exports.ModeMap = {
    "tilt": Mode.TILT
};
//# sourceMappingURL=technicmediumhubtiltsensor.js.map