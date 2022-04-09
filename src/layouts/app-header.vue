<template>
  <header class="header__main-container">
    <router-link to="/"><img class="logotype-images" src="../assets/icons/vue-practices-logotype.svg"></router-link>
    <nav class="nav-menu__wrapper">
      <router-link class="nav-item" to="/">Главная</router-link>
      <router-link class="nav-item" to="/vuex">Vuex</router-link>
      <router-link class="nav-item" to="/axios">Axios</router-link>
    </nav>
  </header>
</template>

<script>
    export default {
        name: "app-header",
    }
</script>

<style lang="scss" scoped>
.header__main-container {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 30px 60px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(33, 33, 33, 0.1);
}
.logotype-images {
  width: 12vw;
}
.nav-menu__wrapper {
  margin-left: auto;
}
.nav-item {
  margin-left: 50px;
  border: none;
  text-decoration: none;
  color: #273849;
}
.router-link-exact-active {
  color: $main-green-color;
  font-weight: bold;
}
</style>