<script>

import { store } from '../store';

export default{
    props: {
        project: {
            type: Object,
        }
    },
    name: 'index',
    data (){
        return{
            store,
        }
    }
}

</script>

<template>

                    <div class="card h-100 mt-3">
                        <div v-if="project.cover_img">
                            <img :src="store.backendUrl + '/storage/' + project.cover_img" 
                            class="card-img-top" 
                            alt="...">
                        </div>
                        <div class="card-body">
                            <router-link :to="{ name: 'show', params: {id:project.id} }"
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


</template>

<style lang="scss" scoped></style>