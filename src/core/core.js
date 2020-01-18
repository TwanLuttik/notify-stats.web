import Pulse from 'pulse-framework';
import Vue from 'vue';

import request from './request';

import stats from './collections/stats.collection';

Pulse.use(Vue);

export default new Pulse({
  collections: {
    stats
  },
  request
});