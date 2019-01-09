import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from '../components/container/ArticleList.vue'
import ArticleDetail from '../components/container/ArticleDetail.vue'
import ArticleCategory from '../components/container/ArticleCategory.vue'
import About from '../components/container/About.vue'

Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path: '/',
      name: 'Home',
      component: ArticleList
    },
    {
      path: '/articledetail',
      name: 'ArticleDetail',
      component: ArticleDetail
    },
    {
      path: '/category',
      name: 'Category',
      component: ArticleCategory
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})


