<template>
  <div class="inventory">

<el-tabs type="border-card">
  <el-tab-pane label="Inventario">
    <h4>Inventario</h4>
    <el-table
      :data="stocks"
      empty-text="No hay productos"
      style="width: 100%">
      <el-table-column
        label="#"
        width="40">
      </el-table-column>

      <el-table-column
        label="Producto">
        <template slot-scope="scope">
          {{ scope.row.product.name }} <el-tag size="mini">{{ scope.row.product.content }}{{ scope.row.product.unity }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column
        prop="product.brand"
        label="Marca">
      </el-table-column>

      <el-table-column
        prop="price"
        label="Precio de venta">
      </el-table-column>

      <el-table-column
        prop="quantity"
        label="Existencias">
      </el-table-column>

      <el-table-column
        label="Habilitado para Venta">
        <template slot-scope="scope">
          <el-form label-width="110px">
            <el-form-item :label="scope.row.enabled?'Habilitado':'Deshabilitado'">
              <el-switch v-model="scope.row.enabled" @change="updateState($event, scope.row.id)"></el-switch>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

    </el-table>
  </el-tab-pane>

  <el-tab-pane label="Productos">
    <products></products>
  </el-tab-pane>
</el-tabs>

<el-button @click="seedProducts()">Seed Products</el-button>

  </div>
</template>

<script>
import db from '../db'
import { SeedProducts } from '../database/Seed'
import Products from './Products.vue'
export default {
  name: 'inventory',
  components: { products: Products },
  data() {
    return {
      stocks: []
    }
  },

  methods: {
    getStock() {
      db.rel
        .find('stock')
        .then(response => {
          response.stocks.forEach(stock => {
            stock.product = this.getProductById(response.products, stock.productId)
          })
          this.stocks = response.stocks
          console.log((this.stocks))
        })
        .catch(err => console.log(err))
    },

    getProductById(products, productId) {
      let filter = {}
      products.map(product => {
        if (product.id === productId) {
          filter = product
        }
      })
      return filter
    },

    updateState(value, stockId) {
      db.rel.find('stock', stockId)
        .then(response => {
          response.stocks[0].enabled = value
          db.rel.save('stock', response.stocks[0])
            .then(response2 => {
              this.stocks.forEach(stock => {
                if (stock.id === stockId) {
                  stock.enabled = value
                }
              })
            })
        })
        .catch(err => {
          console.log(err)
          this.$notify.error({
            title: 'Ha ocurrido un error',
            message: 'Ocurrió un error al cambiar el estado.'
          })
        })
    },

    seedProducts() {
      SeedProducts()
    }
  },

  created() {
    this.getStock()
  }
}
</script>

<style scoped lang='scss'>

</style>