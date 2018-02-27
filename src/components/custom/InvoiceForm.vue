<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-form :model="formInvoice" ref="formInvoice" label-width="90px" @submit.native.prevent>
        <el-form-item label="Código" prop="code">
          <el-input v-model="form.code" placeholder="Código" @change="findProduct()"></el-input>
        </el-form-item>

        <el-form-item label="Cantidad" prop="quantity">
          <el-input-number v-model="form.quantity" placeholder="Cantidad" :min="1"></el-input-number>
        </el-form-item>

        <el-form-item label="Descuento">
          <el-input-number v-model="form.discount" placeholder="Descuento" :min="0"></el-input-number>
        </el-form-item>

        <el-form-item label="IVA">
          <el-input-number v-model="form.iva" placeholder="IVA" :min="0"></el-input-number>
        </el-form-item>

        <el-form-item>
          <el-button type="success" @click="addProduct()">Agregar</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <el-col :offset="5" :span="12">
      <el-card>
        <el-row :gutter="10">
          <el-col :span="8">
            <img src="static/logo.png" class="responsive-img">
          </el-col>
          <el-col :span="16">
            <span class="price">$100</span>
            <b class="product-name">Product Name</b>
            <span class="brand">Brand</span>
            <span>100 existencias</span>
            <p>
              <el-tag type="info" size="mini">Category</el-tag>
              <el-tag type="info" size="mini">Category</el-tag>
              <el-tag type="info" size="mini">Category</el-tag>
            </p>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import db from '../../db'

export default {
  name: 'invoice-form',
  props: ['items'],
  data() {
    return {
      item: {},
      form: {},
      formInvoice: {},
      stock: {}
    }
  },
  methods: {
    // Add product to
    addProduct() {
      console.log(this.form.code)
    },

    findProduct() {
      db.rel.find('stock', this.form.code)
    }
  }
}
</script>

<style scoped>
span {
  display: block;
  line-height: 25px;
}
.price {
  position: absolute;
  font-weight: 200;
  font-size: 16pt;
  color: #636363;
  right: 0;
}
.brand {
  color: #666666;
  font-size: 12;
}
.product-name {
  display: block;
}
.el-tag {
  display: inline;
}
</style>
