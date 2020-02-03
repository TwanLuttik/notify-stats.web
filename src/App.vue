<template>
  <div id="app">
    <Header/>
    <head>
      <link rel="icon" href="./favicon.ico">
      <link rel="stylesheet" href="https://use.typekit.net/ojh1rxj.css">
    </head>
    <router-view class="container-view"/>
  </div>
</template>

<script>
import Header from './parts/Header';

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
// @font-face {
//   font-family: 'Moniker';
//   src: url(./assets/fonts/MonikerBasicRegular.otf);
//   font-style: normal;
// }

#app {
  font-family: 'Moniker';
  // font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 16px;

  .container-view {
    margin: 0 auto;
    width: 100%;
    @media only screen and (min-width: 800px) {
      max-width: 800px;
    }
  }
}

html,
body {
  height: 100%;
}

* {
  font-family: 'Moniker';
  padding: 0;
  margin: 0;
}
</style>
