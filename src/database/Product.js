import db from '../db'
/**
 * Product Class
 */
const Product = class Product {
  constructor(name, code, description, unity, display, categories, tags) {
    this.name = name
    this.code = code
    this.description = description
    this.unity = unity
    this.display = display
    this.categories = categories
    this.tags = tags
  }

  /**
   * Create a product
   * @param {Product} product - A product to store
   * @returns {Promise}
   */
  createProduct(product) {
    return db.rel.save('product', Product)
  }

  /**
   * Find one product by ID
   * @param {Any} id - Id Used to find a product
   */
  getOneProduct(id) {
    return db.rel.find('product', id)
  }

  /**
   * Get a list of product by array of ids
   * @param {Array} ids - Array of products to get
   */
  getManyProducts(ids) {
    return db.rel.find('product', ids)
  }

  /**
   * Find a product then delete it
   * @param {Any} id - Product ID
   */
  deleteProduct(id) {
    db.rel.find('product', id).then(product => {
      return db.rel.del('product', product)
    })
  }
}
