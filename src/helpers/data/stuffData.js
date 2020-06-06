import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getStuffByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/items.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const fbStuff = response.data;
      const items = [];
      if (fbStuff) {
        Object.keys(fbStuff).forEach((itemId) => {
          fbStuff[itemId].id = itemId;
          items.push(fbStuff[itemId]);
        });
      }
      resolve(items);
    })
    .catch((err) => reject(err));
});

export default { getStuffByUid };