<template>
  <div class="products">
    <el-row>
      <el-col :span="12">
        <h4>Productos</h4>
      </el-col>
      <el-col :span="12">
        <el-button class="button float-right" size="small" round icon="el-icon-edit" type="success" @click="showProductDialog=!showProductDialog">Nuevo Producto</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="products"
      empty-text="No hay productos"
      style="width: 100%">
      <el-table-column
        prop="_id"
        label="#"
        width="30">
      </el-table-column>
      <el-table-column
        label="Nombre">
        <template slot-scope="scope">
          {{ scope.row.name }} <el-tag size="mini">{{ scope.row.content }}{{ scope.row.unity }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="Marca"
        width="90"
        prop="brand">
      </el-table-column>
      <el-table-column
        prop="description"
        label="Descripción">
      </el-table-column>
      <el-table-column
        label="Categorías">
        <template slot-scope="scope">
          <el-tag type="info" size="mini" v-for="(category, index) in parseCategories(scope.row.categories)" :key="index">
            {{ category }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="Agregar">
        <template slot-scope="scope">
          <el-button v-if="!isAdded(scope.row.id)" size="small" round type="primary" @click="popProduct=!popProduct,selected.id=scope.row.id, selected.name=scope.row.name" icon="el-icon-plus">Agregar</el-button>
          <el-button v-else icon="el-icon-check" size="small" round disabled>Agregado</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="selected.name" :visible="popProduct" :show-close="false" width="400px">
        <p>Agrega este producto a tu inventario para realizar ventas</p>
        <el-form label-width="100px">
          <el-form-item label="Precio">
            <el-input-number v-model="selected.price" :step="10" controls-position="right" size="small" :min="1"></el-input-number>
          </el-form-item>
          <el-form-item label="Existencias">
            <el-input-number v-model="selected.quantity" :step="10" controls-position="right" size="small" :min="1"></el-input-number>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button round @click="popProduct=false, selected={}">Cancelar</el-button>
          <el-button round type="success" @click="addToInventory()" icon="el-icon-plus" :loading="addingProduct" :disabled="disableSave()">Agregar</el-button>
        </span>
    </el-dialog>

    <form-product v-model="showProductDialog" @input="getProducts()"></form-product>
  </div>
</template>

<script>
import db from '../db'
import FormProduct from './custom/FormProduct.vue'

export default {
  name: 'products',
  components: { 'form-product': FormProduct },
  data() {
    return {
      products: [],
      showProductDialog: false,
      popProduct: false,
      selected: {},
      addingProduct: false,
      inStock: []
    }
  },

  created() {
    this.getProducts()
  },

  mounted() {
    this.checkForAddedProducts()
  },

  methods: {
    /**
     * Get all products
     */
    getProducts() {
      db.rel
        .find('product')
        .then(result => {
          this.products = result.products
        })
        .catch(err => console.log(err))
    },

    /**
     * Parse categories
     */
    parseCategories(string) {
      let categories = []

      string.split(',').map(category => {
        if (category !== '') {
          categories.push(category)
        }
      })
      return categories
    },

    /**
     * Disable save button when form isn't valid
     */
    disableSave() {
      let val = true
      if (
        this.selected.quantity < 1 ||
        this.selected.price < 1 ||
        !this.selected.id ||
        !this.selected.quantity ||
        !this.selected.price
      ) {
        val = true
      } else {
        val = false
      }
      return val
    },

    /**
     * try to add product to inventory
     */
    addToInventory() {
      if (this.disableSave()) {
        return this.$notify.error({
          title: 'Error',
          message: 'Los datos no son válidos'
        })
      }
      this.addingProduct = true
      db.rel
        .save('stock', {
          productId: this.selected.id,
          quantity: this.selected.quantity,
          price: this.selected.price,
          enabled: true
        })
        .then(response => {
          // Show message
          this.$notify({
            title: 'Éxito',
            message: 'Se agregó el producto a tu inventario',
            type: 'success'
          })
          this.addingProduct = false
          this.checkForAddedProducts()
          this.popProduct = false
          this.selected = {}
        })
        .catch(err => {
          console.log(err)
          this.$notify.error({
            message: 'Ocurió un error al guardar el producto'
          })
          this.addingProduct = false
        })
    },

    /**
     * Mark a product as added
     */
    isAdded(productId) {
      if (this.inStock.indexOf(productId) !== -1) {
        return true
      } else {
        return false
      }
    },

    /**
     * Check wich products are already added
     */
    checkForAddedProducts() {
      db.rel.find('stock').then(response => {
        response.stocks.map(stock => {
          this.inStock.push(stock.productId)
        })
      })
    }
  }
}
</script>

<style scoped lang='scss'>
.el-tag {
  margin: 1px;
}
</style>