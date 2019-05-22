import { setItem, STORAGE_KEYS } from '../services/StorageService';

export const apiPath = 'http://192.168.56.1:3042';

export default async function getToken(email, password) {
  try {
    let response = await fetch(apiPath + '/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
    const responseJson = await response.json();
    await setToken(responseJson);

    return responseJson;
  } catch (error) {}
}

async function setToken(res) {
  if (res && res.token) {
    await setItem(STORAGE_KEYS.TOKEN, res.token);
  }
  if (res && res.personnelId) {
    await setItem(STORAGE_KEYS.PERSONNEL_ID, res.personnelId.toString());
  }
  if (res && res.personnelName) {
    await setItem(STORAGE_KEYS.PERSONNEL_NAME, res.personnelName);
  }
  if (res && res.personnelType) {
    await setItem(STORAGE_KEYS.PERSONNEL_TYPE, res.personnelType);
  }
}
