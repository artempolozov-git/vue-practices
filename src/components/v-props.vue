<template>
  <h3 class="user-index__title">{{index}} пользователь:</h3>
  <img class="user-icons" :src='userIcons'>
  <p><strong>Имя:</strong> {{name}}</p>
  <p><strong>Фамилия:</strong> {{secondName}}</p>
  <p><strong>Улица:</strong> {{street}}</p>
  <p><strong>Номер дома:</strong> {{number}}</p>
  <p><strong>Данные пользователя:</strong> {{name + ' ' + secondName + ', ' +  street + ', ' + 'дом ' + number}}</p>
</template>

<script>
    export default {
        name: "v-props",
        props: {
          index: String,
          userIcons: String,
          name: String,
          secondName: String,
          street: String,
          number: Number,
        },
    }
</script>

<style lang="scss" scoped>
.user-index__title {
  color: $main-green-color;
}
.user-icons {
  width: 5vw;
  height: 5vw;
  border-radius: 50px;
}
</style>