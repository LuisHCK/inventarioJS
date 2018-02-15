<template>
  <el-container id="app">
    <sidebar v-if="logged()"></sidebar>
    <el-container>
      <el-header class="app-header" v-if="logged()">
        <div class="profile">
          <img src="static/logo.png" class="circle">
          <span><b>Usuario</b></span>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer v-if="logged()">Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from './components/layout/Sidebar.vue'
export default {
  name: 'app',
  components: { 'sidebar': Sidebar },
  methods: {
    logged() {
      let logged = false
      if (localStorage.getItem('loggedin') === 'true') {
        logged = true
      } else {
        logged = false
      }
      return logged
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
body {
  font-family: 'Open Sans', sans-serif;
  margin: 0px !important;
}
.center-text {
  text-align: center;
}
.block-button {
  width: 100%;
}
.responsive-img {
  max-width: 100%;
  height: auto;
}
.el-main {
  background-color: #f7f7f7;
  height: 78vh;
}
.float-right {
  position: absolute;
  right: 0;
}
.app-header {
  text-align: right;
  background-color: #465e6d;
  .profile {
    img {
      margin: 10px;
      height: 40px;
      width: auto;
    }
    b {
      color: #a8a8a8;
    }
  }
}
</style>
