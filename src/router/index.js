import Vue from 'vue'
import VueRouter from 'vue-router'
import mHome from '../pages/home'
import dachengUserAgreement from '../pages/footer/dacheng-user-agreement'
import dachengPrivacy from '../pages/footer/dacheng-privacy'
import dachengAboutUs from '../pages/footer/dacheng-aboutus'
import dachengUseClauses from '../pages/footer/dacheng-use-clauses'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/',
      component: mHome
    },
    {
      path: '/dacheng-privacy',
      component: dachengPrivacy,
      meta: {
        title: ' 隐私协议'
      }
    },
    {
      path: '/dacheng-user-agreement',
      component: dachengUserAgreement,
      meta: {
        title: '用户协议'
      }
    },
    {
      path: '/dacheng-use-clauses',
      component: dachengUseClauses,
      meta: {
        title: '使用条款'
      }
    },
    {
      path: '/dacheng-about-us',
      component: dachengAboutUs,
      meta: {
        title: '关于我们'
      }
    },
    {
      path:'*',
      redirect:'/'
    }
  ]
})