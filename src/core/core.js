import Pulse from 'pulse-framework';
import Vue from 'vue';

import stats from './collections/stats.collection';

Pulse.use(Vue);

export default new Pulse({
  data: {
    something: true
  },
  collections: {
    stats
  },
  request: {
    baseURL: 'https://api.twanluttik.com/',
    headers: {
      Origin: 'https://track.notify.service/'
    }
  }
});