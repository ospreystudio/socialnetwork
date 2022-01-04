<template>
<h1 class="container">Vue Router!</h1>
</template>

<script>
export default {
    name: "Container"
}
</script>

<style scoped lang="scss">
.container {
    max-width: 120rem;
    margin: 8rem auto;
    background-color: var(--color-gray-light-1);
    box-shadow: var(--shadow-dark);
    min-height:50rem;

    @media only screen and (max-width: 75rem) {
        margin: 0;
        max-width: 100%;
        width: 100%;

    }
}





</style>
