export default({
  routes: {
    getByUsername: (request, username) => request.get(`channel/track/username/${username}`),
  },
  data: {
    currentChannel: {}
  },
  actions: {
    getByUsername({ routes, stats }, username) {
      return new Promise((resolve, reject) => {
        routes.getByUsername(username).then((r) => {
          stats.currentChannel = r;
          resolve();
        });
      });
    }
  }
})