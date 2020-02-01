import Pulse from 'pulse-framework';
import Vue from 'vue';

import stats from './collections/stats.collection';
import admin from './collections/admin.collection';
import root from './collections/root.collection';

Pulse.use(Vue);
console.log(process.env)

export default new Pulse({
  collections: {
    stats,
    admin,
    root
  },
  request: {
    baseURL: process.env.NODE_ENV !== 'development' ? 'https://api.notifystats.me/v1' : 'http://localhost:3005/v1',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': '7b286cd1-8354-4bf7-a9b7-9ec30a2f18da',
      Origin: 'https://track.notify.services/',
      Dev: false,
    }
  }
});