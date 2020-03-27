import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  // {
  //   path: '/404',
  //   component: () => import('@/views/404'),
  //   hidden: true
  // },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/fileApply',
    name: 'Example',
    meta: {
      title: '文件桶', icon: 'file'
    },
    children: [
      {
        path: 'fileApply',
        name: 'fileApply',
        component: () => import('@/views/table/fileApply'),
        meta: { title: '文件桶申请' }
      },
      {
        path: 'approve',
        name: 'approve',
        component: () => import('@/views/table/approve'),
        meta: { title: '桶申请审批' }
      },
      {
        path: 'fileDetail',
        name: 'fileDetail',
        component: () => import('@/views/table/fileDetail'),
        meta: { title: '桶访问明细查询' }
      },
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '桶内文件查询' }
      }

    ]
  },

  {
    path: '/token',
    component: Layout,
    redirect: '/token/tokenBlacklist',
    name: 'Token',
    meta: { title: 'Token相关', icon: 'example' },
    children: [
      {
        path: 'tokenBlacklist',
        name: 'tokenBlacklist',
        component: () => import('@/views/token/tokenBlacklist'),
        meta: { title: 'Token黑名单维护查询' }
      },
      {
        path: 'tokenAdd',
        name: 'tokenAdd',
        component: () => import('@/views/token/tokenAdd'),
        meta: { title: 'Token黑名单维护新增' }
      },
      {
        path: 'tokenUpload',
        name: 'tokenUpload',
        component: () => import('@/views/token/tokenUpload'),
        meta: { title: 'Token上传' }
      },
      {
        path: 'tokenFind',
        name: 'tokenFind',
        component: () => import('@/views/token/tokenFind'),
        meta: { title: 'Token查询' }
      }

    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '管理员设定', icon: 'form' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
