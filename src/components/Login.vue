<template>
  <div class="login-page center-text">
    <el-row type="flex">
      <el-col :span="8" :offset="7">
        <img src="static/logo.png" alt="">
        <h2>Iniciar Sesión</h2>
        <el-form label-position="top" label-width="80px">
          <el-form-item>
            <el-input placeholder="Nombre de Usuario" v-model="login.username"></el-input>
          </el-form-item>

          <el-form-item>
            <el-input placeholder="Contraseña" v-model="login.password" type="password"></el-input>
          </el-form-item>

          <el-button round type="primary" class="block-button" @click="doLogin()">Iniciar</el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username: 'luishck',
      password: '1234',
      login: {}
    }
  },

  // Methods
  methods: {
    doLogin() {
      if (
        this.login.username === this.username &&
        this.login.password === this.password
      ) {
        this.$router.push('dashboard')
        localStorage.setItem('loggedin', true)
      } else {
        alert('error')
      }
    }
  },
  mounted() {
    if (localStorage.getItem('loggedin') === 'true') {
      this.$router.push('dashboard')
    }
  }
}
</script>

<style lang='scss'>

</style>