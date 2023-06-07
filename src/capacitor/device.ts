import { Device } from '@capacitor/device';

export const getDeviceInfo = async () => {
  const info = await Device.getInfo();

  return info;
};

export const isIPad = async () => {
  const info = await getDeviceInfo();
  return /iPad/i.exec(info.model) !== null;
};

export const isIPhone = async () => {
  const info = await getDeviceInfo();
  return /iPhone/i.exec(info.model) !== null;
};
