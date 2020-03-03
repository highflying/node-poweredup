"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const absolutemotor_1 = require("./absolutemotor");
const Consts = __importStar(require("../consts"));
/**
 * @class TechnicXLargeLinearMotor
 * @extends AbsoluteMotor
 */
class TechnicXLargeLinearMotor extends absolutemotor_1.AbsoluteMotor {
    constructor(hub, portId) {
        super(hub, portId, {}, Consts.DeviceType.TECHNIC_XLARGE_LINEAR_MOTOR);
    }
}
exports.TechnicXLargeLinearMotor = TechnicXLargeLinearMotor;
//# sourceMappingURL=technicxlargelinearmotor.js.map