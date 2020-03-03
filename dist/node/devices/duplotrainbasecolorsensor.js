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
 * @class DuploTrainBaseColorSensor
 * @extends Device
 */
class DuploTrainBaseColorSensor extends device_1.Device {
    constructor(hub, portId) {
        super(hub, portId, exports.ModeMap, Consts.DeviceType.DUPLO_TRAIN_BASE_COLOR_SENSOR);
    }
    receive(message) {
        const mode = this._mode;
        switch (mode) {
            case Mode.COLOR:
                if (message[4] <= 10) {
                    const color = message[4];
                    /**
                     * Emits when a color sensor is activated.
                     * @event DuploTrainBaseColorSensor#color
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
                 * @event DuploTrainBaseColorSensor#reflect
                 * @type {object}
                 * @param {number} reflect Percentage, from 0 to 100.
                 */
                this.notify("reflect", { reflect });
                break;
            case Mode.RGB:
                const red = Math.floor(message.readUInt16LE(4) / 4);
                const green = Math.floor(message.readUInt16LE(6) / 4);
                const blue = Math.floor(message.readUInt16LE(8) / 4);
                /**
                 * Emits when the light reflectivity changes.
                 * @event DuploTrainBaseColorSensor#rgb
                 * @type {object}
                 * @param {number} red
                 * @param {number} green
                 * @param {number} blue
                 */
                this.notify("rgb", { red, green, blue });
                break;
        }
    }
}
exports.DuploTrainBaseColorSensor = DuploTrainBaseColorSensor;
var Mode;
(function (Mode) {
    Mode[Mode["COLOR"] = 0] = "COLOR";
    Mode[Mode["REFLECTIVITY"] = 2] = "REFLECTIVITY";
    Mode[Mode["RGB"] = 3] = "RGB";
})(Mode = exports.Mode || (exports.Mode = {}));
exports.ModeMap = {
    "color": Mode.COLOR,
    "reflect": Mode.REFLECTIVITY,
    "rgb": Mode.RGB
};
//# sourceMappingURL=duplotrainbasecolorsensor.js.map