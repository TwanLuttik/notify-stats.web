export default({
  actions: {
    to({}, v) {
      window.open(v, '_blank')
    },
    niceNumber(v) {
      if (v >= 1000) {
        return v + 'x'
      }
      return v;
    }
  }
})