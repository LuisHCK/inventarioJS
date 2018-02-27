<template>
  <div class="sales">
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i>Facturar</span>
        <invoice-form v-model="stocks"></invoice-form>

      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i>Venta Rápida</span>
        Config
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i>Registros</span>
        Role
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import InvoiceForm from './custom/InvoiceForm.vue'

export default {
  name: 'sales',
  components: {'invoice-form': InvoiceForm},
  data() {
    return {
      stocks: []
    }
  }
}
</script>

<style lang='scss'>
</style>