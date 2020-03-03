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
/**
 * @class SimpleMediumLinearMotor
 * @extends Device
 */
class SimpleMediumLinearMotor extends basicmotor_1.BasicMotor {
    constructor(hub, portId) {
        super(hub, portId, {}, Consts.DeviceType.SIMPLE_MEDIUM_LINEAR_MOTOR);
    }
}
exports.SimpleMediumLinearMotor = SimpleMediumLinearMotor;
//# sourceMappingURL=simplemediumlinearmotor.js.map