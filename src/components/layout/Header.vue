<template>
  <el-header>
    <h3>{{ value }}</h3>
    <div class="spacer"></div>
    <a href="#" class="current-profile">
      <div class="avatar-container">
        <img src="static/logo.png" class="avatar">
      </div>
      <div class="name-container">
        <div class="name">Current User</div>
      </div>
    </a>
  </el-header>
</template>

<script>
  export default {
    name: 'app-header',
    props: ['value', 'currentUser']
  }
</script>

<style scoped lang="scss">
  .el-header {
    background-color: #465e6d;
    color: white;
    display: flex;
    .current-profile {
      text-decoration: none;
      color: white;
      height: 60px;
      text-align: right;
      font-size: 12px;
      display: flex;
      align-items: center;
      position: relative;
      .name {
        font-weight: 700;
      }
      .avatar {
        width: auto;
        height: 30px;
      }
    }
  }
  .spacer {
    flex-grow: 1 !important;
  }

</style>
