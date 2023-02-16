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
                if(resp.data.succes){
                    this.projects = resp.data.projects;
                    console.log(projects);
                }else{
                    this.$router.push({name: 'index'})
                }
            });
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
                            <router-link :to="{ name: 'projects.show', params: {id: project.id} }">{{ project.title }}</router-link>
                            <p class="card-text"> {{ project.description }} </p>
                            <p class="card-text"> {{ project.type?.name }} </p>
                            <!-- <a href="{{ project.github_link }}" class="btn btn-primary">Github Link</a> -->
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
        </div>
</template>

<style lang="scss">

</style>