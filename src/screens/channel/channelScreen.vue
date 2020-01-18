<template>
  <div id="channel">
    <div v-if="loaded">
      <!-- {{ currentChannel }} -->
      <p>notify.me/{{ currentChannel.channel.username }}</p>
      <p>{{ currentChannel.channel.displayName }}</p>
      <p>{{ currentChannel.channel.created_at }}</p>
      <!-- <img class="cover" src="https://assets.notify.me/covers/1.png"> -->
      <img class="profile"  v-if="'https://assets.notify.me/avatars/' + currentChannel.channel.channel_id + '.png'" :src="'https://assets.notify.me/avatars/' + currentChannel.channel.channel_id + '.png'">
      <img class="profile" v-else :src="'https://assets.notify.me/avatars/' + currentChannel.channel.channel_id + '.jpg'">


      <div class="tracks">
        <div class="top-bar">
          <p>Date</p>
          <p>Subs</p>
          <p>Posts</p>
          <p>Month</p>
        </div>
        <div v-for="(item, i) in currentChannel.track" :key="i" class="track" :class="{ 'even': (i % 2 == 0) ? false : true }">
          <!-- {{ i }} -->
          <p class="segment">{{ currentChannel.track[i].created_at }}</p>
          <div class="segment">
            <p>{{ currentChannel.track[i].subs }}</p>
             <p 
              v-if="i != 0 && calcDifference(currentChannel.track[i].subs, currentChannel.track[(i - 1)].subs) !== null" 
              class="diff" 
              :class="{ 'minus': calcDifference(currentChannel.track[i].subs, currentChannel.track[(i - 1)].subs) < 0 }">
              {{ calcDifference(currentChannel.track[i].subs, currentChannel.track[(i - 1)].subs) > 0? '+' : '' }}{{ calcDifference(currentChannel.track[i].subs, currentChannel.track[(i - 1)].subs) }}
            </p>
          </div>
          <p class="segment">{{ currentChannel.track[i].posts }}</p>
          <p class="segment">{{ currentChannel.track[i].month }}</p>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ...this.mapData({
        currentChannel: 'stats/currentChannel'
      }),
      loaded: false
    }
  },
  methods: {
    calcDifference(current, prev) {
      if (current === prev) return null;
      return (current - prev);
    }
  },
  mounted() {
    this.$stats.getByUsername(this.$route.params.username).then((r) => {
      this.loaded = true;
    });
  }
}
</script>

<style lang="scss" scoped>
#channel {
  .profile {
    border-radius: 33%;
    height: 120px;
  }

  .tracks {
    margin-top: 50px;
    .top-bar {
      display: flex;
      background: #3253dc;
      color: white;
      font-weight: bold;
      p {
        width: 120px;
      }
    }
    .track {
      display: flex;
      padding: 5px;
      .segment {
        width: 120px;
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
      background: #476aff;
      color: white;
    }
  }
}
</style>