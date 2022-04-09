<template>
  <section class="section-main__container">
    <h2 class="section-title">Axios:</h2>
    <p class="text">Вывод данных с API NASA через https запрос.</p>
    <h3 class="section-title">Введите название планеты или звезды:</h3>
    <form class="form__wrapper" @submit.prevent="getResult(query)">
      <input class="form-input" type="text" placeholder="Название (анг.)" v-model="query" required>
      <button class="btn-success" type="button" @click="getResult(query)"><img src="../assets/icons/search.svg"></button>
    </form>
    <div v-if="results"></div>
    <div class="planets-images__grid">
      <div class="planets-images" v-for="(result, planets) in results" :key="planets">
        <img v-bind:src="result.links[0].href">
      </div>
    </div>
  </section>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "v-axios",
        data () {
            return {
                query: '',
                results: '',
            }
        },
        methods: {
            getResult (query) {
                axios.get ('https://images-api.nasa.gov/search?q=' + query + '&media_type=image').then (response => {
                    this.results = response.data.collection.items;
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.section-main__container {
  padding: 30px 60px;
  box-sizing: border-box;
}
.planets-images__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-top: 40px;
}
.planets-images > img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.form__wrapper {
  display: flex;
}
.form-input {
  width: 20vw;
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
  padding: 10px 15px;
  justify-content: center;
  align-items: center;
    & > img {
      width: 1.1vw;
    }
}
</style>