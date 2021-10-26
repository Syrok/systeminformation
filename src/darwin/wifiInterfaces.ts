'use strict';

import { execCmd } from '../common/exec';
import { getValue } from '../common';
import { WifiInterfaceData } from '../common/types';

export const darwinWifiInterfaces = async () => {
  let result: WifiInterfaceData[] = [];
  const stdout = await execCmd('system_profiler SPNetworkDataType');
  const parts1 = stdout.toString().split('\n\n    Wi-Fi:\n\n');
  if (parts1.length > 1) {
    const lines = parts1[1].split('\n\n')[0].split('\n');
    const iface = getValue(lines, 'BSD Device Name', ':', true);
    const mac = getValue(lines, 'MAC Address', ':', true);
    const model = getValue(lines, 'hardware', ':', true);
    result.push({
      id: 'Wi-Fi',
      iface,
      model,
      vendor: '',
      mac
    });
  }
  return result;
};

export const wifiInterfaces = () => {
  return new Promise<WifiInterfaceData[] | null | undefined>(resolve => {
    process.nextTick(() => {
      return resolve(darwinWifiInterfaces());
    });
  });
};