<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <button class="button" @click="$router.push('inventory')"></button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {}
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
