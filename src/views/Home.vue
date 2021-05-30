<template>
  <div class="bodyHome">
    <header class="header"></header>
    <main class="main">
      <div class="itsMe">
        <img src="../views/@/assets/images/myPhoto.jpg" alt="" class="logo">
        <h2 class="muFullName myName">Даниил</h2>
        <h2 class="muFullName mySurName">Должанский</h2>
      </div>
      <div class="summary">
        <div class="aboutMe">
          <h3 class="headers">Интересует</h3>
          <ul class="info">
            <li>Должность: Front-End разработчик</li>
            <li>З/П (на руки): ~550$</li>
            <li>Работа в офисе</li>
            <li>График: гибкий, полная занятость</li>
          </ul>
        </div>
        <div class="aboutMe">
          <h3 class="headers"></h3>
          <p class="info"></p>
        </div>
        <div class="aboutMe" id="AM3">
          <h3 class="headers"></h3>
          <p class="info"></p>
        </div>
        <div class="aboutMe">
          <h3 class="headers"></h3>
          <p class="info"></p>
        </div>
        <div class="aboutMe">
          <h3 class="headers"></h3>
          <p class="info"></p>
        </div>
      </div>
    </main>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({}),
  mounted () {
  },
  methods: {},
  components: {}
}
</script>

<style lang="less">
@background: rgba(108, 192, 139, 0.75);
@shadow: rgba(54, 97, 70, 0.5);
@color: rgba(116, 40, 24, 1);

.bodyHome {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 90px auto 20px;
  width: 90vw;
  height: 110vh;

  .main {
    position: relative;
    margin: auto;
    padding: 10px;
    width: 70vw;
    border-radius: 7px;
    background-image: url("@/assets/images/bg_1.jpg");
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

    .itsMe {
      position: absolute;
      margin-top: -60px;
      display: grid;
      grid-template-rows: 50px 50px;
      grid-template-columns: 100px 200px;
      column-gap: 30px;
      -moz-column-gap: 30px;
      background-image: url("@/assets/images/bg_0.png");
      border-radius: 50px 7px 7px 50px;
      padding: 0 10px 0 0;
      box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.5);

      .logo {
        display: block;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        grid-row-start: 1;
        grid-row-end: 3;
        grid-column-start: 1;
        grid-column-end: 2;
      }

      .muFullName {
        width: 200px;
        height: fit-content;
      }

      .myName {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
        text-align: left;
      }

      .mySurName {
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 2;
        grid-column-end: 3;
        text-align: right;
      }
    }

    .summary {
      margin-top: 50px;
      min-height: calc(100vh - 200px);
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-column-gap: 15px;
      grid-row-gap: 15px;

      .aboutMe {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 60px auto;
        background-image: url("@/assets/images/bg_0.png");
        border-radius: 2rem;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);

        .headers {
          margin: auto 0;
        }

        .info {
          margin: 0;
          text-align: left!important;
        }
      }
      #AM3 {
        grid-row-start: 2;
        grid-row-end: 4;
      }
    }
  }

  .footer {
  }
}

@media screen and (max-width: 1366px) {
  .bodyHome {
    margin: 0 auto !important;
    height: calc(100vh - 50px) !important;

    .itsMe {
      grid-template-columns: 100px 150px;
      column-gap: 20px !important;
      -moz-column-gap: 20px !important;

      .muFullName {
        width: 150px;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .bodyHome {
    .itsMe {
      grid-template-columns: 100px 125px;
      column-gap: 15px !important;

      .myFullName {
        width: 125px;
      }
    }
  }
}

@media screen and (max-width: 813px) {
  .bodyHome {
    .itsMe {
      grid-template-rows: 45px 45px !important;
      grid-template-columns: 90px 140px !important;
      column-gap: 10px;
      border-radius: 45px 7px 7px 45px !important;

      .logo {
        width: 90px !important;
        height: 90px !important;
      }

      .myName,
      .mySurName {
        width: 100px !important;
      }
    }
  }
}

@media screen and (max-width: 360px) {
  .bodyHome {
    .itsMe {
      //grid-template-rows: 39px 39px !important;
      grid-column-gap: 5px !important;

      .logo {
        margin: auto;
        width: 76px !important;
        height: 76px !important;
      }

      .mySurName,
      .myName {
        width: 90px !important;
      }
    }
  }
}
</style>
