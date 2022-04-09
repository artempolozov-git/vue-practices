<template>
  <section class="section-main__container">
    <h2 class="section-title">Реактивность:</h2>
    <v-reactivity></v-reactivity>
    <h2 class="section-title">Передача входных параметров через Props:</h2>
    <v-props v-for="(user, users) in userInformation"
           :key="users"
           :index="user.index"
           :user-icons="user.userIcons"
           :name="user.name"
           :second-name="user.secondName"
           :street="user.street"
           :number="user.number">
    </v-props>
    <h2 class="section-title">Модальное окно с валидацией и элементом slot</h2>
    <button @click="openModal" class="btn-success">Открыть модалку</button>
    <v-modal v-if="modal" @close="modal = false">
      <template v-slot:body>
          <form class="modal-form">
            <h2 class="modal-form__title">Войти в аккаунт</h2>
            <div class="inputs__wrapper">
              <label for="email"><b>Email:</b></label>
              <input class="form-input" id="email" v-model.trim="email" type="text">
              <span class="form-validates" v-if="v$.email.$error">Введите корректный email</span>
            </div>
            <div class="inputs__wrapper">
              <label for="password"><b>Пароль:</b></label>
              <input class="form-input" id="password" v-model="password" type="password">
              <span class="form-validates" v-if="v$.password.$error">Пароль должен быть минимум 6 символов</span>
            </div>
            <button type="button" class="btn-success center" @click="submitModal"><b>Войти</b></button>
          </form>
      </template>
    </v-modal>
  </section>
</template>

<script>
    import vReactivity from "@/components/v-reactivity";
    import vProps from "@/components/v-props";
    import VModal from "@/components/v-modal";
    import useValidate from '@vuelidate/core';
    import { email, required, minLength } from '@vuelidate/validators';
    export default {
        name: "app-home",
        components: {
            VModal,
            vReactivity,
            vProps,
        },
        validations: {
              email: { email, required },
              password: { required, minLength: minLength(6) },
        },
        data() {
            return {
                v$: useValidate(),
                email: '',
                password: '',
                userInformation: [
                  {
                    index: 'Первый',
                    userIcons: require ('@/assets/icons/user.svg'),
                    name: 'Иван',
                    secondName: 'Петров',
                    street: 'проспект Мира',
                    number: 21,
                  },
                  {
                      index: 'Второй',
                      userIcons: require ('@/assets/icons/user.svg'),
                      name: 'Тамара',
                      secondName: 'Иванова',
                      street: 'площадь Победы',
                      number: 75,
                  },
                ],
                modal: false,
            }
        },
        methods: {
            openModal () {
               this.modal = true
            },
            submitModal () {
                this.v$.$validate();
                if (!this.v$.$error) {
                    alert('Получилось!')
                } else {
                    alert('Попробуйте еще раз')
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
.section-main__container {
  padding: 30px 60px;
  box-sizing: border-box;
}
.section-title {
  margin-top: 30px;
}
.btn-success {
  @extend %button-styles
}
.center {
  margin: auto;
}
.modal-form__title {
  text-align: center;
}
.inputs__wrapper {
  margin-bottom: 20px;
}
.form-input {
  width: 100%;
  margin: 10px 0 5px;
  font-family: SourceSansPro;
  padding: 10px;
  box-sizing: border-box;
    &:focus {
      border: 2px solid $main-green-color;
      outline: none;
    }
}
.form-validates {
  font-size: 0.8vw;
  color: #d90100;
}
</style>