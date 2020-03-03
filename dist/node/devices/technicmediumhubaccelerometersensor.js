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
 * @class TechnicMediumHubAccelerometerSensor
 * @extends Device
 */
class TechnicMediumHubAccelerometerSensor extends device_1.Device {
    constructor(hub, portId) {
        super(hub, portId, exports.ModeMap, Consts.DeviceType.TECHNIC_MEDIUM_HUB_ACCELEROMETER);
    }
    receive(message) {
        const mode = this._mode;
        switch (mode) {
            case Mode.ACCEL:
                /**
                 * Emits when accelerometer detects movement. Measured in mG.
                 * @event TechnicMediumHubAccelerometerSensor#accel
                 * @type {object}
                 * @param {number} x
                 * @param {number} y
                 * @param {number} z
                 */
                const x = Math.round(message.readInt16LE(4) / 4.096);
                const y = Math.round(message.readInt16LE(6) / 4.096);
                const z = Math.round(message.readInt16LE(8) / 4.096);
                this.notify("accel", { x, y, z });
                break;
        }
    }
}
exports.TechnicMediumHubAccelerometerSensor = TechnicMediumHubAccelerometerSensor;
var Mode;
(function (Mode) {
    Mode[Mode["ACCEL"] = 0] = "ACCEL";
})(Mode = exports.Mode || (exports.Mode = {}));
exports.ModeMap = {
    "accel": Mode.ACCEL
};
//# sourceMappingURL=technicmediumhubaccelerometersensor.js.map