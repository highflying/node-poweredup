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
 * @class MoveHubTiltSensor
 * @extends Device
 */
class MoveHubTiltSensor extends device_1.Device {
    constructor(hub, portId) {
        super(hub, portId, exports.ModeMap, Consts.DeviceType.MOVE_HUB_TILT_SENSOR);
    }
    receive(message) {
        const mode = this._mode;
        switch (mode) {
            case Mode.TILT:
                /**
                 * Emits when a tilt sensor is activated.
                 * @event MoveHubTiltSensor#tilt
                 * @type {object}
                 * @param {number} x
                 * @param {number} y
                 */
                const x = -message.readInt8(4);
                const y = message.readInt8(5);
                this.notify("tilt", { x, y });
                break;
        }
    }
}
exports.MoveHubTiltSensor = MoveHubTiltSensor;
var Mode;
(function (Mode) {
    Mode[Mode["TILT"] = 0] = "TILT";
})(Mode = exports.Mode || (exports.Mode = {}));
exports.ModeMap = {
    "tilt": Mode.TILT
};
//# sourceMappingURL=movehubtiltsensor.js.map