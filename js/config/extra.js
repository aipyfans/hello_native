/**
 * Created by william on 17-2-20.
 *
 * 建议:全局统一获取一次额外参数.
 */

import DeviceInfo from 'react-native-device-info';

export function extra() {
    let device = {};
    device.device_id = DeviceInfo.getUniqueID(); // DeviceInfo.getDeviceId();
    device.version_code = DeviceInfo.getBuildNumber();  // e.g. 89 版本号
    device.version_name = DeviceInfo.getVersion();  // e.g. 1.1.0 版本名称
    device.device_type = DeviceInfo.getSystemName();  // e.g. iPhone OS || Android 系统名称
    device.lang = DeviceInfo.getDeviceCountry(); // e.g CN 国家代号
    device.time_zone = DeviceInfo.getTimezone();// 时区
    return device;
}

