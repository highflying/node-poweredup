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
 * @class TechnicMediumHubGyroSensor
 * @extends Device
 */
class TechnicMediumHubGyroSensor extends device_1.Device {
    constructor(hub, portId) {
        super(hub, portId, exports.ModeMap, Consts.DeviceType.TECHNIC_MEDIUM_HUB_GYRO_SENSOR);
    }
    receive(message) {
        const mode = this._mode;
        switch (mode) {
            case Mode.GYRO:
                /**
                 * Emits when gyroscope detects movement. Measured in DPS - degrees per second.
                 * @event TechnicMediumHubGyroSensor#gyro
                 * @type {object}
                 * @param {number} x
                 * @param {number} y
                 * @param {number} z
                 */
                const x = Math.round(message.readInt16LE(4) * 7 / 400);
                const y = Math.round(message.readInt16LE(6) * 7 / 400);
                const z = Math.round(message.readInt16LE(8) * 7 / 400);
                this.notify("gyro", { x, y, z });
                break;
        }
    }
}
exports.TechnicMediumHubGyroSensor = TechnicMediumHubGyroSensor;
var Mode;
(function (Mode) {
    Mode[Mode["GYRO"] = 0] = "GYRO";
})(Mode = exports.Mode || (exports.Mode = {}));
exports.ModeMap = {
    "gyro": Mode.GYRO
};
//# sourceMappingURL=technicmediumhubgyrosensor.js.map