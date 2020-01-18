export default({
  routes: {
    getByUsername: (request, username) => request.get(`channel/track/username/${username}`),
    getTop: (request) => request.get(`channel/track/top`)
  },
  data: {
    currentChannel: {},
    top: []
  },
  actions: {
    getByUsername({ routes, stats }, username) {
      return new Promise(async (resolve, reject) => {
        await routes.getByUsername(username).then((r) => {
          console.log('coll', r)
          stats.currentChannel = r.data;
          resolve(r);
        }).then((r) => {
          console.log('dsa', r)
        });
      });
    },
    getTop({ routes, stats}) {
      routes.getTop().then((r) => {

      })
    }
  }
})