<template>
  <div id="Header">
    <div class="container">
      <img class="logo" src="../assets/logo.svg" @click="$router.push('/')">
      <div class="search-container">
        <input 
          @input="SearchSuggestion"
          @click="searchbarshow = true"
          placeholder="Notify username" 
          v-model="username" 
          style="margin-right:15px;" 
          class="search-input"
          type="text" 
          v-on:keyup.enter="searchChannel">
        <div 
          class="suggestion-container" 
          v-if="searchbarshow && username !== ''" 
          ref="search" 
          @mouseenter="searchbar.hovered_over = false"
          @mouseleave="searchbar.hovered_over = true, searchbarHandler()">
          <div v-for="(item, i) in search" :key="i">
            <p @click="searchbarshow = false, $router.push('/channel/' + item.username)">{{ item.username }}</p>
          </div>
        </div>
      </div>

      <button @click="searchChannel" :disabled="username === ''" >Search</button>
    </div>
  </div>
</template>

<script>
let timer = null;

export default {
  name: 'Header',
  data() {
    return {
      ...this.mapData({
        currentChannel: 'stats/currentChannel'
      }),
      username: '',
      search: [],
      searchbarshow: false,
      searchbar: {
        hovered_over: false
      }
    }
  },
  methods: {
    searchbarHandler() {
      setTimeout(() => {
        if (this.searchbar.hovered_over) this.searchbarshow = false;
      }, 400)
      
    },
    SearchSuggestion() {
      if (this.username == '') this.searchbarshow = false;
      if (timer !== null) return;      
      timer = setTimeout(async () => {
        if (!timer) return 
        this.search = await this.$channel.searchByUsername(this.username);
        console.log(this.$channel.searchByUsername(this.username))
        this.searchbarshow = true
        timer = null;
      }, 200)
      
    },
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
    .search-container {
      width: 100%;
      .suggestion-container {
        position: absolute;
        width: fit-content;
        z-index: 50;
        background: white;
        // height: 200px;
        color: black;
        top: 44px;
        width: 300px;
        border-radius: 0 0 3px 3px;
        box-shadow: 0 3px 4px 0px #00000012;
        padding: 3px 0;
        p {
          display: flex;
          align-items: center;
          padding-left: 5px;
          height: 30px;
          margin: 3px 0;
          cursor: pointer;
          &:hover {
            background: rgb(240, 240, 240);
          }
        }

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