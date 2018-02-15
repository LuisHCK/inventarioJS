<template>
  <el-aside
    width="200px">
    <h1>InventarioJS</h1>
    <el-menu
      :router="true"
      background-color="#465e6d"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item v-for="(item, index) in menuItems" :index="'index-'+index" :key="index" :route="{path: item.path}">
        <i :class="item.icon"></i>
        <span>{{item.text}}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  props: {
    min: Boolean,
    default: false
  },
  data() {
    return {
      isReady: false,
      menuItems: [
        {icon: 'el-icon-menu', text: 'Inicio', path: 'dashboard'},
        {icon: 'el-icon-tickets', text: 'Inventario', path: 'inventory'},
        {icon: 'el-icon-goods', text: 'Ventas', path: 'sales'},
        {icon: 'el-icon-setting', text: 'Administración', path: 'settings'},
        {icon: 'el-icon-circle-close-outline', text: 'Cerrar sesión', path: 'logout'}
      ]
    }
  }
}
</script>

<style scoped lang="scss">
aside {
  h1 {
    color: #ffd04b;
    padding-left: 10px;
  }
  background-color: #465e6d;
  .el-menu {
    border-right: none !important;
  }
}
</style>