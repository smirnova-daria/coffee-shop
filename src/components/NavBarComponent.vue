<template>
    <header>
        <ul
            class="header d-flex justify-content-center justify-content-md-start flex-wrap"
        >
            <li class="header__item">
                <router-link :to="links[0].link">
                    <img
                        :src="require(`@/assets/logo/${links[0].icon}`)"
                        alt="logo"
                    />
                </router-link>
            </li>
            <nav-item
                :link="links[1].link"
                :text="links[1].text"
                classItem="header__item"
            />
            <nav-item
                :link="links[2].link"
                :text="links[2].text"
                classItem="header__item"
            />
            <nav-item
                :link="links[3].link"
                :text="links[3].text"
                classItem="header__item"
            />
        </ul>
    </header>
</template>

<script>
import NavItem from './NavItem.vue'
export default {
    components: { NavItem },
    data() {
        return {
            links: [
                {
                    id: 0,
                    link: '/',
                    icon: 'Logo.svg',
                },
                {
                    id: 1,
                    text: 'Our coffee',
                    link: '/our-coffee',
                },
                {
                    id: 2,
                    text: 'For your pleasure',
                    link: '/pleasure',
                },
                {
                    id: 3,
                    text: 'Contact us',
                    link: '/contacts',
                },
            ],
        }
    },
}
</script>
