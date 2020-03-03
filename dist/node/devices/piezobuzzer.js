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
 * @class PiezoBuzzer
 * @extends Device
 */
class PiezoBuzzer extends device_1.Device {
    constructor(hub, portId) {
        super(hub, portId, {}, Consts.DeviceType.PIEZO_BUZZER);
    }
    /**
     * Play a tone on the Hub's in-built buzzer
     * @method PiezoBuzzer#playTone
     * @param {number} frequency
     * @param {number} time How long the tone should play for (in milliseconds).
     * @returns {Promise} Resolved upon successful completion of command (ie. once the tone has finished playing).
     */
    playTone(frequency, time) {
        return new Promise(async (resolve) => {
            const data = Buffer.from([0x05, 0x02, 0x04, 0x00, 0x00, 0x00, 0x00]);
            data.writeUInt16LE(frequency, 3);
            data.writeUInt16LE(time, 5);
            await this.send(data, Consts.BLECharacteristic.WEDO2_MOTOR_VALUE_WRITE);
            global.setTimeout(resolve, time);
        });
    }
}
exports.PiezoBuzzer = PiezoBuzzer;
//# sourceMappingURL=piezobuzzer.js.map