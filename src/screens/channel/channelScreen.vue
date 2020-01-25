<template>
  <div id="channel">

    <div v-if="ready">
      <img class="banner" :src="currentChannel.channel.coverPhoto">
      <img class="profile" :src="currentChannel.channel.avatar">

      <p>notify.me/{{ currentChannel.channel.username }}</p>
      <p>{{ currentChannel.channel.displayName }}</p>
      <p>{{ new Date(currentChannel.channel.created_at).toLocaleString() }}</p>

      <trackList/>
    </div>

    <div v-else>
      <p>{{ $route.params.name }} is not found</p>
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
      ...this.mapData(core => ({
        currentChannel: core.stats.currentChannel
      })),
      ready: false,
      
    }
  },
  methods: {
    calcDifference(current, prev) {
      if (current === prev) return null;
      return (current - prev);
    },
    async LOAD(username) {
      return new Promise((resolve, reject) => {
        console.log('LOAD')

        if (this.ready === true) return;

        this.$stats.getByUsername(username).then((r) => {
          this.ready = true;
          return resolve()
        }).catch((r) => {
          if (r) throw r;
        })
      })

    }
  },
  async mounted() {
    if (this.currentChannel.channel == undefined) await this.LOAD(this.$route.params.username);
    
    // await this.$on('channelScreen', (username) => {
    //   console.log('channelScreen', username)
    //   this.ready = false;
    //   this.LOAD(username);
    // })
  },
  watch: {
    $route(to, from) {
      this.ready = false
      this.LOAD(this.$route.params.username);
      // react to route changes...
    }
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