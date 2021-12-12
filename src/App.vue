<template> 
  <DashBoard  />
</template>

<script>
import "./styles/main.scss";
import "materialize-css/dist/css/materialize.min.css";
import DashBoardVue from "./pages/dashboard.vue";
export default {
  name: "App",
  components: {
    DashBoard: DashBoardVue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #252525;
}
</style>
