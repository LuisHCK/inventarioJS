import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Inventory from '@/components/Inventory'
import Settings from '@/components/Settings'
import Sales from '@/components/Sales'
import Update from '@/components/Update'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      title: 'Inicio de Sesión',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      title: 'Inicio',
      component: Dashboard
    },
    {
      path: '/inventory',
      name: 'Inventory',
      title: 'Inventario',
      component: Inventory
    },
    {
      path: '/settings',
      name: 'Settings',
      title: 'Ajustes',
      component: Settings
    },
    {
      path: '/sales',
      name: 'Sales',
      title: 'Ventas',
      component: Sales
    },
    {
      path: '/update',
      name: 'Update',
      title: 'Actualización',
      component: Update
    }
  ]
})
