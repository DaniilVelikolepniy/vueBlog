<template>
  <div class="bodyLogIn">
    <header class="header">
      <h2>Вход</h2>
      <h2>&#160;/&#8194;</h2>
      <h2
        class="router"
        v-on:click="goToChekIn">
        Регистрация
      </h2>
    </header>
    <div class="main">
      <span class="form">
        <label>
          Введите e-mail:
            <input
              v-model="email"
              type="text"
              placeholder="primer@123.ru"
              class="userText"
            />
          </label>
      </span>
      <span class="form">
        <label>
          Введите пароль:
          <input
            v-model="pass"
            type="password"
            class="userText"
          />
        </label>
      </span>
      <span class="recoverLink">
        <label v-on:click="goToRecovery">
          Забыли пароль?
        </label>
      </span>
      <span class="form">
        <label>
          <input
            type="checkbox"
          />
          запомнить меня
        </label>
      </span>
      <span class="form">
        <label>
          <input
            v-on:click="LogIn"
            type="button"
            value="Войти"
            class="button"
          />
        </label>
      </span>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
  name: 'LogIn',
  data: () => ({
    // logIn: '',
    pass: '',
    email: ''
  }),
  methods: {
    validate (email) {
      console.log(email)
      const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      return re.test(String(email).toLowerCase())
    },
    LogIn () {
      const isValidEmail = this.validate(this.email)
      if (isValidEmail) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.pass)
          .then(data => {
            this.$store.commit('SET_LOGGED_IN', true)
            this.$store.commit('SET_USER', data)
            this.$router.push({ name: 'image' })
            console.log(data.user)
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        alert('Ошибка в наисании e-mail')
      }
    },
    goToChekIn () {
      this.$router.push({ name: 'chekIn' })
    },
    goToRecovery () {
      this.$router.push({ name: 'recovery' })
    }
  }
}
</script>

<style lang="less">
@background: rgba(108, 192, 139, 0.75);
@shadow: rgba(54, 97, 70, 0.5);
@color: rgba(116, 40, 24, 1);

.bodyLogIn {
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
    grid-template-rows: 80px 80px 25px 40px 80px;
    margin: 15px auto;
    width: 20vw;
    padding: 10px;
    height: auto;
    background-image: url("../assets/bg_1.jpg");
    border-radius: 25px;
    box-shadow: 5px 5px 35px black;

    .form {
      display: block;
      margin: 15px auto;
      font-size: 18px;
      color: @color;
      text-shadow: 5px 5px 2px @shadow;

      .button {
        display: block;
        margin: auto;
        height: 45px;
        width: 65px;
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

    .recoverLink {
      display: block;

      p {
        color: blue;
        text-decoration: underline;
        margin: 0;
      }
    }
  }
}
</style>
