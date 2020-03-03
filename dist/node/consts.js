"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @typedef HubType
 * @property {number} UNKNOWN 0
 * @property {number} WEDO2_SMART_HUB 1
 * @property {number} MOVE_HUB 2
 * @property {number} POWERED_UP_HUB 3
 * @property {number} POWERED_UP_REMOTE 4
 * @property {number} DUPLO_TRAIN_HUB 5
 * @property {number} CONTROL_PLUS_HUB 6
 */
var HubType;
(function (HubType) {
    HubType[HubType["UNKNOWN"] = 0] = "UNKNOWN";
    HubType[HubType["WEDO2_SMART_HUB"] = 1] = "WEDO2_SMART_HUB";
    HubType[HubType["MOVE_HUB"] = 2] = "MOVE_HUB";
    HubType[HubType["HUB"] = 3] = "HUB";
    HubType[HubType["REMOTE_CONTROL"] = 4] = "REMOTE_CONTROL";
    HubType[HubType["DUPLO_TRAIN_BASE"] = 5] = "DUPLO_TRAIN_BASE";
    HubType[HubType["TECHNIC_MEDIUM_HUB"] = 6] = "TECHNIC_MEDIUM_HUB";
})(HubType = exports.HubType || (exports.HubType = {}));
// tslint:disable-next-line
exports.HubTypeNames = HubType;
/**
 * @typedef DeviceType
 * @property {number} UNKNOWN 0
 * @property {number} SIMPLE_MEDIUM_LINEAR_MOTOR 1
 * @property {number} TRAIN_MOTOR 2
 * @property {number} LED_LIGHTS 8
 * @property {number} VOLTAGE 20
 * @property {number} CURRENT 21
 * @property {number} PIEZO_TONE 22
 * @property {number} RGB_LIGHT 23
 * @property {number} WEDO2_TILT 34
 * @property {number} WEDO2_DISTANCE 35
 * @property {number} COLOR_DISTANCE_SENSOR 37
 * @property {number} MEDIUM_LINEAR_MOTOR 38
 * @property {number} MOVE_HUB_MEDIUM_LINEAR_MOTOR 39
 * @property {number} BOOST_TILT 40
 * @property {number} DUPLO_TRAIN_BASE_MOTOR 41
 * @property {number} DUPLO_TRAIN_BASE_SPEAKER 42
 * @property {number} DUPLO_TRAIN_BASE_COLOR 43
 * @property {number} DUPLO_TRAIN_BASE_SPEEDOMETER 44
 * @property {number} CONTROL_PLUS_LARGE_MOTOR 46
 * @property {number} CONTROL_PLUS_XLARGE_MOTOR 47
 * @property {number} POWERED_UP_REMOTE_BUTTON 55
 * @property {number} RSSI 56
 * @property {number} CONTROL_PLUS_ACCELEROMETER 58
 * @property {number} CONTROL_PLUS_TILT 59
 */
var DeviceType;
(function (DeviceType) {
    DeviceType[DeviceType["UNKNOWN"] = 0] = "UNKNOWN";
    DeviceType[DeviceType["SIMPLE_MEDIUM_LINEAR_MOTOR"] = 1] = "SIMPLE_MEDIUM_LINEAR_MOTOR";
    DeviceType[DeviceType["TRAIN_MOTOR"] = 2] = "TRAIN_MOTOR";
    DeviceType[DeviceType["LIGHT"] = 8] = "LIGHT";
    DeviceType[DeviceType["VOLTAGE_SENSOR"] = 20] = "VOLTAGE_SENSOR";
    DeviceType[DeviceType["CURRENT_SENSOR"] = 21] = "CURRENT_SENSOR";
    DeviceType[DeviceType["PIEZO_BUZZER"] = 22] = "PIEZO_BUZZER";
    DeviceType[DeviceType["HUB_LED"] = 23] = "HUB_LED";
    DeviceType[DeviceType["TILT_SENSOR"] = 34] = "TILT_SENSOR";
    DeviceType[DeviceType["MOTION_SENSOR"] = 35] = "MOTION_SENSOR";
    DeviceType[DeviceType["COLOR_DISTANCE_SENSOR"] = 37] = "COLOR_DISTANCE_SENSOR";
    DeviceType[DeviceType["MEDIUM_LINEAR_MOTOR"] = 38] = "MEDIUM_LINEAR_MOTOR";
    DeviceType[DeviceType["MOVE_HUB_MEDIUM_LINEAR_MOTOR"] = 39] = "MOVE_HUB_MEDIUM_LINEAR_MOTOR";
    DeviceType[DeviceType["MOVE_HUB_TILT_SENSOR"] = 40] = "MOVE_HUB_TILT_SENSOR";
    DeviceType[DeviceType["DUPLO_TRAIN_BASE_MOTOR"] = 41] = "DUPLO_TRAIN_BASE_MOTOR";
    DeviceType[DeviceType["DUPLO_TRAIN_BASE_SPEAKER"] = 42] = "DUPLO_TRAIN_BASE_SPEAKER";
    DeviceType[DeviceType["DUPLO_TRAIN_BASE_COLOR_SENSOR"] = 43] = "DUPLO_TRAIN_BASE_COLOR_SENSOR";
    DeviceType[DeviceType["DUPLO_TRAIN_BASE_SPEEDOMETER"] = 44] = "DUPLO_TRAIN_BASE_SPEEDOMETER";
    DeviceType[DeviceType["TECHNIC_LARGE_LINEAR_MOTOR"] = 46] = "TECHNIC_LARGE_LINEAR_MOTOR";
    DeviceType[DeviceType["TECHNIC_XLARGE_LINEAR_MOTOR"] = 47] = "TECHNIC_XLARGE_LINEAR_MOTOR";
    DeviceType[DeviceType["TECHNIC_MEDIUM_ANGULAR_MOTOR"] = 48] = "TECHNIC_MEDIUM_ANGULAR_MOTOR";
    DeviceType[DeviceType["TECHNIC_LARGE_ANGULAR_MOTOR"] = 49] = "TECHNIC_LARGE_ANGULAR_MOTOR";
    DeviceType[DeviceType["TECHNIC_MEDIUM_HUB_GEST_SENSOR"] = 54] = "TECHNIC_MEDIUM_HUB_GEST_SENSOR";
    DeviceType[DeviceType["REMOTE_CONTROL_BUTTON"] = 55] = "REMOTE_CONTROL_BUTTON";
    DeviceType[DeviceType["REMOTE_CONTROL_RSSI"] = 56] = "REMOTE_CONTROL_RSSI";
    DeviceType[DeviceType["TECHNIC_MEDIUM_HUB_ACCELEROMETER"] = 57] = "TECHNIC_MEDIUM_HUB_ACCELEROMETER";
    DeviceType[DeviceType["TECHNIC_MEDIUM_HUB_GYRO_SENSOR"] = 58] = "TECHNIC_MEDIUM_HUB_GYRO_SENSOR";
    DeviceType[DeviceType["TECHNIC_MEDIUM_HUB_TILT_SENSOR"] = 59] = "TECHNIC_MEDIUM_HUB_TILT_SENSOR";
    DeviceType[DeviceType["TECHNIC_MEDIUM_HUB_TEMPERATURE_SENSOR"] = 60] = "TECHNIC_MEDIUM_HUB_TEMPERATURE_SENSOR";
    DeviceType[DeviceType["TECHNIC_COLOR_SENSOR"] = 61] = "TECHNIC_COLOR_SENSOR";
    DeviceType[DeviceType["TECHNIC_DISTANCE_SENSOR"] = 62] = "TECHNIC_DISTANCE_SENSOR";
    DeviceType[DeviceType["TECHNIC_FORCE_SENSOR"] = 63] = "TECHNIC_FORCE_SENSOR"; // Spike Prime
})(DeviceType = exports.DeviceType || (exports.DeviceType = {}));
// tslint:disable-next-line
exports.DeviceTypeNames = DeviceType;
/**
 * @typedef Color
 * @property {number} BLACK 0
 * @property {number} PINK 1
 * @property {number} PURPLE 2
 * @property {number} BLUE 3
 * @property {number} LIGHT_BLUE 4
 * @property {number} CYAN 5
 * @property {number} GREEN 6
 * @property {number} YELLOW 7
 * @property {number} ORANGE 8
 * @property {number} RED 9
 * @property {number} WHITE 10
 * @property {number} NONE 255
 */
var Color;
(function (Color) {
    Color[Color["BLACK"] = 0] = "BLACK";
    Color[Color["PINK"] = 1] = "PINK";
    Color[Color["PURPLE"] = 2] = "PURPLE";
    Color[Color["BLUE"] = 3] = "BLUE";
    Color[Color["LIGHT_BLUE"] = 4] = "LIGHT_BLUE";
    Color[Color["CYAN"] = 5] = "CYAN";
    Color[Color["GREEN"] = 6] = "GREEN";
    Color[Color["YELLOW"] = 7] = "YELLOW";
    Color[Color["ORANGE"] = 8] = "ORANGE";
    Color[Color["RED"] = 9] = "RED";
    Color[Color["WHITE"] = 10] = "WHITE";
    Color[Color["NONE"] = 255] = "NONE";
})(Color = exports.Color || (exports.Color = {}));
// tslint:disable-next-line
exports.ColorNames = Color;
/**
 * @typedef ButtonState
 * @property {number} PRESSED 0
 * @property {number} RELEASED 1
 * @property {number} UP 2
 * @property {number} DOWN 3
 * @property {number} STOP 4
 */
var ButtonState;
(function (ButtonState) {
    ButtonState[ButtonState["PRESSED"] = 2] = "PRESSED";
    ButtonState[ButtonState["RELEASED"] = 0] = "RELEASED";
    ButtonState[ButtonState["UP"] = 1] = "UP";
    ButtonState[ButtonState["DOWN"] = 255] = "DOWN";
    ButtonState[ButtonState["STOP"] = 127] = "STOP";
})(ButtonState = exports.ButtonState || (exports.ButtonState = {}));
/**
 * @typedef BrakingStyle
 * @property {number} HOLD 127
 * @property {number} BRAKE 128
 */
var BrakingStyle;
(function (BrakingStyle) {
    BrakingStyle[BrakingStyle["FLOAT"] = 0] = "FLOAT";
    BrakingStyle[BrakingStyle["HOLD"] = 126] = "HOLD";
    BrakingStyle[BrakingStyle["BRAKE"] = 127] = "BRAKE";
})(BrakingStyle = exports.BrakingStyle || (exports.BrakingStyle = {}));
/**
 * @typedef DuploTrainBaseSound
 * @property {number} BRAKE 3
 * @property {number} STATION_DEPARTURE 5
 * @property {number} WATER_REFILL 7
 * @property {number} HORN 9
 * @property {number} STEAM 10
 */
var DuploTrainBaseSound;
(function (DuploTrainBaseSound) {
    DuploTrainBaseSound[DuploTrainBaseSound["BRAKE"] = 3] = "BRAKE";
    DuploTrainBaseSound[DuploTrainBaseSound["STATION_DEPARTURE"] = 5] = "STATION_DEPARTURE";
    DuploTrainBaseSound[DuploTrainBaseSound["WATER_REFILL"] = 7] = "WATER_REFILL";
    DuploTrainBaseSound[DuploTrainBaseSound["HORN"] = 9] = "HORN";
    DuploTrainBaseSound[DuploTrainBaseSound["STEAM"] = 10] = "STEAM";
})(DuploTrainBaseSound = exports.DuploTrainBaseSound || (exports.DuploTrainBaseSound = {}));
var BLEManufacturerData;
(function (BLEManufacturerData) {
    BLEManufacturerData[BLEManufacturerData["DUPLO_TRAIN_BASE_ID"] = 32] = "DUPLO_TRAIN_BASE_ID";
    BLEManufacturerData[BLEManufacturerData["MOVE_HUB_ID"] = 64] = "MOVE_HUB_ID";
    BLEManufacturerData[BLEManufacturerData["HUB_ID"] = 65] = "HUB_ID";
    BLEManufacturerData[BLEManufacturerData["REMOTE_CONTROL_ID"] = 66] = "REMOTE_CONTROL_ID";
    BLEManufacturerData[BLEManufacturerData["TECHNIC_MEDIUM_HUB"] = 128] = "TECHNIC_MEDIUM_HUB";
})(BLEManufacturerData = exports.BLEManufacturerData || (exports.BLEManufacturerData = {}));
var BLEService;
(function (BLEService) {
    BLEService["WEDO2_SMART_HUB"] = "00001523-1212-efde-1523-785feabcd123";
    BLEService["WEDO2_SMART_HUB_2"] = "00004f0e-1212-efde-1523-785feabcd123";
    BLEService["WEDO2_SMART_HUB_3"] = "2a19";
    BLEService["WEDO2_SMART_HUB_4"] = "180f";
    BLEService["WEDO2_SMART_HUB_5"] = "180a";
    BLEService["LPF2_HUB"] = "00001623-1212-efde-1623-785feabcd123";
})(BLEService = exports.BLEService || (exports.BLEService = {}));
var BLECharacteristic;
(function (BLECharacteristic) {
    BLECharacteristic["WEDO2_BATTERY"] = "2a19";
    BLECharacteristic["WEDO2_FIRMWARE_REVISION"] = "2a26";
    BLECharacteristic["WEDO2_BUTTON"] = "00001526-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_PORT_TYPE"] = "00001527-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_LOW_VOLTAGE_ALERT"] = "00001528-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_HIGH_CURRENT_ALERT"] = "00001529-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_LOW_SIGNAL_ALERT"] = "0000152a-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_DISCONNECT"] = "0000152b-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_SENSOR_VALUE"] = "00001560-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_VALUE_FORMAT"] = "00001561-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_PORT_TYPE_WRITE"] = "00001563-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_MOTOR_VALUE_WRITE"] = "00001565-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_NAME_ID"] = "00001524-1212-efde-1523-785feabcd123";
    BLECharacteristic["LPF2_ALL"] = "00001624-1212-efde-1623-785feabcd123";
})(BLECharacteristic = exports.BLECharacteristic || (exports.BLECharacteristic = {}));
//# sourceMappingURL=consts.js.map