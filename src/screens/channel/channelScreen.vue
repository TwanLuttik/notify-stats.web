<template>
  <div id="channel">
    
    <div v-if="loaded && !NOT_FOUND">
      <img class="profile"  v-if="'https://assets.notify.me/avatars/' + currentChannel.channel.channel_id + '.png'" :src="'https://assets.notify.me/avatars/' + currentChannel.channel.channel_id + '.png'">
      <img class="profile" v-else :src="'https://assets.notify.me/avatars/' + currentChannel.channel.channel_id + '.jpg'">


      <p>notify.me/{{ currentChannel.channel.username }}</p>
      <p>{{ currentChannel.channel.displayName }}</p>
      <p>{{ new Date(currentChannel.channel.created_at).toLocaleString() }}</p>

      <trackList/>

    </div>

    <div v-else-if="NOT_FOUND">
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
    this.$stats.getByUsername(this.$route.params.username).then((r) => {
      console.log(r.error);
      if (r.error) {
        console.log('sdas')
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
  padding-top: 50px;
  .profile {
    border-radius: 33%;
    height: 120px;
  }
}
</style>