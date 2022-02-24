<template>
  <div class="dashboard-dashboard">
    <ul class="dashboard-sidenav">
        <li>
   
          <h5 class="center-align disp-flex align-items-center "><img class="dash-logo" src="/img/logo.png" alt="logo" /><span>FinWise</span></h5>
          
       
      </li>
      <li class="active-link">
        <a href="sass.html"><i class="material-icons">home</i> Home</a>
      </li>

      <li>
        <a href="badges.html"
          ><i class="material-icons">assignment</i> Budget</a
        >
      </li>
      <li>
        <a href="collapsible.html"
          ><i class="material-icons">send</i> Transactions</a
        >
      </li>
      <li>
        <a href="mobile.html"
          ><i class="material-icons">subscriptions</i> Subscriptions</a
        >
      </li>
      <li>
        <a href="sass.html"><i class="material-icons">attach_money</i> Loans</a>
      </li>
      <li>
        <a href="sass.html"
          ><i class="material-icons">multiline_chart</i> Reports</a
        >
      </li>
      <li>
        <a href="sass.html"
          ><i class="material-icons">attach_money</i> Savings</a
        >
      </li>
      <li>
        <a href="sass.html"
          ><i class="material-icons">monetization_on</i> Financial Advice</a
        >
      </li>
      <li>
        <a href="sass.html"><i class="material-icons">person</i> Account</a>
      </li>
      <li>
        <a href="sass.html"><i class="material-icons">settings</i> Settings</a>
      </li>
        <li style="display:flex"><button @click="logOutUser" class="waves-effect waves-light btn login-button" style="margin:2rem auto">Log out</button></li>
    </ul>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  name: "SideDashboard",
 methods:{
...mapActions([
  "logOutUser"
])
  }
};
</script>