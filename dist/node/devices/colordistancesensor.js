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
 * @class ColorDistanceSensor
 * @extends Device
 */
class ColorDistanceSensor extends device_1.Device {
    constructor(hub, portId) {
        super(hub, portId, exports.ModeMap, Consts.DeviceType.COLOR_DISTANCE_SENSOR);
    }
    receive(message) {
        const mode = this._mode;
        switch (mode) {
            case Mode.COLOR:
                if (message[this.isWeDo2SmartHub ? 2 : 4] <= 10) {
                    const color = message[this.isWeDo2SmartHub ? 2 : 4];
                    /**
                     * Emits when a color sensor is activated.
                     * @event ColorDistanceSensor#color
                     * @type {object}
                     * @param {Color} color
                     */
                    this.notify("color", { color });
                }
                break;
            case Mode.DISTANCE:
                if (this.isWeDo2SmartHub) {
                    break;
                }
                if (message[4] <= 10) {
                    const distance = Math.floor(message[4] * 25.4) - 20;
                    /**
                     * Emits when a distance sensor is activated.
                     * @event ColorDistanceSensor#distance
                     * @type {object}
                     * @param {number} distance Distance, in millimeters.
                     */
                    this.notify("distance", { distance });
                }
                break;
            case Mode.COLOR_AND_DISTANCE:
                if (this.isWeDo2SmartHub) {
                    break;
                }
                let distance = message[5];
                const partial = message[7];
                if (partial > 0) {
                    distance += 1.0 / partial;
                }
                distance = Math.floor(distance * 25.4) - 20;
                /**
                 * A combined color and distance event, emits when the sensor is activated.
                 * @event ColorDistanceSensor#colorAndDistance
                 * @type {object}
                 * @param {Color} color
                 * @param {number} distance Distance, in millimeters.
                 */
                if (message[4] <= 10) {
                    const color = message[4];
                    this.notify("colorAndDistance", { color, distance });
                }
                break;
        }
    }
}
exports.ColorDistanceSensor = ColorDistanceSensor;
var Mode;
(function (Mode) {
    Mode[Mode["COLOR"] = 0] = "COLOR";
    Mode[Mode["DISTANCE"] = 1] = "DISTANCE";
    Mode[Mode["COLOR_AND_DISTANCE"] = 8] = "COLOR_AND_DISTANCE";
})(Mode = exports.Mode || (exports.Mode = {}));
exports.ModeMap = {
    "color": Mode.COLOR,
    "distance": Mode.DISTANCE,
    "colorAndDistance": Mode.COLOR_AND_DISTANCE
};
//# sourceMappingURL=colordistancesensor.js.map