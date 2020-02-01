export default({
  routes: {
    getByUsername: (request, username) => request.get(`channel/username/${username}`),
    getTop: (request) => request.get(`channel/top`),
  },
  data: {
    currentChannel: {},
    top: null
  },
  groups: ['channels', 'tracks'],
  persist: ['top'],
  actions: {

    getByUsername({ routes, stats }, username) {
      console.log('getByUsername')
      return new Promise(async (resolve, reject) => {
        routes.getByUsername(username).then(async (r) => {
          stats.currentChannel = r.data
          return resolve();
        }).catch((r) => {
          stats.currentChannel = null
          reject(r)
        });
      });
    },

    getTop({ routes, stats }) {
      routes.getTop().then((r) => {
        stats.collect(r.data, 'top', { byKeys: true });
      })
    }
    
  }
})