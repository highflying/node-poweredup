"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
// @ts-ignore
exports.isWebBluetooth = (typeof navigator !== "undefined" && navigator && navigator.bluetooth);
exports.toHex = (value, length = 2) => {
    return value.toString(16).padStart(length, "0");
};
exports.toBin = (value, length = 8) => {
    return value.toString(2).padStart(length, "0");
};
exports.mapSpeed = (speed) => {
    if (speed === 127) {
        return 127;
    }
    if (speed > 100) {
        speed = 100;
    }
    else if (speed < -100) {
        speed = -100;
    }
    return speed;
};
exports.decodeVersion = (version) => {
    const parts = version.toString(16).padStart(8, "0");
    return [parts[0], parts[1], parts.substring(2, 4), parts.substring(4)].join(".");
};
exports.decodeMACAddress = (address) => {
    return Array.from(address).map((part) => exports.toHex(part, 2)).join(":");
};
exports.normalizeAngle = (angle) => {
    if (angle >= 180) {
        return angle - (360 * ((angle + 180) / 360));
    }
    else if (angle < -180) {
        return angle + (360 * ((180 - angle) / 360));
    }
    return angle;
};
exports.roundAngleToNearest90 = (angle) => {
    angle = exports.normalizeAngle(angle);
    if (angle < -135) {
        return -180;
    }
    if (angle < -45) {
        return -90;
    }
    if (angle < 45) {
        return 0;
    }
    if (angle < 135) {
        return 90;
    }
    return -180;
};
exports.calculateRamp = (device, fromPower, toPower, time) => {
    const emitter = new events_1.EventEmitter();
    const steps = Math.abs(toPower - fromPower);
    let delay = time / steps;
    let increment = 1;
    if (delay < 50 && steps > 0) {
        increment = 50 / delay;
        delay = 50;
    }
    if (fromPower > toPower) {
        increment = -increment;
    }
    let i = 0;
    const interval = setInterval(() => {
        let power = Math.round(fromPower + (++i * increment));
        if (toPower > fromPower && power > toPower) {
            power = toPower;
        }
        else if (fromPower > toPower && power < toPower) {
            power = toPower;
        }
        emitter.emit("changePower", power);
        if (power === toPower) {
            clearInterval(interval);
            emitter.emit("finished");
        }
    }, delay);
    device.setEventTimer(interval);
    return emitter;
};
//# sourceMappingURL=utils.js.map