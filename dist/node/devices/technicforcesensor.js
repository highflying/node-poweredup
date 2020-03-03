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
 * @class TechnicForceSensor
 * @extends Device
 */
class TechnicForceSensor extends device_1.Device {
    constructor(hub, portId) {
        super(hub, portId, exports.ModeMap, Consts.DeviceType.TECHNIC_FORCE_SENSOR);
    }
    receive(message) {
        const mode = this._mode;
        switch (mode) {
            case Mode.FORCE:
                const force = message[4] / 10;
                /**
                 * Emits when force is applied.
                 * @event TechnicForceSensor#force
                 * @type {object}
                 * @param {number} force Force, in newtons (0-10).
                 */
                this.notify("force", { force });
                break;
            case Mode.TOUCHED:
                const touched = message[4] ? true : false;
                /**
                 * Emits when the sensor is touched.
                 * @event TechnicForceSensor#touch
                 * @type {object}
                 * @param {boolean} touch Touched on/off (boolean).
                 */
                this.notify("touched", { touched });
                break;
            case Mode.TAPPED:
                const tapped = message[4];
                /**
                 * Emits when the sensor is tapped.
                 * @event TechnicForceSensor#tapped
                 * @type {object}
                 * @param {number} tapped How hard the sensor was tapped, from 0-3.
                 */
                this.notify("tapped", { tapped });
                break;
        }
    }
}
exports.TechnicForceSensor = TechnicForceSensor;
var Mode;
(function (Mode) {
    Mode[Mode["FORCE"] = 0] = "FORCE";
    Mode[Mode["TOUCHED"] = 1] = "TOUCHED";
    Mode[Mode["TAPPED"] = 2] = "TAPPED";
})(Mode = exports.Mode || (exports.Mode = {}));
exports.ModeMap = {
    "force": Mode.FORCE,
    "touched": Mode.TOUCHED,
    "tapped": Mode.TAPPED
};
//# sourceMappingURL=technicforcesensor.js.map