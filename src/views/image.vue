<template>
  <div class="imageBody">
    <!--    <pre style="background-color: white; font-size: 1.2em; height: 100vh">-->
    <!--      {{ this.$store.state.user }}-->
    <!--    </pre>-->
    <h1 class="header">Изображения</h1>
    <div class="tabs">
      <div class="tabButtons">
        <label class="tabButton" for="tab1" v-on:click="Swith('tab1')">Горы</label>
        <label class="tabButton" for="tab2" v-on:click="Swith('tab2')">Пейзажи</label>
        <label class="tabButton" for="tab3" v-on:click="Swith('tab3')">Море</label>
        <label class="tabButton" for="tab4" v-on:click="Swith('tab4')">Животные</label>
        <label class="tabButton" for="tab5" v-on:click="Swith('tab5')">Новогодние</label>
        <label class="tabButton" for="tab6" v-on:click="Swith('tab6')">Города</label>
      </div>
      <div class="main">
        <div class="bodyTab" id="tab1">
          <img src="../../public/images/images/mountains/1.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/0.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/2.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/3.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/4.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/5.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/6.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/7.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/8.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/9.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/10.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/11.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/12.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/13.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/14.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/15.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/16.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/17.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/18.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/19.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/20.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/21.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/22.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/23.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/24.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/25.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/26.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/27.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/28.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/29.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/30.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/31.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/32.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/33.jpg" alt="" class="images">
          <img src="../../public/images/images/mountains/34.jpg" alt="" class="images">
        </div>
        <div class="bodyTab" id="tab2">
          <img src="../../public/images/images/landscapes/0.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/1.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/2.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/3.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/4.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/5.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/6.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/7.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/8.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/9.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/10.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/11.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/12.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/13.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/14.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/15.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/16.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/17.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/18.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/19.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/20.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/21.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/22.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/23.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/24.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/25.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/26.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/27.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/28.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/29.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/30.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/31.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/32.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/33.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/34.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/35.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/36.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/37.jpg" alt="" class="images">
          <img src="../../public/images/images/landscapes/38.jpg" alt="" class="images">
        </div>
        <div class="bodyTab" id="tab3">
          <img src="../../public/images/images/sea/0.jpg" alt="" class="images">
          <img src="../../public/images/images/sea/1.jpg" alt="" class="images">
          <img src="../../public/images/images/sea/2.jpg" alt="" class="images">
          <img src="../../public/images/images/sea/3.jpg" alt="" class="images">
          <img src="../../public/images/images/sea/4.jpg" alt="" class="images">
          <img src="../../public/images/images/sea/5.jpg" alt="" class="images">
          <img src="../../public/images/images/sea/6.jpg" alt="" class="images">
          <img src="../../public/images/images/sea/7.jpg" alt="" class="images">
          <img src="../../public/images/images/sea/8.jpg" alt="" class="images">
          <img src="../../public/images/images/sea/9.jpg" alt="" class="images">
          <img src="../../public/images/images/sea/10.jpg" alt="" class="images">
          <img src="../../public/images/images/sea/11.jpg" alt="" class="images">
          <img src="../../public/images/images/sea/12.jpg" alt="" class="images">
          <img src="../../public/images/images/sea/13.jpg" alt="" class="images">
          <img src="../../public/images/images/sea/14.jpg" alt="" class="images">
          <img src="../../public/images/images/sea/15.jpg" alt="" class="images">
          <img src="../../public/images/images/sea/16.jpg" alt="" class="images">
          <img src="../../public/images/images/sea/17.jpg" alt="" class="images">
          <img src="../../public/images/images/sea/18.jpg" alt="" class="images">
          <img src="../../public/images/images/sea/19.jpg" alt="" class="images">
          <img src="../../public/images/images/sea/20.jpg" alt="" class="images">
          <img src="../../public/images/images/sea/21.jpg" alt="" class="images">
          <img src="../../public/images/images/sea/22.jpg" alt="" class="images">
          <img src="../../public/images/images/sea/23.jpg" alt="" class="images">
          <img src="../../public/images/images/sea/24.jpg" alt="" class="images">
          <img src="../../public/images/images/sea/25.jpg" alt="" class="images">
        </div>
        <div class="bodyTab" id="tab4">
          <img src="../../public/images/images/animals/0.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/1.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/2.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/3.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/4.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/5.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/6.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/7.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/8.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/9.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/10.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/11.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/12.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/13.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/14.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/15.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/16.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/17.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/18.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/19.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/20.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/21.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/22.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/23.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/24.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/25.jpg" alt="" class="images">
          <img src="../../public/images/images/animals/26.jpg" alt="" class="images">
        </div>
        <div class="bodyTab" id="tab5">
          <img src="../../public/images/images/cristmas/0.jpg" alt="" class="images">
          <img src="../../public/images/images/cristmas/1.jpg" alt="" class="images">
          <img src="../../public/images/images/cristmas/2.jpg" alt="" class="images">
          <img src="../../public/images/images/cristmas/3.jpg" alt="" class="images">
          <img src="../../public/images/images/cristmas/4.jpg" alt="" class="images">
          <img src="../../public/images/images/cristmas/5.jpg" alt="" class="images">
          <img src="../../public/images/images/cristmas/6.jpg" alt="" class="images">
          <img src="../../public/images/images/cristmas/7.jpg" alt="" class="images">
          <img src="../../public/images/images/cristmas/8.jpg" alt="" class="images">
          <img src="../../public/images/images/cristmas/9.jpg" alt="" class="images">
          <img src="../../public/images/images/cristmas/10.jpg" alt="" class="images">
          <img src="../../public/images/images/cristmas/11.jpg" alt="" class="images">
          <img src="../../public/images/images/cristmas/12.jpg" alt="" class="images">
          <img src="../../public/images/images/cristmas/13.jpg" alt="" class="images">
          <img src="../../public/images/images/cristmas/14.jpg" alt="" class="images">
          <img src="../../public/images/images/cristmas/15.jpg" alt="" class="images">
          <img src="../../public/images/images/cristmas/16.jpg" alt="" class="images">
          <img src="../../public/images/images/cristmas/17.jpg" alt="" class="images">
          <img src="../../public/images/images/cristmas/18.jpg" alt="" class="images">
          <img src="../../public/images/images/cristmas/19.jpg" alt="" class="images">
          <img src="../../public/images/images/cristmas/20.jpg" alt="" class="images">
          <img src="../../public/images/images/cristmas/21.jpg" alt="" class="images">
          <img src="../../public/images/images/cristmas/22.jpg" alt="" class="images">
          <img src="../../public/images/images/cristmas/23.jpg" alt="" class="images">
          <img src="../../public/images/images/cristmas/24.jpg" alt="" class="images">
          <img src="../../public/images/images/cristmas/25.jpg" alt="" class="images">
        </div>
        <div class="bodyTab" id="tab6">
          <img src="../../public/images/images/towns/0.jpg" alt="" class="images">
          <img src="../../public/images/images/towns/1.jpg" alt="" class="images">
          <img src="../../public/images/images/towns/2.jpg" alt="" class="images">
          <img src="../../public/images/images/towns/3.jpg" alt="" class="images">
          <img src="../../public/images/images/towns/4.jpg" alt="" class="images">
          <img src="../../public/images/images/towns/5.jpg" alt="" class="images">
          <img src="../../public/images/images/towns/6.jpg" alt="" class="images">
          <img src="../../public/images/images/towns/7.jpg" alt="" class="images">
          <img src="../../public/images/images/towns/8.jpg" alt="" class="images">
          <img src="../../public/images/images/towns/9.jpg" alt="" class="images">
          <img src="../../public/images/images/towns/10.jpg" alt="" class="images">
          <img src="../../public/images/images/towns/11.jpg" alt="" class="images">
          <img src="../../public/images/images/towns/12.jpg" alt="" class="images">
          <img src="../../public/images/images/towns/13.jpg" alt="" class="images">
          <img src="../../public/images/images/towns/14.jpg" alt="" class="images">
          <img src="../../public/images/images/towns/15.jpg" alt="" class="images">
          <img src="../../public/images/images/towns/16.jpg" alt="" class="images">
          <img src="../../public/images/images/towns/17.jpg" alt="" class="images">
          <img src="../../public/images/images/towns/18.jpg" alt="" class="images">
          <img src="../../public/images/images/towns/19.jpg" alt="" class="images">
          <img src="../../public/images/images/towns/20.jpg" alt="" class="images">
          <img src="../../public/images/images/towns/21.jpg" alt="" class="images">
          <img src="../../public/images/images/towns/22.jpg" alt="" class="images">
          <img src="../../public/images/images/towns/23.jpg" alt="" class="images">
          <img src="../../public/images/images/towns/24.jpg" alt="" class="images">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'image',
  data: () => ({
    currentTab: ''
  }),
  mounted () {
    this.Swith('tab1')
  },
  methods: {
    Swith (event) {
      if (this.currentTab) document.getElementById(this.currentTab).style.display = 'none'
      document.getElementById(event).style.display = 'grid'
      this.currentTab = event
    }
  },
  components: {}
}
</script>

<style lang="less">
@background: rgba(108, 192, 139, 0.75);
@shadow: rgba(54, 97, 70, 0.5);
@color: rgba(116, 40, 24, 1);

.imageBody {
  display: grid;
  margin: -100vh auto auto 10vw;
  float: left;
  grid-template-columns: 90vw;
  grid-template-rows: 70px cacl(100% - 140px);
  //grid-row-gap: 7px;
  color: @color;

  .header {
    display: block;
    margin: auto;
    padding: 5px;
    height: fit-content;
    width: fit-content !important;
    border-radius: 15px;
    box-shadow: 5px 5px 35px black;
    color: @color;
    background-image: url("../../public/images/bg_1.jpg");
  }

  .tabs {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 70px auto;
    grid-row-gap: 5px;

    .tabButtons {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      margin: auto;
      width: 70vw;

      .tabButton {
        display: block;
        margin: 5px;
        width: 100px;
        height: 25px;
        padding: 5px 0 0 0;
        border-radius: 25px;
        background-color: @background;
        cursor: pointer;
        box-shadow: 3px 3px 9px @shadow;
      }

      .tabButton:hover {
        border-radius: 10px;
        box-shadow: none;
        transition: all 1s ease;
      }
    }

    .main {
      display: block;
      margin: auto;
      padding: 25px;
      width: 80vw;
      height: 60vh;
      border-radius: 2em;
      background-color: @background;
      box-shadow: 0 0 10px @shadow;

      .bodyTab {
        display: none;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-column-gap: 10px;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-row-gap: 10px;
        overflow-y: auto;
        margin: auto;
        width: 100%;
        height: 60vh;

        .images {
          display: block;
          margin: auto;
          width: 200px;
          height: 150px;
        }
      }
    }
  }
}

@media screen and (max-width: 1366px) {
  .imageBody {
    margin: 0 auto !important;
    height: calc(100vh - 50px)!important;
    grid-template-columns: 1fr;
    grid-template-rows: 70px calc(100vh - 70px);

    .header {
      display: none !important;
    }

    .tabs {
      .main {
        margin: 0 auto;

        .bodyTab {
          grid-template-columns: 1fr 1fr 1fr;

          .images {
            width: 190px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .imageBody {
    .header {
      box-shadow: 5px 5px 25px black;
    }

    .tabs {
      .main {
        .bodyTab {
          grid-template-columns: 1fr 1fr;
        }
      }
    }
  }
}

@media screen and (max-width: 748px) {
  .imageBody {
    .tabs {
      grid-template-rows: 120px calc(100vh - 100px);

      .main {
        .bodyTab {
          grid-template-columns: 1fr;
        }
      }
    }
  }
}
</style>
