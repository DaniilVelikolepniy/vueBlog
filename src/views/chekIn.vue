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
      <form class="form">
      <span class="formItem">
        <label>
          Введите логин:
          <input
            type="text"
            placeholder=""
            class="userText"
          />
        </label>
      </span>
        <span class="formItem">
        <label>
          Введите почту:
          <input
            v-model.trim.lazy="v$.form.email.$model"
            type="text"
            placeholder="primer@mail.123"
            class="userText"
          />
        </label>
        <i class="error" v-if="v$.form.email.required.$invalid">Введите почту</i>
        <i class="error" v-if="v$.form.email.email.$invalid">Вы опечатались указывая почту</i>
      </span>
        <span class="formItem">
        <label>
          Введите пароль:
          <input
            v-model.trim.lazy="v$.form.password.$model"
            type="password"
            class="userText"
          />
        </label>
        <i class="error" v-if="v$.form.password.required.$invalid">Вы не ввели пароль.</i>
        <i class="error" v-if="v$.form.password.minLength.$invalid">Пароль должен иметь минимум {{
            v$.form.password.minLength.$params.min
          }} символов.</i>
      </span>
        <span class="formItem">
        <label>
          Подтвердите пароль:
          <input
            v-model.trim.lazy="v$.form.repeatPassword.$model"
            type="password"
            class="userText"
          />
        </label>
        <i class="error" v-if="v$.form.repeatPassword.sameAs">Пароли должны совпадать.</i>
      </span>
        <span class="formItem">
        <label>
          Введите телефон:
          <input
            type="tel"
            class="userText"
            placeholder="8 (***) ***-**-**"
          />
        </label>
      </span>
        <span class="formItem">
        <label>
          <input
            v-on:click="checkIn"
            type="button"
            value="Зарегестрироваться"
            class="button"
          />
        </label>
      </span>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email, sameAs, minLength } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import firebase from 'firebase/app'

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
        email: {
          required,
          email
        },
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
    checkIn () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {
              this.$router.push({ name: 'LogIn' })
            })
        })
        .catch(err => {
          console.log(err)
        })
    },
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
  grid-template-columns: 1fr;
  grid-template-rows: 120px calc(100vh - 120px);
  width: 90vw;
  height: 100vh;
  //margin: 0 auto;

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
    margin: 15px auto;

    .form {
      display: grid;
      margin: auto;
      grid-template-columns: 1fr;
      grid-template-rows: 85px 85px 85px 85px 85px 85px;
      padding: 0 10px 15px 10px;
      background-image: url("../assets/bg_1.jpg");
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
          display: none;
          position: fixed;
          margin: -2.6% auto auto 8%;
          padding: 3px;
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
          border-radius: 5px;
          background-color: white;
          font-size: 16px;
          color: blue;
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
  }
}

@media screen and (max-width: 1366px) {
  .bodyChekIn {
    height: calc(100vh - 50px) !important;

    .main {
      height: fit-content !important;

      .form {
        min-width: 250px !important;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .bodyChekIn {
    grid-template-rows: 75px calc(100vh - 75px);

    .header {
      margin:  10px auto 10px auto !important;
    }

    .main {
      .form {
        grid-template-rows: 80px 80px 80px 80px 80px 80px;
      }
    }
  }
}

@media screen and (max-width: 568px) {
  .bodyChekIn {
    .main {
      .form {
        grid-template-rows: 65px 65px 65px 65px 65px 65px;
      }
    }
  }
}
</style>
