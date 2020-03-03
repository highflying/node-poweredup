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
 * @class MotionSensor
 * @extends Device
 */
class MotionSensor extends device_1.Device {
    constructor(hub, portId) {
        super(hub, portId, exports.ModeMap, Consts.DeviceType.MOTION_SENSOR);
    }
    receive(message) {
        const mode = this._mode;
        switch (mode) {
            case Mode.DISTANCE:
                let distance = message[this.isWeDo2SmartHub ? 2 : 4];
                if (message[this.isWeDo2SmartHub ? 3 : 5] === 1) {
                    distance = distance + 255;
                }
                distance *= 10;
                /**
                 * Emits when a distance sensor is activated.
                 * @event MotionSensor#distance
                 * @type {object}
                 * @param {number} distance Distance, in millimeters.
                 */
                this.notify("distance", { distance });
                break;
        }
    }
}
exports.MotionSensor = MotionSensor;
var Mode;
(function (Mode) {
    Mode[Mode["DISTANCE"] = 0] = "DISTANCE";
})(Mode = exports.Mode || (exports.Mode = {}));
exports.ModeMap = {
    "distance": Mode.DISTANCE
};
//# sourceMappingURL=motionsensor.js.map