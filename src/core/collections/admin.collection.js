export default({
  model: {
    uuid: {
      type: String,
      primaryKey: true
    }
  },
  routes: {
    getLogs: (request) => request.get('admin/logs')
  },
  groups: ['logs'],
  persist: ['logs'],
  actions: {
    getLogs({ routes, admin }) {
      routes.getLogs().then((r) => {
        admin.collect(r.data, 'logs', { byKeys: true });
      })
    }
  }
})