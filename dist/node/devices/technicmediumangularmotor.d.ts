import { AbsoluteMotor } from "./absolutemotor";
import { IDeviceInterface } from "../interfaces";
/**
 * @class TechnicMediumAngularMotor
 * @extends AbsoluteMotor
 */
export declare class TechnicMediumAngularMotor extends AbsoluteMotor {
    constructor(hub: IDeviceInterface, portId: number);
}
