<template>
  <div class="tracks">
    <div class="top-bar">
      <p>Date</p>
      <p>Subs</p>
      <p>Posts</p>
      <p>Month</p>
    </div>

    <div v-for="(item, i) in currentChannel.track" :key="i" class="track" :class="{ 'even': (i % 2 == 0) ? false : true }">
      <p class="segment">{{ currentChannel.track[i].created_at }}</p>

      <div class="segment">
        <p>{{ currentChannel.track[i].subs }}</p>
        <p v-if="currentChannel.track[i+1]" class="diff" :style="{ color: (calcDifference(currentChannel.track[i+1].subs, currentChannel.track[i].subs) > 0 ? '#56a147' : 'RED')  }" >{{ test(currentChannel.track[i+1].subs, currentChannel.track[i].subs) }}{{ calcDifference(currentChannel.track[i+1].subs, currentChannel.track[i].subs) }}</p>
      </div>

      <div class="segment">
        <p>{{ currentChannel.track[i].posts }}</p>
        <p v-if="currentChannel.track[i+1]" class="diff" :style="{ color: (calcDifference(currentChannel.track[i+1].posts, currentChannel.track[i].posts) > 0 ? '#56a147' : 'RED')  }" >{{ test(currentChannel.track[i+1].posts, currentChannel.track[i].posts) }}{{ calcDifference(currentChannel.track[i+1].posts, currentChannel.track[i].posts) }}</p>
      </div>
      <p class="segment">{{ currentChannel.track[i].month }}</p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'trackList',
  data() {
    return {
      ...this.mapData(core => ({
        currentChannel: core.stats.currentChannel
      })),
    }
  },
  methods: {
    calcDifference(yesterday, today) {
      if (yesterday === today) return '';
      // if (yesterday)
      return (today - yesterday);
    },
    test(yesterday, today) {
      if (yesterday === today) return '';
      // if (yesterday)
      let a = today - yesterday;

      if (a === 0) return '';
      else return a > 0 ? '+' : '';
    }
  },
}
</script>

<style lang="scss" scoped>
.tracks {
  margin: 90px 0;
  border: solid 2px #476aff;
  .top-bar {
    display: flex;
    background: #476aff;
    color: white;
    font-weight: bold;
    padding: 5px;
    p {
      width: 100%;
      display: flex;
      justify-content: left;
    }
  }
  .track {
    display: flex;
    padding: 5px;
    .segment {
      width: 100%;
      // width: 120px;
      display: flex;
      .diff {
        color: rgb(86, 161, 71);
        padding-left: 10px;
      }
      .minus {
        color: red;
      }
    }
   
  }
  .even {
    background: #f1f1f1;
  }
}
</style>