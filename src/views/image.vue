<template>
  <div class="home">
    <pre style="background-color: white; font-size: 1.2em; height: 100vh">
      {{ this.$store.state.user }}
    </pre>
    <h1 class="header">Картинки</h1>
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
        <img src="@/assets/images/mountains/0.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/1.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/2.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/3.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/4.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/5.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/6.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/7.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/8.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/9.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/10.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/11.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/12.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/13.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/14.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/15.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/16.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/17.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/18.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/19.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/20.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/21.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/22.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/23.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/24.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/25.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/26.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/27.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/28.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/29.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/30.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/31.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/32.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/33.jpg" alt="" class="images">
        <img src="@/assets/images/mountains/34.jpg" alt="" class="images">
      </div>
      <div class="bodyTab" id="tab2">
        <img src="@/assets/images/landscapes/0.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/1.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/2.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/3.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/4.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/5.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/6.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/7.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/8.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/9.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/10.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/11.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/12.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/13.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/14.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/15.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/16.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/17.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/18.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/19.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/20.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/21.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/22.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/23.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/24.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/25.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/26.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/27.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/28.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/29.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/30.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/31.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/32.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/33.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/34.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/35.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/36.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/37.jpg" alt="" class="images">
        <img src="@/assets/images/landscapes/38.jpg" alt="" class="images">
      </div>
      <div class="bodyTab" id="tab3">
        <img src="@/assets/images/sea/0.jpg" alt="" class="images">
        <img src="@/assets/images/sea/1.jpg" alt="" class="images">
        <img src="@/assets/images/sea/2.jpg" alt="" class="images">
        <img src="@/assets/images/sea/3.jpg" alt="" class="images">
        <img src="@/assets/images/sea/4.jpg" alt="" class="images">
        <img src="@/assets/images/sea/5.jpg" alt="" class="images">
        <img src="@/assets/images/sea/6.jpg" alt="" class="images">
        <img src="@/assets/images/sea/7.jpg" alt="" class="images">
        <img src="@/assets/images/sea/8.jpg" alt="" class="images">
        <img src="@/assets/images/sea/9.jpg" alt="" class="images">
        <img src="@/assets/images/sea/10.jpg" alt="" class="images">
        <img src="@/assets/images/sea/11.jpg" alt="" class="images">
        <img src="@/assets/images/sea/12.jpg" alt="" class="images">
        <img src="@/assets/images/sea/13.jpg" alt="" class="images">
        <img src="@/assets/images/sea/14.jpg" alt="" class="images">
        <img src="@/assets/images/sea/15.jpg" alt="" class="images">
        <img src="@/assets/images/sea/16.jpg" alt="" class="images">
        <img src="@/assets/images/sea/17.jpg" alt="" class="images">
        <img src="@/assets/images/sea/18.jpg" alt="" class="images">
        <img src="@/assets/images/sea/19.jpg" alt="" class="images">
        <img src="@/assets/images/sea/20.jpg" alt="" class="images">
        <img src="@/assets/images/sea/21.jpg" alt="" class="images">
        <img src="@/assets/images/sea/22.jpg" alt="" class="images">
        <img src="@/assets/images/sea/23.jpg" alt="" class="images">
        <img src="@/assets/images/sea/24.jpg" alt="" class="images">
        <img src="@/assets/images/sea/25.jpg" alt="" class="images">
      </div>
      <div class="bodyTab" id="tab4">
        <img src="@/assets/images/animals/0.jpg" alt="" class="images">
        <img src="@/assets/images/animals/1.jpg" alt="" class="images">
        <img src="@/assets/images/animals/2.jpg" alt="" class="images">
        <img src="@/assets/images/animals/3.jpg" alt="" class="images">
        <img src="@/assets/images/animals/4.jpg" alt="" class="images">
        <img src="@/assets/images/animals/5.jpg" alt="" class="images">
        <img src="@/assets/images/animals/6.jpg" alt="" class="images">
        <img src="@/assets/images/animals/7.jpg" alt="" class="images">
        <img src="@/assets/images/animals/8.jpg" alt="" class="images">
        <img src="@/assets/images/animals/9.jpg" alt="" class="images">
        <img src="@/assets/images/animals/10.jpg" alt="" class="images">
        <img src="@/assets/images/animals/11.jpg" alt="" class="images">
        <img src="@/assets/images/animals/12.jpg" alt="" class="images">
        <img src="@/assets/images/animals/13.jpg" alt="" class="images">
        <img src="@/assets/images/animals/14.jpg" alt="" class="images">
        <img src="@/assets/images/animals/15.jpg" alt="" class="images">
        <img src="@/assets/images/animals/16.jpg" alt="" class="images">
        <img src="@/assets/images/animals/17.jpg" alt="" class="images">
        <img src="@/assets/images/animals/18.jpg" alt="" class="images">
        <img src="@/assets/images/animals/19.jpg" alt="" class="images">
        <img src="@/assets/images/animals/20.jpg" alt="" class="images">
        <img src="@/assets/images/animals/21.jpg" alt="" class="images">
        <img src="@/assets/images/animals/22.jpg" alt="" class="images">
        <img src="@/assets/images/animals/23.jpg" alt="" class="images">
        <img src="@/assets/images/animals/24.jpg" alt="" class="images">
        <img src="@/assets/images/animals/25.jpg" alt="" class="images">
        <img src="@/assets/images/animals/26.jpg" alt="" class="images">
        <img src="@/assets/images/animals/27.jpg" alt="" class="images">
        <img src="@/assets/images/animals/28.jpg" alt="" class="images">
        <img src="@/assets/images/animals/29.jpg" alt="" class="images">
      </div>
      <div class="bodyTab" id="tab5">
        <img src="@/assets/images/cristmas/0.jpg" alt="" class="images">
        <img src="@/assets/images/cristmas/1.jpg" alt="" class="images">
        <img src="@/assets/images/cristmas/2.jpg" alt="" class="images">
        <img src="@/assets/images/cristmas/3.jpg" alt="" class="images">
        <img src="@/assets/images/cristmas/4.jpg" alt="" class="images">
        <img src="@/assets/images/cristmas/5.png" alt="" class="images">
        <img src="@/assets/images/cristmas/6.jpg" alt="" class="images">
        <img src="@/assets/images/cristmas/7.jpg" alt="" class="images">
        <img src="@/assets/images/cristmas/8.jpg" alt="" class="images">
        <img src="@/assets/images/cristmas/9.jpg" alt="" class="images">
        <img src="@/assets/images/cristmas/10.jpg" alt="" class="images">
        <img src="@/assets/images/cristmas/11.jpg" alt="" class="images">
        <img src="@/assets/images/cristmas/12.jpg" alt="" class="images">
        <img src="@/assets/images/cristmas/13.jpg" alt="" class="images">
        <img src="@/assets/images/cristmas/14.jpg" alt="" class="images">
        <img src="@/assets/images/cristmas/15.jpg" alt="" class="images">
        <img src="@/assets/images/cristmas/16.jpg" alt="" class="images">
        <img src="@/assets/images/cristmas/17.jpg" alt="" class="images">
        <img src="@/assets/images/cristmas/18.jpg" alt="" class="images">
        <img src="@/assets/images/cristmas/19.jpg" alt="" class="images">
        <img src="@/assets/images/cristmas/20.jpg" alt="" class="images">
        <img src="@/assets/images/cristmas/21.jpg" alt="" class="images">
        <img src="@/assets/images/cristmas/22.jpg" alt="" class="images">
        <img src="@/assets/images/cristmas/23.jpg" alt="" class="images">
        <img src="@/assets/images/cristmas/24.jpg" alt="" class="images">
        <img src="@/assets/images/cristmas/25.jpg" alt="" class="images">
      </div>
      <div class="bodyTab" id="tab6">
        <img src="@/assets/images/towns/0.jpg" alt="" class="images">
        <img src="@/assets/images/towns/1.jpg" alt="" class="images">
        <img src="@/assets/images/towns/2.jpg" alt="" class="images">
        <img src="@/assets/images/towns/3.jpg" alt="" class="images">
        <img src="@/assets/images/towns/4.jpg" alt="" class="images">
        <img src="@/assets/images/towns/5.jpg" alt="" class="images">
        <img src="@/assets/images/towns/6.jpg" alt="" class="images">
        <img src="@/assets/images/towns/7.jpg" alt="" class="images">
        <img src="@/assets/images/towns/8.jpg" alt="" class="images">
        <img src="@/assets/images/towns/9.jpg" alt="" class="images">
        <img src="@/assets/images/towns/10.jpg" alt="" class="images">
        <img src="@/assets/images/towns/11.jpg" alt="" class="images">
        <img src="@/assets/images/towns/12.jpg" alt="" class="images">
        <img src="@/assets/images/towns/13.jpg" alt="" class="images">
        <img src="@/assets/images/towns/14.jpg" alt="" class="images">
        <img src="@/assets/images/towns/15.jpg" alt="" class="images">
        <img src="@/assets/images/towns/16.jpg" alt="" class="images">
        <img src="@/assets/images/towns/17.jpg" alt="" class="images">
        <img src="@/assets/images/towns/18.jpg" alt="" class="images">
        <img src="@/assets/images/towns/19.jpg" alt="" class="images">
        <img src="@/assets/images/towns/20.jpg" alt="" class="images">
        <img src="@/assets/images/towns/21.jpg" alt="" class="images">
        <img src="@/assets/images/towns/22.jpg" alt="" class="images">
        <img src="@/assets/images/towns/23.jpg" alt="" class="images">
        <img src="@/assets/images/towns/24.jpg" alt="" class="images">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
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

.home {
  display: grid;
  margin: -100vh auto auto 14vw;
  grid-template-columns: 85vw;
  grid-template-rows: 10vh 10vh 60vh;
  //row-gap: 5vh;
  color: @color;

  .header {
    display: block;
    margin: 15px auto;
    padding: 5px;
    height: fit-content;
    width: fit-content!important;
    border-radius: 15px;
    box-shadow: 5px 5px 35px black;
    color: @color;
    background-image: url("../assets/bg_1.jpg");
  }

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
</style>
