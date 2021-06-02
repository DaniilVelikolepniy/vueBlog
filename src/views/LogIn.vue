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
      <form class="form">
        <span class="formItem">
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
        <span class="formItem">
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
          <i class="linkToRecovery" v-on:click="goToRecovery">
            Забыли пароль?
          </i>
        </span>
        <span class="formItem">
          <label>
            <input
              type="checkbox"
            />
            запомнить меня
          </label>
        </span>
        <span class="formItem">
          <label>
            <input
              v-on:click="LogIn"
              type="button"
              value="Войти"
              class="button"
            />
          </label>
        </span>
      </form>
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
    email: '',
    widthFormForMobile: ''
  }),
  methods: {
    // mobileForForm () {
    //   const dinWidth = document.documentElement.clientWidth
    //   if (dinWidth < 1366) {
    //     const headerWidth = document.querySelector('.header')
    //     if (headerWidth.clientWidth) {
    //       document.querySelector('.main').style.width = 'headerWidth!important'
    //       document.querySelector('.form').style.width = 'headerWidth!important'
    //     }
    //   }
    // },
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
  grid-template-columns: 1fr;
  grid-template-rows: 120px calc(100vh - 120px);
  width: 90vw;
  height: 100vh;

  .header {
    display: grid;
    grid-template-columns: 70px 20px 150px;
    margin: 30px auto;
    padding: 5px;
    border-radius: 1em;
    color: @color;
    background-image: url("../../public/images/bg_1.jpg");
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
    margin: 15px auto;
    padding: 10px;

    .form {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 80px 80px 25px 40px 80px;
      padding: 0 10px;
      background-image: url("../../public/images/bg_1.jpg");
      border-radius: 25px;
      box-shadow: 5px 5px 35px black;

      .formItem {
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
          min-width: 150px;
          height: 25px;
          border: solid 1px @color;
          border-radius: 5px;
        }
      }
    }

    .recoverLink {
      display: block;

      .linkToRecovery {
        color: blue;
        text-decoration: underline;
        margin: 0;
      }
    }
  }
}

@media screen and (max-width: 1366px) {
  .bodyLogIn {
    margin: 0 auto !important;
    height: calc(100vh - 50px) !important;

    .main {
      height: fit-content !important;

      .form {
        min-width: 250px !important;
      }
    }
  }
}
</style>
