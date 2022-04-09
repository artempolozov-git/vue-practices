<template>
  <form class="comment-form" @submit.prevent="submitComments">
    <div>
      <input class="form-input" placeholder="Имя" v-model="name">
    </div>

    <textarea class="form-input" placeholder="Комментарий" v-model="body"></textarea>
    <button class="btn-success">Добавить комментарий</button>
  </form>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        name: "create-comments",
        data() {
            return {
                name: '',
                body: '',
            }
        },
        methods: {
            ...mapMutations (["CREATE_COMMENTS"]),
            submitComments () {
                this.CREATE_COMMENTS({
                    name: this.name,
                    body: this.body,
                });
              this.name = this.email = this.body = '';
            },
        },
    }
</script>

<style lang="scss" scoped>
.comment-form {
  margin-bottom: 50px;
}
.form-input {
  width: 30vw;
  margin: 10px 0 5px;
  padding: 10px;
  box-sizing: border-box;
  resize: none;
  font-family: SourceSansPro;
    &:focus {
       border: 2px solid $main-green-color;
       outline: none;
     }
}
.btn-success {
  @extend %button-styles;
  margin-top: 10px;
}
</style>