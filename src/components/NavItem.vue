<template>
    <li :class="classItem">
        <router-link :to="link">{{ text }}</router-link>
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
        },
    },
}
</script>
