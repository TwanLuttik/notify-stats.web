<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0 auto;

  @media only screen and (min-width: 700px) {
    max-width: 700px;
  }
}


* {
  padding: 0;
  margin: 0;
}
</style>
