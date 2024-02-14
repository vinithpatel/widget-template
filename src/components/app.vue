<template>
    <first-component />
</template>

<!-- no scope for app.vue, style defined here is global for the app -->
<style>
html {
    overflow-y: auto !important;
    overflow-x: hidden !important;
}
</style>

<script>
import FirstComponent from "./first-component.vue";

// widget object is available everywhere !
console.debug(widget);

export default {
    name: "App",
    components: { FirstComponent },
    data() {
        return {
            hello: "3DExperience Widget :)"
        };
    },
    computed: {
        message() {
            return this.$store.state.message;
        }
    },
    watch: {},
    mounted() {},
    methods: {}
};
</script>
