<template>
  <div id="app">
    <!--<nav>-->
    <div class="nav-wrapper">
      <ul class="tab-nav">
        <li class="tab-item">
          <router-link :to="'/'">Home</router-link>
        </li>
        <li class="tab-item">
          <router-link :to="'/about/biography'">About</router-link>
        </li>
        <li class="tab-item">
          <router-link :to="'/store'">Store</router-link>
        </li>
        <!--<li class="tab-item"><a>Documents</a></li>-->
      </ul>
    </div>
    <!--</nav>-->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    overflow: hidden;
  }
  
  nav {
    /*display: inline-block;*/
    font-family: 'Baloo Bhaina', cursive;
    background-color: rgba(255, 0, 255, 0);
    /*position: absolute;*/
    width: 0px;
    /*top: 0;*/
    /*bottom: 0;*/
    left: auto;
    right: auto;
    /*padding: 10%;*/
    border-bottom: dotted 0px;
  }
  
  /*ul {*/
    /*padding: 0 80%;*/
  /*}*/
  
  a {
    font-family: 'Baloo Bhaina', cursive !important;
    color: white !important;
    border-bottom: dotted 0px !important;
  }
  
  .tab-nav {
    display: flex;
    justify-content: space-around;
  }
</style>