<template>
  <div class="home">
    <div class="tabButtons">
      <label class="tabButton" for="tab1" v-on:click="Swith('tab1')">Cats</label>
      <label class="tabButton" for="tab2" v-on:click="Swith('tab2')">Image Map</label>
      <label class="tabButton" for="tab3" v-on:click="Swith('tab3')">My page</label>
      <label class="tabButton" for="tab4" v-on:click="Swith('tab4')">User page</label>
    </div>
    <div class="main">
      <div class="bodyTab" id="tab1">
        <img src="@/assets/images/0.jpg" alt="" class="cats">
        <img src="@/assets/images/1.jpg" alt="" class="cats">
        <img src="@/assets/images/2.jpg" alt="" class="cats">
        <img src="@/assets/images/3.jpg" alt="" class="cats">
        <img src="@/assets/images/4.jpg" alt="" class="cats">
        <img src="@/assets/images/5.jpg" alt="" class="cats">
        <img src="@/assets/images/6.jpg" alt="" class="cats">
        <img src="@/assets/images/7.jpg" alt="" class="cats">
        <img src="@/assets/images/8.jpg" alt="" class="cats">
        <img src="@/assets/images/9.jpg" alt="" class="cats">
        <img src="@/assets/images/10.jpg" alt="" class="cats">
        <img src="@/assets/images/11.jpg" alt="" class="cats">
        <img src="@/assets/images/12.jpg" alt="" class="cats">
        <img src="@/assets/images/13.jpg" alt="" class="cats">
        <img src="@/assets/images/14.jpg" alt="" class="cats">
        <img src="@/assets/images/15.jpg" alt="" class="cats">
        <img src="@/assets/images/16.jpg" alt="" class="cats">
        <img src="@/assets/images/17.jpg" alt="" class="cats">
        <img src="@/assets/images/18.jpg" alt="" class="cats">
        <img src="@/assets/images/19.jpg" alt="" class="cats">
        <img src="@/assets/images/20.jpg" alt="" class="cats">
        <img src="@/assets/images/21.jpg" alt="" class="cats">
        <img src="@/assets/images/22.jpg" alt="" class="cats">
        <img src="@/assets/images/23.jpg" alt="" class="cats">
        <img src="@/assets/images/24.jpg" alt="" class="cats">
      </div>
      <div class="bodyTab" id="tab2">
        <img src="../assets/_1_.jpg" alt="">
      </div>
      <div class="bodyTab" id="tab3">
        <img src="../assets/_7_.jpg" alt="">
      </div>
      <div class="bodyTab" id="tab4">
        <img src="../assets/bg_4.jpg" alt="">
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
    margin: -100vh 0 0 15vw;
    grid-template-columns: 85vw;
    grid-template-rows: 1fr 60vh;
    row-gap: 20px;
    color: @color;

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
    width: 70vw;
    min-height: 60vh;
    border-radius: 2em;
    background-color: @background;
    box-shadow: 0 0 10px @shadow;

    .bodyTab {
      display: none;
      margin: auto;
      width: 100%;
      height: 80vh;

      img {
        display: block;
        margin: auto;
        width: 30%;
      }
    }

    #tab1 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-column-gap: 10px;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-row-gap: 10px;
      overflow-y: auto;

      .cats {
        display: block;
        margin: auto;
        width: 200px;
        height: 150px;
      }
    }
  }
}
</style>
