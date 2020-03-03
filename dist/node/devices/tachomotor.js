"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const basicmotor_1 = require("./basicmotor");
const Consts = __importStar(require("../consts"));
const utils_1 = require("../utils");
/**
 * @class TachoMotor
 * @extends BasicMotor
 */
class TachoMotor extends basicmotor_1.BasicMotor {
    constructor(hub, portId, modeMap = {}, type = Consts.DeviceType.UNKNOWN) {
        super(hub, portId, Object.assign({}, modeMap, exports.ModeMap), type);
        this._brakeStyle = Consts.BrakingStyle.BRAKE;
    }
    receive(message) {
        const mode = this._mode;
        switch (mode) {
            case Mode.ROTATION:
                const degrees = message.readInt32LE(this.isWeDo2SmartHub ? 2 : 4);
                /**
                 * Emits when a rotation sensor is activated.
                 * @event TachoMotor#rotate
                 * @type {object}
                 * @param {number} rotation
                 */
                this.notify("rotate", { degrees });
                break;
        }
    }
    /**
     * Set the braking style of the motor.
     *
     * Note: This applies to setSpeed, rotateByDegrees, and gotoAngle.
     * @method TachoMotor#setBrakingStyle
     * @param {number} style Either BRAKE or HOLD
     */
    setBrakingStyle(style) {
        this._brakeStyle = style;
    }
    /**
     * Set the motor speed.
     * @method TachoMotor#setSpeed
     * @param {number} speed For forward, a value between 1 - 100 should be set. For reverse, a value between -1 to -100. Stop is 0.
     * @returns {Promise} Resolved upon successful issuance of the command.
     */
    setSpeed(speed, time) {
        if (!this.isVirtualPort && speed instanceof Array) {
            throw new Error("Only virtual ports can accept multiple speeds");
        }
        if (this.isWeDo2SmartHub) {
            throw new Error("Motor speed is not available on the WeDo 2.0 Smart Hub");
        }
        this.cancelEventTimer();
        return new Promise(async (resolve) => {
            this._busy = true;
            if (speed === undefined || speed === null) {
                speed = 100;
            }
            let message;
            if (time !== undefined) {
                if (speed instanceof Array) {
                    message = Buffer.from([0x81, this.portId, 0x11, 0x0a, 0x00, 0x00, utils_1.mapSpeed(speed[0]), utils_1.mapSpeed(speed[1]), 0x64, this._brakeStyle, 0x00]);
                }
                else {
                    message = Buffer.from([0x81, this.portId, 0x11, 0x09, 0x00, 0x00, utils_1.mapSpeed(speed), 0x64, this._brakeStyle, 0x00]);
                }
                message.writeUInt16LE(time, 4);
            }
            else {
                if (speed instanceof Array) {
                    message = Buffer.from([0x81, this.portId, 0x11, 0x08, utils_1.mapSpeed(speed[0]), utils_1.mapSpeed(speed[1]), 0x64, this._brakeStyle, 0x00]);
                }
                else {
                    message = Buffer.from([0x81, this.portId, 0x11, 0x07, utils_1.mapSpeed(speed), 0x64, 0x03, 0x64, this._brakeStyle, 0x00]);
                }
            }
            await this.send(message);
            this._finished = () => {
                return resolve();
            };
        });
    }
    /**
     * Rotate a motor by a given amount of degrees.
     * @method TachoMotor#rotateByDegrees
     * @param {number} degrees How much the motor should be rotated (in degrees).
     * @param {number} [speed=100] For forward, a value between 1 - 100 should be set. For reverse, a value between -1 to -100.
     * @returns {Promise} Resolved upon successful completion of command (ie. once the motor is finished).
     */
    rotateByDegrees(degrees, speed) {
        if (!this.isVirtualPort && speed instanceof Array) {
            throw new Error("Only virtual ports can accept multiple speeds");
        }
        if (this.isWeDo2SmartHub) {
            throw new Error("Rotation is not available on the WeDo 2.0 Smart Hub");
        }
        this.cancelEventTimer();
        return new Promise((resolve) => {
            this._busy = true;
            if (speed === undefined || speed === null) {
                speed = 100;
            }
            let message;
            if (speed instanceof Array) {
                message = Buffer.from([0x81, this.portId, 0x11, 0x0c, 0x00, 0x00, 0x00, 0x00, utils_1.mapSpeed(speed[0]), utils_1.mapSpeed(speed[1]), 0x64, this._brakeStyle, 0x03]);
            }
            else {
                message = Buffer.from([0x81, this.portId, 0x11, 0x0b, 0x00, 0x00, 0x00, 0x00, utils_1.mapSpeed(speed), 0x64, this._brakeStyle, 0x03]);
            }
            message.writeUInt32LE(degrees, 4);
            this.send(message);
            this._finished = () => {
                return resolve();
            };
        });
    }
}
exports.TachoMotor = TachoMotor;
var Mode;
(function (Mode) {
    Mode[Mode["ROTATION"] = 2] = "ROTATION";
})(Mode = exports.Mode || (exports.Mode = {}));
exports.ModeMap = {
    "rotate": Mode.ROTATION
};
//# sourceMappingURL=tachomotor.js.map