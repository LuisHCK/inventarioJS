<template>
  <el-dialog title="Crear nuevo producto" :visible="value" :show-close="false" @submit.native.prevent>
    <el-form ref="formProduct" :model="productForm" label-width="90px">
      <el-form-item label="Nombre" prop="name" :rules="[rules.required]">
        <el-input v-model="productForm.name"></el-input>
      </el-form-item>

      <el-form-item label="Marca">
        <el-input v-model="productForm.brand"></el-input>
      </el-form-item>

      <el-form-item label="Código" prop="code" :rules="[rules.required]">
        <el-input v-model="productForm.code"></el-input>
      </el-form-item>

      <el-form-item label="Descripción">
        <el-input v-model="productForm.description"></el-input>
      </el-form-item>

      <el-form-item label="Unidad" prop="unity" :rules="[rules.required]">
        <el-select v-model="productForm.unity" placeholder="Seleccionar">
          <el-option
            v-for="item in options"
            required
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Contenido" prop="content" :rules="[rules.required]">
        <el-input v-model="productForm.content" type="number" min="1"></el-input>
      </el-form-item>

      <el-form-item label="Categorías" prop="categories" :rules="[rules.required]">
        <el-input v-model="productForm.categories" placeholder="Separadas por coma"></el-input>
      </el-form-item>

      <el-form-item label="Etiquetas">
        <el-input v-model="productForm.tags" placeholder="Separadas por coma"></el-input>
      </el-form-item>

    </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="close()" round>Cancelar</el-button>
    <el-button type="success" @click="validateForm()" round icon="el-icon-edit">Guardar</el-button>
  </span>
  </el-dialog>
</template>

<script>
import db from '../../db'

export default {
  name: 'form-product',
  props: ['value'],
  data() {
    return {
      productForm: {
        name: '',
        code: '',
        description: '',
        brand: '',
        categories: '',
        tags: '',
        content: undefined,
        unity: 'unidad'
      },
      options: [
        {
          value: 'unidad',
          label: 'Unidad'
        },
        {
          value: 'pieza',
          label: 'Pieza'
        },
        {
          value: 'libra',
          label: 'Libra'
        },
        {
          value: 'arroba',
          label: 'Arroba'
        },
        {
          value: 'quintal',
          label: 'Aquintal'
        },
        {
          value: 'paquete',
          label: 'Paquete'
        }
      ],
      rules: {
        required: {
          required: true,
          message: 'Este campo es obligatorio'
        }
      }
    }
  },
  methods: {
    /**
     * Validations
     */
    validateForm() {
      this.$refs['formProduct'].validate(valid => {
        if (valid) {
          this.saveProduct()
        } else {
          this.$notify.error({
            title: 'Error',
            message: 'Revisa los datos del formulario'
          })
          return false
        }
      })
    },

    /**
     * When form is validates store product in database
     */
    saveProduct() {
      // Clone object to avoid null fields
      const form = Object.assign({}, this.productForm)
      db.rel.save('product', form).then(product => {
        console.log(product)
        // Send notification
        this.$notify({
          title: 'Éxito',
          message: 'Se guardó tu nuevo producto',
          type: 'success'
        })
        this.close()
        this.resetForm()
      })
    },

    /**
     * Clear form valus
     */
    resetForm(formName) {
      this.$refs['formProduct'].resetFields()
    },

    /**
     * Close form modal
     */
    close() {
      this.resetForm()
      this.$emit('input', false)
    }
  },

  watch: {
    productForm: function(result) {
      console.log(result)
    }
  }
}
</script>

<style lang='scss'>

</style>