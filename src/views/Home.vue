<template>
  <div class="bodyHome">
    <header class="header"></header>
    <main class="main">
      <div class="itsMe">
        <img src="../views/@/assets/images/animals/22.jpg" alt="" class="logo">
        <h2 class="muFullName myName">Даниил</h2>
        <h2 class="muFullName mySurName">Должанский</h2>
      </div>
      <div class="summary">
        <div class="infoBlock">
          <h3 class="infoBlockName">
            Первый блок
          </h3>
          <div class="infoBlockText">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div class="infoBlock">
          <h3 class="infoBlockName">
            Второй блок
          </h3>
          <div class="infoBlockText">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div class="infoBlock">
          <h3 class="infoBlockName">
            Третий блок
          </h3>
          <div class="infoBlockText">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div class="infoBlock">
          <h3 class="infoBlockName">
            Четвёртый блок
          </h3>
          <div class="infoBlockText">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div class="infoBlock">
          <h3 class="infoBlockName">
            Пятый блок
          </h3>
          <div class="infoBlockText">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div class="infoBlock">
          <h3 class="infoBlockName">
            Шестой блок
          </h3>
          <div class="infoBlockText">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div class="infoBlock">
          <h3 class="infoBlockName">
            Седьмой блок
          </h3>
          <div class="infoBlockText">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div class="infoBlock">
          <h3 class="infoBlockName">
            Восьмой блок
          </h3>
          <div class="infoBlockText">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div class="infoBlock">
          <h3 class="infoBlockName">
            Девятый блок
          </h3>
          <div class="infoBlockText">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
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

  .header {
    border-radius: 5rem;
  }

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
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: space-between;
      margin: 50px auto auto auto;

      .infoBlock {
        margin: auto auto 15px auto;
        width: 60vw;
        border: solid 1px black;
        border-radius: 25px;
      }
    }
  }

  .footer {}
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
      grid-template-columns: 90px 100px !important;
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
