<script>
import axios, { Axios } from 'axios';
import { store } from '../store';


export default{
    name: "Contacts",
    data(){
        return{
            loading: false,
            SubmitResult: '',
            formData: {
                title: '',
                email: '',
                message: '',
                file: '',
            } 
        }
    },
    methods: {
        onFormSubmit(){
            this.loading = true;

            const newFormData = new FormData();
            newFormData.append('title', this.formData.title);
            newFormData.append('email', this.formData.email);
            newFormData.append('message', this.formData.message);
            newFormData.append('file', this.formData.file);


            axios.post(store.backendUrl + '/api/contacts', newFormData)
                .then(resp =>{
                    this.SubmitResult = 'success';
                    this.loading = false;
                })
                .catch((e)=>{
                    if (e.response && e.response.data) {
                        this.submitResult = e.response.data.message;
                    } else {
                        this.submitResult = e.message;
                    }

                    this.loading = false;
                })
        },
        onFileChange(event){
            const chosenFiles = event.target.files;
            this.formData.file = chosenFiles[0];
        }
    },
}
</script>


<template>
    <div class="container mt-3 text-start">

        <h1>Pagina Contatti</h1>

        <div class="alert alert-success" v-if="SubmitResult === 'success'">
            Messaggio inviato correttamente. Ti risponderemo il prima possibile
        </div>

        <div class="alert alert-danger" v-else-if="SubmitResult">
            Sembra ci sia stato un errore. Ti invitiamo a riprovare pià tardi.<br />
            {{ SubmitResult }}
        </div>

        <form @submit.prevent='onFormSubmit' v-if="SubmitResult !== 'success'">
            <div class="mb-3">
                <label for="titleInput" class="form-label">Title</label>
                <input type="text" class="form-control" id="titleInput" placeholder="Your Name"
                v-model="formData.title">
            </div>
            <div class="mb-3">
                <label for="emailInput" class="form-label">Email</label>
                <input type="email" class="form-control" id="emailInput" placeholder="Your email"
                v-model="formData.email">
            </div>
            <div class="mb-3">
                <label for="messageInput" class="form-label">Message</label>
                <textarea type="text" class="form-control" id="messageInput" placeholder="Tell us about the problem"
                v-model="formData.message">
                </textarea>
            </div>
            <div class="mb-3">
                <label for="fileInput" class="form-label">File</label>
                <input type="file" class="form-control" id="fileInput" placeholder="Attachment"
                @change="onFileChange">
            </div>
            <div class="d-flex justify-content-center gap-3">
                <button class="btn btn-secondary" typeof="reset" :disabled="loading">
                    Annulla
                </button>
                <button class="btn btn-success" :disabled="loading">
                    <span
                    v-if="loading"
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                    ></span>
                    Invia
                </button>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped></style>