"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Consts = __importStar(require("./consts"));
class Port {
    constructor(id, value) {
        this.connected = false;
        this.busy = false;
        this.finished = null;
        this._eventTimer = null;
        this.id = id;
        this.value = value;
        this.type = Consts.DeviceType.UNKNOWN;
    }
    cancelEventTimer() {
        if (this._eventTimer) {
            clearTimeout(this._eventTimer);
            this._eventTimer = null;
        }
    }
    setEventTimer(timer) {
        this._eventTimer = timer;
    }
}
exports.Port = Port;
//# sourceMappingURL=port.js.map