/* eslint-disable no-return-await */
import { Capacitor } from '@capacitor/core';
import {
  Filesystem,
  Directory,
  // Encoding
} from '@capacitor/filesystem';

console.log('Capacitor.getPlatform()', Capacitor.getPlatform());

export const downloadFileFromUri = async ({
  uri,
  path,
}: {
  uri: string;
  path: string;
  folder?: string;
}) => {
  try {
    const fileRequest = await fetch(uri, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
    });
    const fileBlob = await fileRequest.blob();
    let success = false;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(fileBlob);
    fileReader.onloadend = async () => {
      await Filesystem.writeFile({
        path,
        data: fileReader.result as string,
        directory: Directory.Documents,
        recursive: true,
      });
      success = true;
    };
    return success;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const downloadFile = async ({
  file,
  path,
}: {
  file: Blob;
  path: string;
  folder?: string;
}) => {
  const fileReader = new FileReader();
  const fileBlob = file;

  return await new Promise((resolve, reject) => {
    fileReader.onerror = () => {
      fileReader.abort();
      reject(new Error('Problem parsing file'));
    };

    fileReader.onload = () => {
      // resolve(fileReader.result);
      console.log(fileReader.result);
    };

    fileReader.onloadend = async () => {
      await Filesystem.writeFile({
        path,
        data: fileReader.result as string,
        directory: Directory.Documents,
        recursive: true,
      });
      resolve(true);
    };

    fileReader.readAsDataURL(fileBlob);

    // fileReader.readAsText(file);
  });
};
