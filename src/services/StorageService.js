import { AsyncStorage } from 'react-native';

export async function getItem(key) {
  const value = await AsyncStorage.getItem(key);

  return value;
}

export async function setItem(key, value) {
  await AsyncStorage.setItem(key, value);
}

export async function removeItem(key) {
  await AsyncStorage.removeItem(key);
}
export const STORAGE_KEYS = {
  TOKEN: 'TOKEN',
  PERSONNEL_ID: 'PERSONNEL_ID',
  PERSONNEL_NAME: 'PERSONNEL_NAME',
  PERSONNEL_TYPE: 'PERSONNEL_TYPE'
};
