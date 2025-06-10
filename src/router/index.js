import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const ShopCart = () => import('@/views/shopcart/ShopCart')
const Profile = () => import('@/views/profile/Profile')

// 1. 保存原始 replace 方法
const originalReplace = VueRouter.prototype.replace;

// 2. 重写 replace 方法
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => {
    if (err.name === 'NavigationDuplicated') {
      return Promise.resolve(); // 忽略报错
    }
    return Promise.reject(err); // 其他错误照常抛出
  });
};

Vue.use(VueRouter)

const routes = [
    {
      path: "",
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/category",
      component: Category,
    },
    {
      path: "/shopcart",
      component: ShopCart,
    },
    {
      path: "/profile",
      component: Profile,
    },
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
