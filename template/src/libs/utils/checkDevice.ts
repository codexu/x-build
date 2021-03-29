import device from 'current-device';

export default {
  type: device.type,
  orientation: device.orientation,
  os: device.os,
};
