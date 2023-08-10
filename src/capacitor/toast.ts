import { ShowOptions, Toast } from '@capacitor/toast';

export const showToast = async ({
  text,
  duration = 'long',
  position = 'center',
}: ShowOptions) => {
  await Toast.show({
    text,
    duration,
    position,
  });
};
