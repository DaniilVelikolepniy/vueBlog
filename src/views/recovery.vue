<template xmlns:v-bind="http://www.w3.org/1999/html">
  <div class="bodyRecovery">
    <h2 class="header">Восстановление пароля</h2>
    <main class="main">
      <form class="form">
      <span class="formItem">
        <label>
          Введите e-mail:<br>
          <input
            v-model.trim="valName"
            @input="v$.$touch()"
            type="email"
            class="userText"
            placeholder="primer@123.ru"
          />
        </label>
      </span>
        <span class="formItem">
        <label class="buttonParent">
          <input
            v-on:click="reestablish"
            type="button"
            value="Восстановить"
            class="button"
          />
        </label>
      </span>
      </form>
    </main>
  </div>
</template>

<script>
// import { useVuelidate } from '@vuelidate/core'
// import { email, required } from '@vuelidate/validators'

export default {
  name: 'recovery',
  data: () => ({
    email: ''
  }),
  methods: {
    reestablish () {
      this.$router.push({ name: 'LogIn' })
    }
  }
}
</script>

<style lang="less">
@background: rgba(108, 192, 139, 0.75);
@shadow: rgba(54, 97, 70, 0.5);
@color: rgba(116, 40, 24, 1);

.bodyRecovery {
  display: grid;
  grid-template-rows: 70px calc(100vh - 70px);
  width: 90vw;
  margin: -100vh 0 0 10vw;

  .header {
    display: block;
    margin: 15px auto;
    padding: 5px;
    width: fit-content;
    border-radius: 15px;
    box-shadow: 5px 5px 35px black;
    color: @color;
    background-image: url("../assets/bg_1.jpg");
  }

  .main {
    margin: 15px auto;
    padding: 10px;
    height: fit-content;

    .form {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 60px 60px;
      padding: 0 10px 10px 10px;
      background-image: url("../assets/bg_1.jpg");
      border-radius: 25px;
      box-shadow: 5px 5px 35px black;

      .formItem {
        display: block;
        margin: 15px auto;
        font-size: 18px;
        color: @color;
        text-shadow: 5px 5px 2px @shadow;

        .buttonParent {

          .button {
            display: block;
            margin: auto;
            height: 45px;
            min-width: 140px;
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
  .bodyRecovery {
    margin: auto !important;
    height: calc(100vh - 90px) !important;
  }
}
</style>
