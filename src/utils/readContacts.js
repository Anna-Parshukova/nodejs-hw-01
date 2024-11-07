import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const allContacts = await fs.readFile(PATH_DB, 'utf8');

    return JSON.parse(allContacts) || [];
  } catch (error) {
    console.error('Помилка читання', error);
  }
};
