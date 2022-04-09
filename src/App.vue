<template>
  <div id="app">
    <router-view name="header"></router-view>
    <div id="app-content">
      <router-view :is="defaultViewKey"></router-view>
    </div>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  computed: {
      defaultViewKey: function () {
          return this.$route.name;
      }
  }
}
</script>

<style lang="scss">
  html, body {
    height: 100%;
    font-size: 1vw;
    color: $main-text-color;
  }
  body {
    margin: initial;
    font-family: SourceSansPro;
  }
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-weight: normal;
  }
  @font-face {
    font-family: SourceSansPro;
    src: url('./assets/SourceSansPro-SemiBold.ttf');
    font-weight: bold;
    font-display: fallback;
  }
  @font-face {
    font-family: SourceSansPro;
    src: url('./assets/SourceSansPro-Regular.ttf');
    font-weight: normal;
  }
  #app-content {
    flex: 1 0 auto;
    max-width: 1920px;
    align-self: center;
    width: 100%;
  }
</style>
