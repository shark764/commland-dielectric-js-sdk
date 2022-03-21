import { Geolocation } from '@capacitor/geolocation';

export async function getPosition () {
  // get the users current position
  const position = await Geolocation.getCurrentPosition();

  // grab latitude & longitude
  const { latitude, longitude } = position.coords;

  // eslint-disable-next-line no-console
  // console.log({ latitude, longitude });
  return { latitude, longitude };
}
