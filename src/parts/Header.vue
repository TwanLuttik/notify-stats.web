<template>
  <div id="Header">
    <div class="container">
      <img class="logo" src="../assets/logo.svg" @click="$router.push('/')">
      <input placeholder="Notify username" v-model="username" style="margin-right:15px;" type="text" autocomplete="off" v-on:keyup.enter="searchChannel">
      <button @click="searchChannel" :disabled="username === ''" >Search</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      username: '',
      ...this.mapData({
        currentChannel: 'stats/currentChannel'
      })
    }
  },
  methods: {
    searchChannel() {
      if (this.$route.params.username == this.username || this.username === '') return;
      this.$router.push({ name: 'channel', params: { username: this.username }});
    }
  }
}
</script>

<style lang="scss" scoped>
#Header {
  box-shadow: 0 0 16px 0px #0000005c;
  z-index: 99;
  width: -webkit-fill-available;
  background: #476AFF;
  color: white;
  padding: 5px;

  .container {
    margin: 0 auto;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    .logo {
      height: 28px;
      width: 28px;
      margin: 0 15px;
      cursor: pointer;
      transition: transform .1s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
    }

    @media only screen and (min-width: 800px) {
      max-width: 800px;
    }
  }

  input {
    font-size: 16px;
    outline: none;
    padding: 2px 5px;
    width: 500px;
    height: 26px;
    border: none;
    border-radius: 5px;
    width: -webkit-fill-available;
  }

  button {
    font-weight: bold;
    font-size: 16px;
    outline: none;
    padding: 2px 12px;
    height: 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background: #3253dc;
    color: white;

    transition: background .2s ease;
    &:hover {
      background: #2f4bbb;
    }
  }
}
</style>