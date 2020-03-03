"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tachomotor_1 = require("./tachomotor");
const Consts = __importStar(require("../consts"));
/**
 * @class MediumLinearMotor
 * @extends TachoMotor
 */
class MediumLinearMotor extends tachomotor_1.TachoMotor {
    constructor(hub, portId) {
        super(hub, portId, {}, Consts.DeviceType.MEDIUM_LINEAR_MOTOR);
    }
}
exports.MediumLinearMotor = MediumLinearMotor;
//# sourceMappingURL=mediumlinearmotor.js.map