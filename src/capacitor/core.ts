import { Capacitor } from '@capacitor/core';

export const platform = Capacitor.getPlatform();

export const isNativePlatform = Capacitor.isNativePlatform();
