import db from '../db'
import Papa form 'papaparse'

const products = Papa.parse(require('../assets/Grocery_UPC_Database.csv'))

export function SeedProducts() {
  products.forEach(product => {
    db.rel.save('product', product)
  })
}
