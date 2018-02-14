<template>
  <el-container id="app">
    <sidebar v-if="logged()"></sidebar>
    <el-container>
      <el-header v-if="logged()">Header</el-header>
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

<style>
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
  background-color: #e9eef3;
  padding: 5px;
  height: 100%;
}
</style>
