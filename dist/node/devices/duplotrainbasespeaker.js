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
 * @class DuploTrainBaseSpeaker
 * @extends Device
 */
class DuploTrainBaseSpeaker extends device_1.Device {
    constructor(hub, portId) {
        super(hub, portId, {}, Consts.DeviceType.DUPLO_TRAIN_BASE_SPEAKER);
    }
    /**
     * Play a built-in train sound.
     * @method DuploTrainBaseSpeaker#playSound
     * @param {DuploTrainBaseSound} sound
     * @returns {Promise} Resolved upon successful issuance of the command.
     */
    playSound(sound) {
        return new Promise((resolve, reject) => {
            this.subscribe(Mode.SOUND);
            this.writeDirect(0x01, Buffer.from([sound]));
            return resolve();
        });
    }
    /**
     * Play a built-in system tone.
     * @method DuploTrainBaseSpeaker#playTone
     * @param {number} tone
     * @returns {Promise} Resolved upon successful issuance of the command.
     */
    playTone(tone) {
        this.subscribe(Mode.TONE);
        this.writeDirect(0x02, Buffer.from([tone]));
    }
}
exports.DuploTrainBaseSpeaker = DuploTrainBaseSpeaker;
var Mode;
(function (Mode) {
    Mode[Mode["SOUND"] = 1] = "SOUND";
    Mode[Mode["TONE"] = 2] = "TONE";
})(Mode = exports.Mode || (exports.Mode = {}));
//# sourceMappingURL=duplotrainbasespeaker.js.map