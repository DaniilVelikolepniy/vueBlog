<template>
  <div class="bodyChekIn">
    <header class="header">
      <h2
        class="router"
        v-on:click="goToLogIn">
        Вход
      </h2>
      <h2>&#160;/&#8194;</h2>
      <h2>
        Регистрация
      </h2>
    </header>
    <div class="main">
      <span class="form">
        <label>
          Введите логин:
          <input
            type="text"
            placeholder=""
            class="userText"
          />
        </label>
      </span>
      <span class="form">
        <label>
          Введите почту:
          <input
            v-model.trim.lazy="v$.form.email.$model"
            type="text"
            placeholder="primer@mail.123"
            class="userText"
          />
        </label>
        <div class="error" v-if="v$.form.email.required.$invalid">Введите почту</div>
        <div class="error" v-if="v$.form.email.email.$invalid">Введит опечатались указывая почту</div>
      </span>
      <span class="form">
        <label>
          Введите пароль:
          <input
            v-model.trim.lazy="v$.form.password.$model"
            type="password"
            class="userText"
          />
        </label>
        <div class="error" v-if="v$.form.password.required.$invalid">Вы не ввели пароль.</div>
        <div class="error" v-if="v$.form.password.minLength.$invalid">Пароль должен иметь минимум {{ v$.form.password.minLength.$params.min }} символов.</div>
      </span>
      <span class="form">
        <label>
          Подтвердите пароль:
          <input
            v-model.trim.lazy="v$.form.repeatPassword.$model"
            type="password"
            class="userText"
          />
        </label>
        <div class="error" v-if="v$.form.repeatPassword.sameAs.$invalid">Пароли должны совпадать.</div>
      </span>
      <span class="form">
        <label>
          Введите телефон:
          <input
            type="tel"
            class="userText"
            placeholder="8 (***) ***-**-**"
          />
        </label>
      </span>
      <span class="form">
        <label>
          <br>
          <input
            v-on:click="goToLogIn"
            type="button"
            value="Зарегестрироваться"
            class="button"
          />
        </label>
      </span>
    </div>
  </div>
</template>

<script>
import { required, email, sameAs, minLength } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

export default {
  name: 'chekIn',
  data: () => ({
    form: {
      name: '',
      email: '',
      password: '',
      repeatPassword: ''
    }
  }),
  setup: () => ({ v$: useVuelidate() }),
  validations () {
    return {
      form: {
        name: { required },
        email: { required, email },
        password: {
          required,
          minLength: minLength(6)
        },
        repeatPassword: {
          sameAs: sameAs('password')
        }
      }
    }
  },
  methods: {
    goToLogIn () {
      this.$router.push({ name: 'LogIn' })
    }
  }
}
</script>

<style lang="less">
@background: rgba(108, 192, 139, 0.75);
@shadow: rgba(54, 97, 70, 0.5);
@color: rgba(116, 40, 24, 1);

.bodyChekIn {
  display: grid;
  width: 90vw;
  margin: -100vh 0 0 10vw;

  .header {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 70px 20px 150px;
    margin: 30px auto;
    padding: 5px;
    border-radius: 1em;
    color: @color;
    background-image: url("../assets/bg_1.jpg");
    text-align: center;
    box-shadow: 5px 5px 35px black;

    h2 {
      display: block;
      margin: 10px auto;
      width: fit-content;
    }

    .router {
      text-shadow: 4px 4px 3px @shadow;
      cursor: pointer;
    }
    .router:hover {
      text-shadow: 1px 1px 5px @shadow;
      transition: all 1s ease;
    }
  }

  .main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80px 80px 80px 80px 80px 80px;
    margin: 15px auto;
    padding: 10px;
    width: 50vw;
    height: auto;
    background-image: url("../assets/bg_1.jpg");
    border-radius: 25px;
    box-shadow: 5px 5px 35px black;

    .form {
      display: block;
      margin: auto;
      font-size: 18px;
      color: brown;

      .button {
        display: block;
        margin: auto;
        height: 45px;
        width: 190px;
        border: none;
        border-radius: 10px;
        font-size: 16px;
        font-weight: bold;
        color: @color;
        background-color: @background;
        box-shadow: 5px 5px 7px @shadow;
      }
      .button:hover {
        border-radius: 15px;
        box-shadow: 2px 2px 4px @shadow;
        transition: all 1s ease;
      }

      .error {
        font-size: 16px;
        color: blue;
      }

      .userText {
        display: block;
        margin: 5px auto;
        width: 15vw;
        height: 25px;
        border: solid 1px @color;
        border-radius: 5px;
      }
    }
  }
}
</style>
