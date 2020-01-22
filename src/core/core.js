import Pulse from 'pulse-framework';
import Vue from 'vue';

import stats from './collections/stats.collection';
import admin from './collections/admin.collection';

Pulse.use(Vue);

export default new Pulse({
  collections: {
    stats,
    admin
  },
  request: {
    baseURL: 'http://localhost:3005',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': '7b286cd1-8354-4bf7-a9b7-9ec30a2f18da',
      Origin: 'https://track.notify.services/',
      Dev: false,
    }
  }
});
// https://api.twanluttik.com
// http://localhost:3005