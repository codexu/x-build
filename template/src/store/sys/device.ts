import { defineStore } from 'pinia';
import device, { DeviceType, DeviceOrientation, DeviceOs } from 'current-device';

export interface DeviceState {
  type: DeviceType;
  orientation: DeviceOrientation;
  os: DeviceOs;
}

export const useDeviceStore = defineStore({
  id: 'device',
  state: (): DeviceState => ({
    type: device.type,
    orientation: device.orientation,
    os: device.os,
  }),
});
