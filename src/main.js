import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false

import Home from './pages/Home'
import Status from './pages/Status'
import User from './pages/User'
import UserNew from './pages/UserNew'
import Login from './pages/Login'
import PassLogin from './pages/PassLogin'

import BackHeader from './components/BackHeader'
import ArticleBody from './components/ArticleBody'
import Header from './components/Header'
import NavTags from './components/NavTags'
import Articles from './components/Articles'
import UserInfo from './components/UserInfo'
import UserFooter from './components/UserFooter'
import SimplifyHeader from './components/SimplifyHeader'
import BtnEnterLogin from './components/BtnEnterLogin'

Vue.component('component-header', Header)
Vue.component('component-nav-tags', NavTags)
Vue.component('component-articles', Articles)
Vue.component('component-article', ArticleBody)
Vue.component('component-back-header', BackHeader)
Vue.component('component-user-info', UserInfo)
Vue.component('component-user-bar', UserFooter)
Vue.component('component-simp-header', SimplifyHeader)
Vue.component('component-enter-login', BtnEnterLogin)

const routes = [
	{ path:'/', component: Home },
	{ path:'/status', component: Status },
	{ path:'/user', component: User },
	{ path:'/user_new', component: UserNew },
	{ path:'/login', component: Login },
	{ path:'/pass_login', component: PassLogin }
]

const router = new VueRouter({
	routes
})
new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
