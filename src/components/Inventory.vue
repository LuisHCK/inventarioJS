<template>
  <div class="inventory">
    <h1>Inventario</h1>
  </div>
</template>

<script>
import Dashboard from './Dashboard.vue'
export default {
  name: 'inventory',
  data() {
    return {
      stock: []
    }
  },

  methods: {
    getStock() {
    }
  },

  created() {
    console.log(Dashboard)
  }
}
</script>

<style scoped lang='scss'>
</style>