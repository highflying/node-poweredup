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
 * @class BasicMotor
 * @extends Device
 */
class BasicMotor extends device_1.Device {
    constructor(hub, portId, modeMap, type = Consts.DeviceType.UNKNOWN) {
        super(hub, portId, modeMap, type);
    }
    /**
     * Set the motor power.
     * @method BasicMotor#setPower
     * @param {number} power For forward, a value between 1 - 100 should be set. For reverse, a value between -1 to -100. Stop is 0.
     * @returns {Promise} Resolved upon successful issuance of the command.
     */
    setPower(power, interrupt = true) {
        if (interrupt) {
            this.cancelEventTimer();
        }
        // return new Promise((resolve) => {
        return this.writeDirect(0x00, Buffer.from([utils_1.mapSpeed(power)]));
        // return resolve();
        // });
    }
    /**
     * Ramp the motor power.
     * @method BasicMotor#rampPower
     * @param {number} fromPower For forward, a value between 1 - 100 should be set. For reverse, a value between -1 to -100. Stop is 0.
     * @param {number} toPower For forward, a value between 1 - 100 should be set. For reverse, a value between -1 to -100. Stop is 0.
     * @param {number} time How long the ramp should last (in milliseconds).
     * @returns {Promise} Resolved upon successful completion of command.
     */
    rampPower(fromPower, toPower, time) {
        this.cancelEventTimer();
        return new Promise((resolve) => {
            utils_1.calculateRamp(this, fromPower, toPower, time)
                .on("changePower", async (power) => {
                // console.log(`[${(this.hub as any).name}] power to ${power}`)
                await this.setPower(power, false);
                // console.log(`[${(this.hub as any).name}] power now ${power}`)
            })
                .on("finished", () => {
                // console.log(`[${(this.hub as any).name}] finished`)
                resolve();
            });
        });
    }
    /**
     * Stop the motor.
     * @method BasicMotor#stop
     * @returns {Promise} Resolved upon successful issuance of the command.
     */
    stop() {
        this.cancelEventTimer();
        return this.setPower(0);
    }
    /**
     * Brake the motor.
     * @method BasicMotor#brake
     * @returns {Promise} Resolved upon successful issuance of the command.
     */
    brake() {
        this.cancelEventTimer();
        return this.setPower(Consts.BrakingStyle.BRAKE);
    }
}
exports.BasicMotor = BasicMotor;
//# sourceMappingURL=basicmotor.js.map