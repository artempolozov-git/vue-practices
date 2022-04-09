<template>
  <section class="section-main__container">
    <h2 class="section-title">Vuex:</h2>
    <p class="text">Реализация вывода списка комментариев с возможностью добавления новых в массив.</p>
    <create-comments></create-comments>
    <div class="posts-main__container" v-for="(comments, users) in VALID_COMMENTS" :key="users">
      <h3>{{comments.name}}</h3>
      <p>{{comments.body}}</p>
    </div>
  </section>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import CreateComments from "@/components/create-comments";
  export default {
      name: "v-vuex",
      components: {
          CreateComments
      },
      computed: {
          ...mapGetters (["VALID_COMMENTS"])
      },
      methods: {
          ...mapActions (["FETCH_COMMENTS"]),
      },
      async mounted() {
          this.FETCH_COMMENTS();
      }
  }
</script>

<style lang="scss" scoped>
.section-main__container {
  padding: 30px 60px;
  box-sizing: border-box;
}
.posts-main__container {
  border-bottom: 1px solid #d3d3d3;
}
</style>