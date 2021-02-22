import device from 'current-device';

export default {
  namespaced: true,
  state: {
    type: device.type,
    orientation: device.orientation,
    os: device.os,
  },

};
