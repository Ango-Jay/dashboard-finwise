<template>
  <footer class="page-footer dashboard-page-footer">
    <div class="container">
      <div class="row" style="margin-bottom:0px">
        <div class="col l6 s12">
          <h5 class="white-text">FinWise</h5>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
       &copy;{{getYear()}} Copyright
        <a class="grey-text text-lighten-4 right" href="#!">AngoJay</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  methods:{
    getYear(){
         const currentYear = new Date().getFullYear();
    return currentYear;
    }
  }
};
</script>