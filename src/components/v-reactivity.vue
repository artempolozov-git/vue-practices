<template>
  <p class="text">Реализация двусторонней привязки через директиву v-model с отображением свойств объекта через цикл v-for.</p>
    <div class="form-group">
      <div class="form-group__inputs">
        <input class="form-input" type="text" placeholder="Фамилия" v-model.trim="newUsers.secondName">
        <input class="form-input" type="text" placeholder="Имя" v-model.trim="newUsers.firstName">
        <input class="form-input" type="text" placeholder="Отчество" v-model.trim="newUsers.lastName">
      </div>
      <p class="users-inputs__info"><b>Фамилия:</b> {{ newUsers.secondName}}</p>
      <p class="users-inputs__info"><b>Имя:</b> {{ newUsers.firstName }}</p>
      <p class="users-inputs__info"><b>Отчество:</b> {{ newUsers.lastName }}</p>
      <div class="users-information" v-for="(userIndexes, index) in usersIndex" :key="index">
        <span>{{userIndexes.secondName + ' ' + userIndexes.firstName + ' ' + userIndexes.lastName}}</span>
      </div>
      <button @click="addList" class="btn-success">Добавить пользователя</button>
    </div>

    <div class="counter__container">
      <p class="text">Декларативная отрисовка счетчика с условием v-if.</p>
      <div class="counter">
        <button class="btn-counter" @click="counter++">+</button>
        <button class="btn-counter decrement" @click="counter--" v-if="counter > 0">-</button>
        <p><strong>Счетчик: </strong> <span class="value">{{counter}}</span></p>
      </div>

      <div class="timer__container">
        <p class="text">Декларативная отрисовка таймера с функцией setInterval.</p>
        <p><strong>Секундомер: </strong><span class="value">{{timer}}</span> секунд</p>
        <button class="btn-timer" @click="startTimer">Старт</button>
        <button class="btn-timer stop-timer" @click="stopTimer">Стоп</button>
        <button class="btn-timer reset-timer" @click="resetTimer">Обнулить</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "v-reactivity",
        data() {
            return {
                newUsers: {},
                usersIndex: [{
                  firstName: '',
                  secondName: '',
                  lastName: '',
                }],
                additionalField: '',
                counter: 0,
                timer: 0,
                interval: null,
            }
        },
        methods: {
            startTimer () {
                this.interval = setInterval(this.incrementSeconds, 1000)
            },
            stopTimer () {
                clearInterval(this.interval)
            },
            resetTimer () {
                this.timer = 0;
            },
            incrementSeconds () {
                this.timer++;
            },
            addList() {
                this.usersIndex.push(this.newUsers);
                this.newUsers = {};
            },
        }
    }
</script>

<style lang="scss" scoped>
.form-group__inputs {
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-bottom: 15px;
}
.form-input {
  width: 15vw;
  margin-bottom: 10px;
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
}
.form-control:focus {
  border: 2px solid $main-green-color;
  outline: none;
}
.text {
  color: #737373;
}
.counter {
  display: flex;
  align-items: center;
}
.btn-counter {
  background-color: $main-green-color;
  color: #ffffff;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  font-weight: bold;
    &:hover {
      background-color: #3c9c6b;
    }
}
.value {
  color: #41b883;
  font-weight: bold;
}
.decrement {
  background-color: #eb0100;
    &:hover {
      background-color: #d90100;
    }
}
.btn-timer {
  background-color: $main-green-color;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: bold;
    &:hover {
      background-color: #3c9c6b;
    }
}
.stop-timer {
  margin: 0 10px 0;
  background-color: #eb0100;
    &:hover {
      background-color: #d90100;
    }
}
.reset-timer {
  background-color: #ebb700;
    &:hover {
      background-color: #e0ad00;
    }
}
.users-information {
  color: $main-green-color;
  font-weight: bold;
  margin: 10px 0 20px;
}
.users-inputs__info {
  margin: 0 0 10px;
}
</style>