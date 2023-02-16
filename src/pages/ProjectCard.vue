<script>
import axios from 'axios';

export default {
    name: 'index',
    data() {
        return {
            backendUrl: 'http://127.0.0.1:8000',
            projects: []
        }
    },mounted() {
        axios
            .get(`${this.backendUrl}/api/projects/`)
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
            <div class="row mx-5">
                <div class="col-3 my-3"
                v-for="project in projects" :key="project.id">
                    <div class="card">
                        <div v-if="project.cover_img">
                            <img :src="backendUrl + '/storage/' + project.cover_img" 
                            class="card-img-top" 
                            alt="...">
                        </div>
                        <div class="card-body">
                            <router-link :to="{ name: 'show', params: {id: project.id} }"
                            class="text-decoration-none text-black fs-5"
                            >{{ project.name }}</router-link>
                            <p class="card-text"> {{ project.description }} </p>
                            <p class="card-text"> {{ project.type?.name }} </p>
                            <a href="{{ project.github_link }}" class="btn btn-primary">Github Link</a>
                            <br>
                            <span class="badge text-bg-primary my-2">
                                <div v-for="technology in project.technologies" :key="technology.id"
                                class="text-black">
                                    <h6 class="text-black">
                                        {{ technology.name }}
                                    </h6>
                                </div>
                            </span>
                            <br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style lang="scss">

</style>