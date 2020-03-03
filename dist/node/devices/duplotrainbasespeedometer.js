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
 * @class DuploTraniBaseSpeedometer
 * @extends Device
 */
class DuploTrainBaseSpeedometer extends device_1.Device {
    constructor(hub, portId) {
        super(hub, portId, exports.ModeMap, Consts.DeviceType.DUPLO_TRAIN_BASE_SPEEDOMETER);
    }
    receive(message) {
        const mode = this._mode;
        switch (mode) {
            case Mode.SPEED:
                const speed = message.readInt16LE(4);
                /**
                 * Emits on a speed change.
                 * @event DuploTrainBaseSpeedometer#speed
                 * @type {object}
                 * @param {number} speed
                 */
                this.notify("speed", { speed });
                break;
        }
    }
}
exports.DuploTrainBaseSpeedometer = DuploTrainBaseSpeedometer;
var Mode;
(function (Mode) {
    Mode[Mode["SPEED"] = 0] = "SPEED";
})(Mode = exports.Mode || (exports.Mode = {}));
exports.ModeMap = {
    "speed": Mode.SPEED
};
//# sourceMappingURL=duplotrainbasespeedometer.js.map