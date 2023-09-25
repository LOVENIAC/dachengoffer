import Vue from 'vue'
import VueRouter from 'vue-router'
import MyHome from '@/pages/MyHome'
import MyAbroad from "@/pages/abroad/Abroad";
import MyOffer from "@/pages/offer/Offer";
import dachengUserAgreement from '@/pages/footer/dacheng-user-agreement'
import dachengPrivacy from '@/pages/footer/dacheng-privacy'
import dachengAboutUs from '@/pages/footer/dacheng-aboutus'
import dachengUseClauses from '@/pages/footer/dacheng-use-clauses'
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
      redirect: '/dacheng-abroad',
      children:[
        {
          path: 'dacheng-abroad',
          component: MyAbroad,
          meta: {
            title: '大乘'
          }
        },
        {
          path: 'dacheng-offer',
          component: MyOffer,
          meta: {
            title: '大乘'
          }
        },
      ]
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