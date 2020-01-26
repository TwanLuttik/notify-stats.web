<template>
  <div id="channel">

    <div v-if="ready">
      <div class="banner" :style="'background-image: url(' + currentChannel.channel.coverPhoto + ');'"></div>
      <div class="banner-gradiant"/>
      <!-- <img class="banner" :src="currentChannel.channel.coverPhoto"> -->
      <img class="profile" :src="currentChannel.channel.avatar">

      <!-- <p>notify.me/{{ currentChannel.channel.username }}</p> -->
      <p style="font-size:24px;padding-top:10px;">{{ currentChannel.channel.displayName }}</p>
      <!-- <p>{{ new Date(currentChannel.channel.created_at).toLocaleString() }}</p> -->

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
          document.title = username;
          return resolve()
        }).catch((r) => {
          if (r) throw r;
        });
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
  // padding-top: 360px;

  .profile {
    position: relative;
    border-radius: 100%;
    height: 170px;
    z-index: 1;
    border: white solid 5px;
    margin-top: 160px;
  }

  .banner {
    position: absolute;
    left: 0;
    height: 250px; // set this to the banner height
    width: 100%;
    z-index: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;


    // position: absolute;
    // top: 0;
    // z-index: 10;
    // left: 0;
    // max-height: 350px;
    // width: 100%;
    // background-size: cover;
    // background-position: 50%;
  }

  .banner-gradiant {

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