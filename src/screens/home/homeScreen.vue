<template>
  <div id="homeScreen">
    <h2 style="font-size:25px;">Welcome to First Notify statistics site</h2>
    
    <br>
    <br>
    <br>
    
     <img class="image" src="@/assets/images/notify-artwork-1.jpg" />
     <div class="gradiant"/>
     <div class="author">
       <p>Made by </p>
       <p class="link" @click="$root.to('https://twitter.com/noroiju')">@noroiju</p>
     </div>

    <TopChannels/>

    <br>
    <br>
    <br>
    <br>
    <br>

     <div style="display:flex;flex-directin:column;justify-content:center;">
      <p>Made By</p><p class="link" style="padding-left:5px;" @click="to('https://twitter.com/TwanLuttik')">@TwanLuttik</p>
    </div>
    <div style="display:flex;flex-directin:column;justify-content:center;margin:30px 0;">
      <p>If you see any issues send me a dm on</p>
      <p class="link" style="padding-left:5px;" @click="to('https://twitter.com/TwanLuttik')">twitter</p>
    </div> 

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
  .image {
    width: 100%;
    position: absolute;
    top: 0;
    z-index: -2;
    left: 0;
    right: 0;
    opacity: 0.12;
    max-height: 1300px;
  }
  .gradiant {
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4990371148459384) 49%, rgba(255,255,255,1) 100%);
    width: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    left: 0;
    height: 1300px;
  }
  .author {
    display: flex;
    position: absolute;
    top: 75px;
    left: 10px;
    color: gray;
    font-style: oblique;

    .link {
      padding-left: 5px;  
      cursor: pointer;
      &:hover {
        color: #476AFF;
      }
    }
  }

  // @media only screen and (min-width: 700px) {
  //   max-width: 700px;
  //   margin: 0 auto;
  // }
}
</style>