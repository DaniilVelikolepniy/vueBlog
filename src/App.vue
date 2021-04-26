<template>
  <div class="nav">
    <router-link v-bind:to="{name: 'LogIn'}" class="link">
      <p v-if="this.$store.state.user.loggedIn" @click="this.$store.commit('SET_LOGGED_IN', false)">Выход</p>
      <p v-else>Вход</p>
    </router-link>
    <router-link to="/" class="link">Картинки</router-link>
  </div>
  <router-view class="routerView"/>
</template>

<style lang="less">
@background: rgba(108, 192, 139, 0.75);
@shadow: rgba(54, 97, 70, 0.5);
@color: rgba(116, 40, 24, 1);

body {
  margin: 0;

  #app {
    //display: inline-block;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -khtml-user-select: none; /* Konqueror */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    min-height: 100vh;
    width: 100vw;
    background-image: url("assets/kirpitch.png");

    .nav {
      display: grid;
      width: 10vw;
      grid-template-rows: 30px 30px;
      height: 100vh;
      float: left;
      background-image: url("assets/bg_1.jpg");
      box-shadow: 0 2px 15px black;

      .link {
        display: block;
        margin: 15px auto auto auto;
        //height: fit-content;
        text-decoration: none;
        font-weight: bold;
        color: @color;
        text-shadow: 10px 10px 5px @shadow;

        p {
          margin: 0;
        }
      }

      .link:hover {
        text-shadow: 1px 1px 12px rgba(68, 28, 28, 0.75);
        transition: all 1s ease;
      }
    }

    .routerView {
      float: left;
      height: calc(100vh - 70px);
      overflow-y: auto;
    }
  }
}

@media screen and (max-width: 1366px) {
  #app {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 70px calc(100vh - 70px);

    .nav {
      display: flex!important;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 100vw!important;
      height: 50px!important;

      .link {
        margin: auto!important;
      }

      .routerView {
        float: none!important;
      }
    }
  }
}
</style>
