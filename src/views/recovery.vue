<template>
  <div class="bodyRecovery ">
    <h1 class="header">Восстановление пароля</h1>
    <main class="main">
      <span class="form">
        <label>
          Введите e-mail:<br>
          <input
            type="text"
            class="userText"
            placeholder="primer@123.ru"
          />
        </label>
      </span>
      <span class="form">
        <label>
          <input
            v-on:click="reestablish"
            type="button"
            value="Восстановить"
            class="button"
          />
        </label>
      </span>
    </main>
  </div>
</template>

<script>
export default {
  name: 'recovery',
  data: () => ({}),
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
  grid-template-rows: 1fr 9fr;
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
    display: block;
    margin: 15px auto auto auto;
    width: 30vw;
    height: auto;
    background-image: url("../assets/bg_1.jpg");
    border-radius: 25px;
    box-shadow: 5px 5px 35px black;

    .form {
      display: block;
      margin: 15px auto;
      font-size: 18px;
      color: @color;

      .button {
        display: block;
        margin: auto;
        height: 45px;
        width: 140px;
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
