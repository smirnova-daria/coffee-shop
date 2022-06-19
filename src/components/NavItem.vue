<template>
    <li :class="classItem">
        <router-link :to="link">{{ text }}<slot></slot></router-link>
    </li>
</template>

<script>
export default {
    props: {
        link: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: false,
        },
        classItem: {
            type: String,
            required: true,
        },
    },
}
</script>
