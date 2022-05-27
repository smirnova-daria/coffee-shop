import Vue from 'vue'
import VueRouter from 'vue-router'
import HeroView from '../views/HeroView'
import OurCoffeeView from '../views/OurCoffeeView'
import ContactsView from '../views/ContactsView'
import ForYourPleasureView from '../views/ForYourPleasureView'
import ThanksView from '../views/ThanksView'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: HeroView },
    { path: '/our-coffee', component: OurCoffeeView },
    { path: '/pleasure', component: ForYourPleasureView },
    { path: '/contacts', component: ContactsView },
    { path: '/thanks', component: ThanksView },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router
