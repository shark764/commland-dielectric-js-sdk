import { Browser, OpenOptions } from '@capacitor/browser';

export async function openInAppBrowser ({
  url,
  windowName,
  presentationStyle,
}: OpenOptions) {
  await Browser.open({
    url,
    windowName: windowName ?? 'Conference',
    presentationStyle: presentationStyle ?? 'fullscreen',
  });
  await Browser.addListener('browserPageLoaded', () => {
    // eslint-disable-next-line no-console
    console.log('browserPageLoaded');
  });
  await Browser.addListener('browserFinished', () => {
    // eslint-disable-next-line no-console
    console.log('browserFinished');
  });
}
