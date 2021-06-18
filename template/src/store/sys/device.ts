import { defineStore } from 'pinia';
import device from 'current-device';

export interface DeviceState {
  type: string;
  orientation: string;
  os: string;
}

export const useDeviceStore = defineStore({
  id: 'device',
  state: (): DeviceState => ({
    type: device.type,
    orientation: device.orientation,
    os: device.os,
  }),
});
