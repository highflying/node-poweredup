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
 * @class TechnicColorSensor
 * @extends Device
 */
class TechnicColorSensor extends device_1.Device {
    constructor(hub, portId) {
        super(hub, portId, exports.ModeMap, Consts.DeviceType.TECHNIC_COLOR_SENSOR);
    }
    receive(message) {
        const mode = this._mode;
        switch (mode) {
            case Mode.COLOR:
                if (message[4] <= 10) {
                    const color = message[4];
                    /**
                     * Emits when a color sensor is activated.
                     * @event TechnicColorSensor#color
                     * @type {object}
                     * @param {Color} color
                     */
                    this.notify("color", { color });
                }
                break;
            case Mode.REFLECTIVITY:
                const reflect = message[4];
                /**
                 * Emits when the light reflectivity changes.
                 * @event TechnicColorSensor#reflect
                 * @type {object}
                 * @param {number} reflect Percentage, from 0 to 100.
                 */
                this.notify("reflect", { reflect });
                break;
            case Mode.AMBIENT_LIGHT:
                const ambient = message[4];
                /**
                 * Emits when the ambient light changes.
                 * @event TechnicColorSensor#ambient
                 * @type {object}
                 * @param {number} ambient Percentage, from 0 to 100.
                 */
                this.notify("ambient", { ambient });
                break;
        }
    }
}
exports.TechnicColorSensor = TechnicColorSensor;
var Mode;
(function (Mode) {
    Mode[Mode["COLOR"] = 0] = "COLOR";
    Mode[Mode["REFLECTIVITY"] = 1] = "REFLECTIVITY";
    Mode[Mode["AMBIENT_LIGHT"] = 2] = "AMBIENT_LIGHT";
})(Mode = exports.Mode || (exports.Mode = {}));
exports.ModeMap = {
    "color": Mode.COLOR,
    "reflect": Mode.REFLECTIVITY,
    "ambient": Mode.AMBIENT_LIGHT
};
//# sourceMappingURL=techniccolorsensor.js.map