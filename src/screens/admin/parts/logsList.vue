<template>
  <div id="logList">
    logs
    <div v-for="(item, i) in logs" :key="i" >
      <div class="row" :class="{ 'spacer-bottom': isGroup(i) }">
        <p>{{ item.title }}</p>
        <p>{{ new Date(item.date).toGMTString() }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'logList',
  data() {
    return {
      ...this.mapData({
        logs: 'admin/logs'
      })
    }
  },
  methods: {
    isGroup(index){
      if (index === 0) return false;

      return (this.logs[index - 1].uuid == this.logs[index].uuid);

    },
    calcElapseTime(start, end) {
      let started = new Date(start);
      let now = new Date(end);
      // let started = new Date(date);

      let TOTAL_SECONDS = Math.floor((now - started) / 1000);
      let SECONDS = ((Math.floor(TOTAL_SECONDS / 60) * 60) - TOTAL_SECONDS).toString().replace('-', '');

      let TOTAL_MINUTES = Math.floor(TOTAL_SECONDS / 60);
      let MINUTES = ((Math.floor(TOTAL_MINUTES / 60) * 60) - TOTAL_MINUTES).toString().replace('-', '');

      let TOTAL_HOURS = Math.floor(TOTAL_MINUTES / 60);
      let HOURS = ((Math.floor(TOTAL_HOURS / 24) * 24) - TOTAL_HOURS).toString().replace('-', '');

      let DAYS = Math.floor(((TOTAL_SECONDS / 60) / 60) / 24);

      return `${DAYS} Days, ${HOURS} Hours, ${MINUTES} Minutes, ${SECONDS} Seconds`
    }
  }
}
</script>

<style lang="scss" scoped>
#logList {
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 3px 0;
    
  }
  .spacer-bottom {
    border-bottom: solid 3px #476AFF;
    border-left: solid 3px #476AFF;
  }
}
</style>