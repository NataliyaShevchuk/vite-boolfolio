<script>
export default {
    name: 'home',
    data() {
        return {
            projects: []
        }
    }
}

</script>

<template>
    <div class="container">
        <h1>Pagina Home</h1>
        <!-- <button class="btn btn-primary text-white"> -->
            <router-link :to="{ name: 'index' }" class="text-white btn btn-primary">
                projects
            </router-link>
        <!-- </button> -->
    </div>
</template>

<style lang="scss">

</style>