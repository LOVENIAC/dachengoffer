import Vue from 'vue'
import VueRouter from 'vue-router'
import myHome from '../pages/home'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/',
      component: myHome
    },
    {
      path:'*',
      redirect:'/'
    }
  ]
})