<template>
  <div id="channel">
    
    <div v-if="loaded && !NOT_FOUND">
      <img class="banner" :src="currentChannel.channel.coverPhoto">
      <img class="profile" :src="currentChannel.channel.avatar">


      <p>notify.me/{{ currentChannel.channel.username }}</p>
      <p>{{ currentChannel.channel.displayName }}</p>
      <p>{{ new Date(currentChannel.channel.created_at).toLocaleString() }}</p>

      <trackList/>

    </div>

    <div v-else-if="NOT_FOUND">
      <!-- <p>{{ $route.params.name }} is not found</p> -->
    </div>

  </div>
</template>

<script>
import trackList from './parts/trackList';

export default {
  components: {
    trackList
  },
  data() {
    return {
      ...this.mapData({
        currentChannel: 'stats/currentChannel'
      }),
      loaded: false,
      NOT_FOUND: false
    }
  },
  methods: {
    calcDifference(current, prev) {
      if (current === prev) return null;
      return (current - prev);
    }
  },
  mounted() {
    console.log('channelScreen')
    this.$stats.getByUsername(this.$route.params.username).then((r) => {
      if (r.error) {
        this.NOT_FOUND = true
        return
      }
      this.loaded = true;
    })
  }
}
</script>

<style lang="scss" scoped>
#channel {
  padding-top: 360px;
  .profile {
    
    border-radius: 33%;
    height: 170px;
  }
  .banner {
    position: absolute;
    top: 0;
    z-index: 10;
    // width: 100%;
    left: 0;
    max-height: 350px;
    width: 100%;
    background-size: cover;
    background-position: 50%;
  }
    // .gradiant {
    //   background: -ms-linear-gradient(to top, rgba(237,237,237,0) 0%, rgba(240,240,240,0.5) 33%, rgba(243,243,243,1) 66%, rgba(246,246,246,1) 100%);
    //   position: absolute;
    //   top: 0;
    //   z-index: 11;
    //   width: 100%;
    //   left: 0;
    //   height: 500px;
    // }
}
</style>