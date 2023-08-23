import { BleClient } from '@capacitor-community/bluetooth-le';

export async function main (): Promise<void> {
  try {
    await BleClient.initialize();

    const device = await BleClient.requestDevice();

    // connect to device, the onDisconnect callback is optional
    await BleClient.connect(device.deviceId, (deviceId) =>
      onDisconnect(deviceId)
    );
    console.log('connected to device', device);
  } catch (error) {
    console.error(error);
  }
}

function onDisconnect (deviceId: string): void {
  console.log(`device ${deviceId} disconnected`);
}
