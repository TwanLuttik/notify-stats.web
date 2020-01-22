<template>
  <div id="adminScreen">
    <p>ADMIN PANEL</p>
    <logList/>
  </div>
</template>

<script>
import logList from './parts/logsList';

export default {
  components: {
    logList
  },
  mounted() {
    this.$admin.getLogs();
  }
}
</script>

<style lang="scss" scoped>
#adminScreen {
  padding-top: 30px;
}
</style>