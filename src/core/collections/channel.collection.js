export default({
  routes: {
    searchUsername: (request, username) => request.get('channel/username/search/' + username)
  },
  actions: {
    searchByUsername({ routes, channel }, username) {
      return new Promise((resolve, reject) => {
        routes.searchUsername(username)
          .then((r) => {
            return resolve(r.data);
          })
          .catch((r) => {
            return reject(r);
          })
      });
    }
  }
})