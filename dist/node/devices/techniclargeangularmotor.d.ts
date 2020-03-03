import { AbsoluteMotor } from "./absolutemotor";
import { IDeviceInterface } from "../interfaces";
/**
 * @class TechnicLargeAngularMotor
 * @extends AbsoluteMotor
 */
export declare class TechnicLargeAngularMotor extends AbsoluteMotor {
    constructor(hub: IDeviceInterface, portId: number);
}
