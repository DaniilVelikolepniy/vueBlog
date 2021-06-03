<template>
  <div class="bodyHome">
    <header class="header"></header>
    <main class="main">
      <div class="itsMe">
        <img src="../../public/images/images/myPhoto.jpg" alt="" class="logo">
        <h2 class="muFullName myName">Даниил</h2>
        <h2 class="muFullName mySurName">Должанский</h2>
      </div>
      <div class="summary">
        <div class="aboutMe">
          <h3 class="headers">
            Навыки
          </h3>
          <ul class="info">
            <li>HTML5 CSS3 (less)</li>
            <li>JavaScript</li>
            <li>Ajax</li>
            <li>
              Vue.js (vuex, vulidate, axios, tailwind, customComponents,
              vue-router (chank))
            </li>
            <li>Опыт работы с GIT</li>
            <li>Адаптивная и кроссбраузерная вёрстка</li>
            <li>Принципы разработки мобильных версий</li>
            <li>Принципы семантической вёрстки</li>
          </ul>
        </div>
        <div class="aboutMe">
          <h3 class="headers">Интересует</h3>
          <ul class="info">
            <li>Должность: Front-End разработчик</li>
            <li>З/П (на руки): ~550$</li>
            <li>Работа в офисе</li>
            <li>График: гибкий, полная занятость</li>
          </ul>
        </div>
        <div class="aboutMe" id="AM3">
          <h3 class="headers">
            Опыт работы
          </h3>
          <div class="AM3Info">
            <div class="info infoBlock">
              <p class="nameOfCompany">
                <b>ООО "Мега-Комфорт"</b>, Москва -
                <i>менеджер отдела технического обеспечения</i>
              </p>
              <p class="time">
                6 ноября 2019 – НАСТОЯЩЕЕ ВРЕМЯ
              </p>
              <p>
                Ведение групп в социальных сетях, ведение рекламных кампаний,
                развёртывание фреймворка на хостинге под интернет-магазин, подключение и
                настройка плагинов к интернет-магазину, вёрстка
                отдельных блоков сайтов, взаимодействие с
                тех.поддержкой хостинг-провайдера, подключение
                SSL-сертификатов сайту, введение администравтивной
                информации на сайт.
              </p>
            </div>
            <div class="info infoBlock">
              <p class="nameOfCompany">
                <b>ООО "НИИАС-Старград"</b>, Москва -
                <i>инженер по оборудованию, контент-менеджер</i>
              </p>
              <p class="time">
                21 ноября 2016 – 5 ноября 2019
              </p>
              <p>
                Закупка, подключение и поддержка офисного оборудования,
                работа с товарными позициями, взаимодействие с поставщиками, ведение складских остатков.
              </p>
            </div>
            <div class="info infoBlock">
              <p class="nameOfCompany">
                <b>ООО "НИИАС-Старград"</b>, Остров-3, Ужур -
                <i>служба в армии.</i>
              </p>
              <p class="time">
                13 ноября 2015 – 21 ноября 2016
              </p>
              <p></p>
            </div>
            <div class="info infoBlock">
              <p class="nameOfCompany">
                <b>ООО "НИИАС-Старград"</b>, Москва -
                <i>ведущий менеджер</i>
              </p>
              <p class="time">
                2 февраля 2015 – 13 ноябрь 2015
              </p>
              <p>
                Консультация клиентов, прием и сопровождение
                заказов, ведение статистики заказов, коррекция
                товарных позиций в рамках изменения цен и
                коррекции характеристик товаров.
              </p>
            </div>
          </div>
        </div>
        <address class="aboutMe">
          <h3 class="headers">
            Личная информация
          </h3>
          <ul class="info">
            <li>Дата рождения: 06.04.1995 (26 лет)</li>
            <li>Адрес: Москва, Россия, 129343</li>
            <li>Телефон: <a href="tel:89162559129">8(916)255-91-29</a></li>
            <li>Почта: daniladoljaskiy@gmail.com</li>
          </ul>
        </address>
        <div class="aboutMe">
          <h3 class="headers">
            Проекты:
          </h3>
          <ol class="info">
            <li>Сайт портфолио</li>
            <li>Сайт для школы танцев</li>
          </ol>
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
  grid-template-rows: 85px auto 20px;
  width: 90vw;
  height: 110vh;

  .main {
    position: relative;
    margin: auto;
    padding: 10px;
    width: 70vw;
    border-radius: 7px;
    background-image: url("../../public/images/bg_1.jpg");
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

    .itsMe {
      position: absolute;
      margin-top: -60px;
      display: grid;
      grid-template-rows: 50px 50px;
      grid-template-columns: 100px 200px;
      column-gap: 30px;
      -moz-column-gap: 30px;
      background-image: url("../../public/images/bg_0.png");
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
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-column-gap: 15px;
      grid-row-gap: 15px;

      .aboutMe {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 60px auto;
        background-image: url("../../public/images/bg_0.png");
        border-radius: 2rem;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);

        .headers {
          margin: auto 0;
        }

        .info {
          margin: 0;
          text-align: left !important;
        }

        .AM3Info {
          margin: 0 7px;
          padding-right: 2px;
          height: 375px;
          overflow-y: scroll;

          .nameOfCompany {
            margin-bottom: 2px;
          }

          .time {
            margin: 0;
            font-size: 0.8pc;
            color: grey;
          }
        }

        ::-webkit-scrollbar {
          width: 5px;
        }

        ::-webkit-scrollbar-track {
          box-shadow: inset 0 0 5px grey;
          border-radius: 10px;
          margin-right: 5px !important;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(128, 128, 128, 0.5);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(128, 128, 128, 0.7);
        }

        .infoBlock {
          margin: 12px auto;
          padding: 2px;
          border-radius: 5px;
          border-top: solid 1px black;
          border-bottom: solid 1px black;
          background-color: rgba(0, 0, 255, 0.07);
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

    .main {
      margin-top: 0;

      #AM3 {
        height: 600px;

        .AM3Info {
          height: 500px;
        }
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

    .main {
      padding-left: 25px;
      padding-right: 25px;

      .summary {
        display: grid;
        grid-template-columns: 1fr !important;
        grid-template-rows: auto;

        .aboutMe:last-child {
          padding-bottom: 10px;
        }
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
