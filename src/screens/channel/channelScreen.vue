<template>
  <div id="channel">
    <div v-if="ready && !false">
      <div class="banner" :style="'background-image: url(' + currentChannel.channel.coverphoto + ');'"></div>
      <div class="banner-side" :style="'background-image: url(' + currentChannel.channel.coverphoto + ');'"></div>

      <img class="profile" :src="currentChannel.channel.avatar">

      <p>notify.me/{{ currentChannel.channel.username }}</p>
      <p 
      class="link"
      style="font-size:24px;padding-top:10px;" 
      @click="to('https://notify.me/' + currentChannel.channel.username)">
      {{ currentChannel.channel.displayname }}</p>
      <!-- <p>{{ new Date(currentChannel.channel.created_at).toLocaleString() }}</p> -->

      <trackList/>
    </div>

    <div v-else style="padding-top: 20px">
      <p style="font-size: 20px;">{{ $route.params.username }} is not found</p>
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
      error: false      
    }
  },
  methods: {
    to(v) {
      window.open(v, '_blank')
    },
    calcDifference(current, prev) {
      if (current === prev) return null;
      return (current - prev);
    },
    async LOAD(username) {
      return new Promise(async (resolve, reject) => {
        console.log('LOAD')
        if (this.ready === true) return;

        this.error = false;
        this.ready = false;

        await this.$stats.getByUsername(username)
          .then((r) => {
            this.ready = true;
            return resolve()
          }).catch((r) => {
            this.ready = true;
            this.error = true;
            reject();
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
      console.log('test')
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
    height: 250px;
    width: 100%;
    z-index: 1;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
    @media only screen and (min-width: 800px) {
      max-width: 800px;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
  .banner-side {
    position: absolute;
    left: 0;
    height: 250px;
    width: 100%;
    z-index: 0;
    filter: grayscale(1);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .background-banner {
    position: absolute;
    left: -5%;
    height: 250px;
    width: 110%;
    z-index: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: blur(14px);
    @media only screen and (min-width: 1300px) {
      border-radius: 0 0 10px 10px;
    }
  }
  .link {
    cursor: pointer;
    width: fit-content;
    margin: 0 auto;
    font-weight: bold;
    transition: color .2s ease-in-out;
    &:hover {
      color: #476AFF;
    }
  }
}
</style>