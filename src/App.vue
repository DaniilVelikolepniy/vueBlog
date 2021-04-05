<template>
  <div id="nav">
    <div class="UserInformation">
      <img src="@/assets/images/people/_4_.jpg" alt="">
      <p>
        UserName
      </p>
    </div>
    <nav class="menu">
      <router-link to="/">Картинки</router-link>
      <router-link to="/LogIn">Вход</router-link>
    </nav>
  </div>
  <router-view/>
</template>

<style lang="less">
@background: rgba(108, 192, 139, 0.75);
@shadow: rgba(54, 97, 70, 0.5);
@color: rgba(116, 40, 24, 1);

body {
  margin: 0;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none;   /* Chrome/Safari/Opera */
  -khtml-user-select: none;    /* Konqueror */
  -moz-user-select: none;      /* Firefox */
  -ms-user-select: none;       /* Internet Explorer/Edge */

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    min-height: 100vh;
    background-image: url("assets/kirpitch.png");

    #nav {
      display: grid;
      width: 12vw;
      grid-template-rows: 25vh 75vh;
      background-image: url("assets/bg_1.jpg");
      box-shadow: 0 2px 15px black;

      .UserInformation {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 90px 50px;
        margin: auto 0;
        img {
          display: block;
          margin: auto;
          border-radius: 5em;
          width: 90px;
          height: 90px;
        }
      }

      .menu {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 50px 50px;

        a {
          text-decoration: none;
          font-weight: bold;
          color: @color;
          text-shadow: 10px 10px 5px @shadow;

          //&.router-link-exact-active {
          //
          //}
        }

        a:hover {
          text-shadow: 1px 1px 12px rgba(68, 28, 28, 0.75);
          transition: all 1s ease;
        }
      }
    }
  }
}
</style>
