export default({
  routes: {
    getByUsername: (request, username) => request.get(`channel/track/username/${username}`),
    getTop: (request) => request.get(`channel/track/top`),
  },
  data: {
    top: [],
    currentChannel: {}
  },
  groups: ['channels', 'tracks'],
  actions: {
    getByUsername({ routes, stats }, username) {
      console.log('getByUsername')
      return new Promise(async (resolve, reject) => {
        routes.getByUsername(username).then(async (r) => {
          stats.currentChannel = r.data
          return resolve();
        }).catch((r) => {
          stats.currentChannel = null
          if (r) throw r;
        });
      });
    },
    getTop({ routes, stats}) {
      routes.getTop().then((r) => {

      })
    }
  }
})