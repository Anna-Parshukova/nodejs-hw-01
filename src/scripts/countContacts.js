import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const arrOfContacts = await readContacts();
    return arrOfContacts.length;
  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());