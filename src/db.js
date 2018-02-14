const PouchDB = require('../node_modules/pouchdb/dist/pouchdb.min')

// Add plugins
PouchDB.plugin(require('../node_modules/relational-pouch/dist/pouchdb.relational-pouch'))
PouchDB.plugin(require('../node_modules/pouchdb-find/node_modules/pouchdb-promise'))

// Create Database
const db = new PouchDB('inventariojs')

// Create Schema
db.setSchema([
  {
    singular: 'product',
    plural: 'products',
    relations: {
      stock: { belongsTo: 'stock' }
    }
  },
  {
    singular: 'stock',
    plural: 'stocks'
  },
  {
    singular: 'sale',
    plural: 'sales',
    relations: {
      products: { hasMany: 'products' }
    }
  }
])

export default db
