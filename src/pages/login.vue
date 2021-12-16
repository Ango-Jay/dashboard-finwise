<template>
  <NavBar />
  <div>
    <div class="container">
      <h1>Login</h1>
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" class="validate" />
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="password" type="password" class="validate" />
            <label for="password">Password</label>
          </div>
        </div>
        <button class="waves-effect waves-light btn">Login</button>
      </form>
    </div>
  </div>
  <Footer />
</template>


<script>
import FooterVue from "../components/footer.vue";
import NavBarVue from "../components/navBar.vue";
export default {
  name: "Login",
  components: {
    Footer: FooterVue,
    NavBar: NavBarVue
  }
};
</script>
<style>
</style>