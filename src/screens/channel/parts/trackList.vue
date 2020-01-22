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
           <p 
          v-if="i != 0 && calcDifference(currentChannel.track[i].subs, currentChannel.track[(i - 1)].subs) !== null" 
          class="diff" 
          :class="{ 'minus': calcDifference(currentChannel.track[i].subs, currentChannel.track[(i - 1)].subs) < 0 }">
          <!-- {{ calcDifference(currentChannel.track[i].subs, currentChannel.track[(i - 1)].subs) > 0? '+' : '' }}{{ calcDifference(currentChannel.track[i].subs, currentChannel.track[(i - 1)].subs) }} -->
        </p>
      </div>
      <p class="segment">{{ currentChannel.track[i].posts }}
        <!-- {{ calcDifference(currentChannel.track[i].posts, currentChannel.track[(i - 1)].posts) > 0? '+' : '' }} -->
        <!-- {{ calcDifference(currentChannel.track[i].posts, currentChannel.track[(i - 1)].posts) }} -->
      </p>
      <p class="segment">{{ currentChannel.track[i].month }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'trackList',
  data() {
    return {
      ...this.mapData({
        currentChannel: 'stats/currentChannel'
      })
    }
  },
  methods: {
    calcDifference(current, prev) {
      if (current === prev) return null;
      return (current - prev);
    }
  },
}
</script>

<style lang="scss" scoped>
.tracks {
  margin-top: 50px;
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