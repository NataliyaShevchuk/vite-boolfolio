<script>
import axios from 'axios';
import { store } from '../store';
import Card from '../components/Card.vue';

export default {
    components: {Card},
    name: 'index',
    data() {
        return {
            store,
            projects: []
        }
    },mounted() {
        axios
            .get(`${this.store.backendUrl}/api/projects/`)
            .then((resp)=>{
                this.projects = resp.data;
                console.log(projects);
            })
            .catch((er) =>{
                this.$router.push({name: 'index'})
            })

    }
}

</script>

<template>
        <div class="container">
            <div class="row g-4">
                <div class="col-3" v-for="project in projects" :key="project.id">
                    <Card :project="project"></Card>
                </div>
            </div>
        </div>
</template>

<style lang="scss">

</style>