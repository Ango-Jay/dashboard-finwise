<template>
 <div>
  <NavBar />
  <div class="login-container">
      <div class="login-title">  <h1>Login</h1></div>
    <div class="container">
      <form class="col s12" @submit.prevent="loginSubmit">
          <div class="row">
          <div class="input-field col s12">
            <input id="name" type="text" class="validate login-input" v-model="name" />
            <label style="color:#fff" for="name">Username</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" class="validate login-input" v-model="email" />
            <label style="color:#fff" for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="password" type="password" class="validate login-input" v-model="password" />
            <label style="color:#fff" for="password">Password</label>
          </div>
        </div>
        <div class="right-align" ><button type="submit" class="waves-effect waves-light btn login-button">Login</button></div>
      </form>
    </div>
  </div>
  <Footer />
 


  </div>
</template>


<script>
import FooterVue from "../components/footer.vue";
import NavBarVue from "../components/navBar.vue";
import {mapActions} from "vuex"
export default {
  name: "Login",
  components: {
    Footer: FooterVue,
    NavBar: NavBarVue
  },
  data(){
    return{
      name:"",
      email: "",
      password: ""
    }
  },
  methods:{
    ...mapActions(["loginUser"]),
    loginSubmit(){
this.loginUser({email:this.email, password: this.password, name: this.name})
    }
  }
};
</script>
<style>
</style>