import {
  App,
  RestoredListener,
  StateChangeListener,
  URLOpenListener,
} from '@capacitor/app';

interface ListenerFuncs {
  appStateChange: StateChangeListener;
  appUrlOpen: URLOpenListener;
  appRestoredResult: RestoredListener;
}

export const getInfo = async () => {
  const info = await App.getInfo();
  return info;
};

export const getState = async () => {
  const state = await App.getState();
  return state;
};

export const getLaunchUrl = async () => {
  const launchUrl = await App.getLaunchUrl();
  return launchUrl;
};

export const minimizeApp = async () => {
  await App.minimizeApp();
};

export const addListeners = async (listenerFuncs: ListenerFuncs) => {
  await App.addListener('appStateChange', listenerFuncs.appStateChange);

  await App.addListener('appUrlOpen', listenerFuncs.appUrlOpen);

  await App.addListener('appRestoredResult', listenerFuncs.appRestoredResult);
};
