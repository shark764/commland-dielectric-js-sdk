import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  RegistrationError,
  Token,
} from '@capacitor/push-notifications';

interface ListenerFuncs {
  registration: (token: Token) => void;
  registrationError: (error: RegistrationError) => void;
  pushNotificationReceived: (notification: PushNotificationSchema) => void;
  pushNotificationActionPerformed: (notification: ActionPerformed) => void;
}

export const addListeners = async (listenerFuncs: ListenerFuncs) => {
  await PushNotifications.addListener(
    'registration',
    listenerFuncs.registration
  );

  await PushNotifications.addListener(
    'registrationError',
    listenerFuncs.registrationError
  );

  await PushNotifications.addListener(
    'pushNotificationReceived',
    listenerFuncs.pushNotificationReceived
  );

  await PushNotifications.addListener(
    'pushNotificationActionPerformed',
    listenerFuncs.pushNotificationActionPerformed
  );
};

export const registerNotifications = async () => {
  let permStatus = await PushNotifications.checkPermissions();

  if (permStatus.receive === 'prompt') {
    permStatus = await PushNotifications.requestPermissions();
  }

  if (permStatus.receive !== 'granted') {
    throw new Error('User denied permissions!');
  }

  await PushNotifications.register();
};

export const getDeliveredNotifications = async () => {
  const notificationList = await PushNotifications.getDeliveredNotifications();

  return notificationList;
};
