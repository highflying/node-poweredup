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
 * @class HubLED
 * @extends Device
 */
class HubLED extends device_1.Device {
    constructor(hub, portId) {
        super(hub, portId, {}, Consts.DeviceType.HUB_LED);
    }
    /**
     * Set the color of the LED on the Hub via a color value.
     * @method HubLED#setColor
     * @param {Color} color
     * @returns {Promise} Resolved upon successful issuance of the command.
     */
    async setColor(color) {
        // return new Promise((resolve, reject) => {
        if (typeof color === "boolean") {
            color = 0;
        }
        if (this.isWeDo2SmartHub) {
            await this.send(Buffer.from([0x06, 0x17, 0x01, 0x01]), Consts.BLECharacteristic.WEDO2_PORT_TYPE_WRITE);
            await this.send(Buffer.from([0x06, 0x04, 0x01, color]), Consts.BLECharacteristic.WEDO2_MOTOR_VALUE_WRITE);
        }
        else {
            this.subscribe(Mode.COLOR);
            await this.writeDirect(0x00, Buffer.from([color]));
        }
        // return resolve();
        // });
    }
    /**
     * Set the color of the LED on the Hub via RGB values.
     * @method HubLED#setRGB
     * @param {number} red
     * @param {number} green
     * @param {number} blue
     * @returns {Promise} Resolved upon successful issuance of the command.
     */
    async setRGB(red, green, blue) {
        if (this.isWeDo2SmartHub) {
            await this.send(Buffer.from([0x06, 0x17, 0x01, 0x02]), Consts.BLECharacteristic.WEDO2_PORT_TYPE_WRITE);
            await this.send(Buffer.from([0x06, 0x04, 0x03, red, green, blue]), Consts.BLECharacteristic.WEDO2_MOTOR_VALUE_WRITE);
        }
        else {
            this.subscribe(Mode.RGB);
            await this.writeDirect(0x01, Buffer.from([red, green, blue]));
        }
    }
}
exports.HubLED = HubLED;
var Mode;
(function (Mode) {
    Mode[Mode["COLOR"] = 0] = "COLOR";
    Mode[Mode["RGB"] = 1] = "RGB";
})(Mode = exports.Mode || (exports.Mode = {}));
//# sourceMappingURL=hubled.js.map