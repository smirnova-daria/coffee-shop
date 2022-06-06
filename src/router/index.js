import Vue from 'vue'
import VueRouter from 'vue-router'
import HeroView from '../views/HeroView'
import OurCoffeeView from '../views/OurCoffeeView'
import ContactsView from '../views/ContactsView'
import ForYourPleasureView from '../views/ForYourPleasureView'
import ThanksView from '../views/ThanksView'
import ProductView from '../views/ProductView'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: HeroView },
    { path: '/our-coffee', component: OurCoffeeView },
    { path: '/pleasure', component: ForYourPleasureView },
    { path: '/contacts', component: ContactsView },
    { path: '/thanks', component: ThanksView },
    { name: 'coffee', path: '/our-coffee/:id', component: ProductView },
    { name: 'goods', path: '/pleasure/:id', component: ProductView },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router
