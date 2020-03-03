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
const utils_1 = require("../utils");
/**
 * @class Light
 * @extends Device
 */
class Light extends device_1.Device {
    constructor(hub, portId) {
        super(hub, portId, {}, Consts.DeviceType.LIGHT);
    }
    /**
     * Set the light brightness.
     * @method Light#setBrightness
     * @param {number} brightness Brightness value between 0-100 (0 is off)
     * @returns {Promise} Resolved upon successful completion of command.
     */
    setBrightness(brightness, interrupt = true) {
        if (interrupt) {
            this.cancelEventTimer();
        }
        // return new Promise((resolve) => {
        return this.writeDirect(0x00, Buffer.from([brightness]));
        // return resolve();
        // });
    }
    /**
     * Ramp the light brightness.
     * @method Light#rampBrightness
     * @param {number} fromBrightness Brightness value between 0-100 (0 is off)
     * @param {number} toBrightness Brightness value between 0-100 (0 is off)
     * @param {number} time How long the ramp should last (in milliseconds).
     * @returns {Promise} Resolved upon successful completion of command.
     */
    rampBrightness(fromBrightness, toBrightness, time) {
        this.cancelEventTimer();
        return new Promise((resolve) => {
            utils_1.calculateRamp(this, fromBrightness, toBrightness, time)
                .on("changePower", (power) => {
                this.setBrightness(power, false);
            })
                .on("finished", resolve);
        });
    }
}
exports.Light = Light;
//# sourceMappingURL=light.js.map