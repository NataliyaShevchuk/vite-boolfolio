<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'show',
    data() {
        return {
            store,
            project: []
        }
    },mounted() {
        axios
            .get(`${this.store.backendUrl}/api/projects/${this.$route.params.id}`)
            .then((resp)=>{
                    this.project = resp.data;
            })
            .catch((er) => {
                this.$router.push({name: 'projects.index'})
            })
    }
}

</script>

<template>
        <div class="container">
            <h1>Pagina show {{ $route.params.id }}</h1>
                <div class="col-6 my-3">
                    <div class="card h-100">
                        <div v-if="project.cover_img">
                            <img :src="store.backendUrl + '/storage/' + project.cover_img" 
                            class="card-img-top" 
                            alt="...">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{ project.name }}</h5>
                            <p class="card-text">{{ project.description }}</p>
                            <p class="card-text">{{ project.type?.name }}</p>
                            <a href="{{$project->github_link}}" class="btn btn-primary">Github Link</a>
                            <br>
                            <span class="badge text-bg-primary my-2">
                                <div v-for="technology in project.technologies" :key="technology.id">
                                    {{ technology.name }}
                                </div>
                            </span>
                            <br>
                        </div>
                    </div>
                </div>

        </div>
</template>

<style lang="scss">

</style>