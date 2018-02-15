import db from '../db'

const products = [
  {
    name: 'Galleta Chocolate',
    code: '3912301823098',
    description: 'Galleta sabor a vainilla',
    brand: 'Oreo',
    categories: 'Dulces,Alimentos',
    tags: 'Test, Seed, Pruebas',
    content: 10,
    unity: 'unidad'
  },
  {
    name: 'Chocolate en barra',
    code: '123123543655647',
    description: 'Choclate en barra',
    brand: 'Snickers',
    categories: 'Dulces,Alimentos',
    tags: 'Test, Seed, Pruebas',
    content: 10,
    unity: 'unidad'
  },
  {
    name: 'Doritos Barbacoa',
    code: '476878987967856',
    description: 'Snacks sabor a barbacoa picante',
    brand: 'Doritos',
    categories: 'Snacks,Alimentos',
    tags: 'Test, Seed, Pruebas',
    content: 10,
    unity: 'unidad'
  }
]

export function SeedProducts() {
  products.forEach(product => {
    db.rel.save('product', product)
  })
}
