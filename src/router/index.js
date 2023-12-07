import Vue from 'vue'
import VueRouter from 'vue-router'
import MyHome from '@/pages/MyHome'
import MyOffer from "@/pages/offer/Offer";
import MyAbroad from "@/pages/abroad/Abroad";
import MyPromotion from "@/pages/promotion/Promotion"
import dachengPrivacy from '@/pages/footer/dacheng-privacy'
import dachengAboutUs from '@/pages/footer/dacheng-aboutus'
import dachengUseClauses from '@/pages/footer/dacheng-use-clauses'
import dachengUserAgreement from '@/pages/footer/dacheng-user-agreement'
// 获取原型对象push函数
const originalPush = VueRouter.prototype.push

// 获取原型对象replace函数
const originalReplace = VueRouter.prototype.replace

// 修改原型对象中的push函数
VueRouter.prototype.push = function push(location){
return originalPush.call(this , location).catch(err=>err)
}

// 修改原型对象中的replace函数
VueRouter.prototype.replace = function replace(location){
return originalReplace.call(this , location).catch(err=>err)
}


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/',
      component: MyHome,
      redirect: '/journeyon-abroad',
      children:[
        {
          path: 'journeyon-abroad',
          component: MyAbroad,
          meta: {
            title: '竟乘'
          }
        },
        {
          path: 'journeyon-offer',
          component: MyOffer,
          meta: {
            title: '竟乘'
          }
        },
      ]
    },
    {
      path: '/journeyon-privacy',
      component: dachengPrivacy,
      meta: {
        title: ' 隐私协议'
      }
    },
    {
      path: '/journeyon-user-agreement',
      component: dachengUserAgreement,
      meta: {
        title: '用户协议'
      }
    },
    {
      path: '/journeyon-use-clauses',
      component: dachengUseClauses,
      meta: {
        title: '使用条款'
      }
    },
    {
      path: '/journeyon-about-us',
      component: dachengAboutUs,
      meta: {
        title: '关于我们'
      }
    },
    {
      path: '/promotion',
      component: MyPromotion,
      meta: {
        title: '竟乘'
      }
    },
    {
      path:'*',
      redirect:'/'
    }
  ]
})