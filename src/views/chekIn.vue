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
            type="text"
            placeholder="primer@mail.123"
            class="userText"
          />
        </label>
      </span>
      <span class="form">
        <label>
          Введите пароль:
          <input
            type="password"
            class="userText"
          />
        </label>
      </span>
      <span class="form">
        <label>
          Подтвердите пароль:
          <input
            type="password"
            class="userText"
          />
        </label>
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
// import { validationMixin } from 'vuelidate'
// import { required, sameAs, minLength } from 'vuelidate/lib/validators'
// import { email, required, minLength } from '@vuelidate/validators'

export default {
  // mixins: [validationMixin],
  name: 'chekIn',
  // data: () => ({
  //   // return {}
  //   $v: {
  //     rootObjectKey: '$v',
  //     maxDepth: 2
  //   },
  //   rootObjectKey: '$v',
  //   password: '',
  //   repeatPassword: ''
  // }),
  data: () => ({}),
  methods: {
    // validations: {
    //   password: {
    //     required,
    //     minLength: minLength(6)
    //   },
    //   repeatPassword: {
    //     sameAsPassword: sameAs('password')
    //   }
    // },
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
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    margin: 15px auto;
    padding: 10px;
    width: 20vw;
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
