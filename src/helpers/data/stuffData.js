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

const getSingleItem = (itemId) => axios.get(`${baseUrl}/items/${itemId}.json`);

const postNewStuff = (newItem) => axios.post(`${baseUrl}/items.json`, newItem);

export default { getStuffByUid, getSingleItem, postNewStuff };
