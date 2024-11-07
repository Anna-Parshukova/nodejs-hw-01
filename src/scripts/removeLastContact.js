import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const currentContacts = await readContacts();
    const idx = currentContacts.length;
    if (idx > 0) {
      currentContacts.splice(idx - 1, 1);
      await writeContacts(currentContacts);
      console.log('Removed last contact');
    } else {
      console.log('Count of contacts = 0, there is nothing for remove');
    }

    return;
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();