<template>
<div v-if="isModal" @click="closeModal" class="welcome-modal">
    <div class="modal-content">
        <span @click="closeModal" class="close-modal">&times;</span>
        <h3>Hello <span style="color:#cc3507">{{user}}</span></h3>
        <p>Pls set up your personal financial dashboard.</p>
    </div>
</div>
</template>

<script>
export default {
    name: "WelcomeModal",
   data(){
       return{
           isModal: true,
           user:  window.sessionStorage.getItem("userName")
       }
   },
   methods:{
       closeModal(){
 this.isModal = false
       }
   }
}
</script>