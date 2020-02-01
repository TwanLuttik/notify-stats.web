<template>
  <div id="homeScreen">
    <h2>Welcome to Notify statistics</h2>
    <div style="display:flex;flex-directin:column;justify-content:center;">
      <p>Made By</p><p class="link" style="padding-left:5px;" @click="to('https://twitter.com/TwanLuttik')">@TwanLuttik</p>
    </div>

    <div style="display:flex;flex-directin:column;justify-content:center;margin-top:30px;">
      <p>If you see any issues send me a dm on</p>
      <p class="link" style="padding-left:5px;" @click="to('https://twitter.com/TwanLuttik')">twitter</p>
    </div> 

    <TopChannels/>
    <!-- <div v-for="(item, i) in top" :key="i">
      {{ item }}
    </div> -->

  </div>
</template>

<script>
import TopChannels from './parts/TopChannels';

export default {
  components: {
    TopChannels
  },
  methods: {
    to(v) {
      window.open(v, '_blank')
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
#homeScreen {
  // background: red;
  height: 100%;
  width: 100%;
  margin-top: 30px;

  .link {
    cursor: pointer;
      color: #476AFF;
    &:hover {
    }
  }

  // @media only screen and (min-width: 700px) {
  //   max-width: 700px;
  //   margin: 0 auto;
  // }
}
</style>