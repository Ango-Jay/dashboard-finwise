  <template>
  <div>
    <nav>
      <div class="nav-wrapper dashboard-nav">
      
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"
          ><i class="material-icons">menu</i></a
        >
  <a v-if="userLoggedIn != true" href="#" class="brand-logo"> <img class="dash-logo" src="/img/logo.png" alt="logo" /><span>FinWise</span></a>
        <ul v-if="userLoggedIn != true"  class="right show-on-large hide-on-med-and-down">
       <li>
        <a href="#"
          >Home</a
        >
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      
    </ul>
        <ul v-if="userLoggedIn" class="right hide-on-med-and-down">
   
        </ul>
         <div v-if="userLoggedIn" class="disp-flex align-items-center" style="height:100%">
                <span v-if="userLoggedIn"  style="margin:0 auto 0 0; display: flex" class="hide-on-med-and-down">
           <!--        <img
                v-lazyload
                data-img-url="/img/profile.jpg"
                class="dashboard-profile-img disp-flex"
                alt="profile"
               
              /> -->
              <span style="text-align:center; background-color:#404040;  border-radius:50%; color:#cc3507;margin:auto 0.5rem; display:flex;justify-content:center;height:35px; align-items:center; width:35px">
              <p  class="disp-flex m-none" style="line-height:normal; font-size:20px;">{{getUserSymbol()}}</p></span>
              <p  class="disp-flex m-none">{{userName}}</p>
              </span>
              <span v-if="userLoggedIn" class=" disp-flex"  style="margin:0 0 0 auto">
                 <span style=" background-color:#404040; border-radius:50%; display:flex; justify-content:center; align-items:center; margin:0 1rem; height:35px; width:35px; text-align:center">       <i style="color: #cc3507; line-height:normal; height:auto; width:auto; text-align:center" class="material-icons"
                >notifications</i
              ></span>
          <!--      <img
                v-lazyload
                data-img-url="/img/profile.jpg"
                class="dashboard-profile-img disp-flex hide-on-large-only"
                alt="profile"
               style="margin:0 1rem 0 0"
              /> -->
              <span      class=" hide-on-large-only" style="text-align:center; background-color:#404040;  border-radius:50%; color:#fff;margin:auto 0.5rem; display:flex;justify-content:center;height:35px; align-items:center; width:35px">
              <p  class="disp-flex m-none" style="line-height:normal; font-size:20px;">{{getUserSymbol()}}</p></span>
              </span>
            
              <!-- <p  class="disp-flex m-none">{{userName}}</p> -->
           
       
            </div>
      </div>
    </nav>


    <ul v-if="userLoggedIn"  class="sidenav dashboard-sidenav" id="mobile-demo">
      <li style="margin:0 0 3rem 0;">
        <div class="mt-3">
          <h4 class="center-align disp-flex align-items-center justify-center"><img class="dash-logo" src="/img/logo.png" alt="logo" /><span>FinWise</span></h4>
          
        </div>
      </li>



      <li>
        <form class="dashboard-search">
          <div class="input-field">
            <input id="search" type="search" placeholder="Search" required />
            <label class="label-icon" for="search"
              ><i
                style="color: #cc3507; padding-top: 0.8rem"
                class="material-icons"
                >search</i
              ></label
            >
            <i
              style="color: #cc3507; padding-top: 0.7rem"
              class="material-icons"
              >close</i
            >
          </div>
        </form>
      </li>
      <li class="active-link">
        <a href="#"><i class="material-icons">home</i> Home</a>
      </li>

      <li>
        <a href="#"
          ><i class="material-icons">assignment</i> Budget</a
        >
      </li>
      <li>
        <a href="#"
          ><i class="material-icons">send</i> Transactions</a
        >
      </li>
      <li>
        <a href="#"
          ><i class="material-icons">subscriptions</i> Subscriptions</a
        >
      </li>
      <li>
        <a href="#"><i class="material-icons">attach_money</i> Loans</a>
      </li>
      <li>
        <a href="#"
          ><i class="material-icons">multiline_chart</i> Reports</a
        >
      </li>
      <li>
        <a href="#"
          ><i class="material-icons">attach_money</i> Savings</a
        >
      </li>
      <li>
        <a href="#"
          ><i class="material-icons">monetization_on</i> Financial Advice</a
        >
      </li>
      <li>
        <a href="#"><i class="material-icons">person</i> Account</a>
      </li>
      <li>
        <a href="#"><i class="material-icons">settings</i> Settings</a>
      </li>
      <li style="display:flex"><button @click="logOutUser" class="waves-effect waves-light btn login-button" style="margin:2rem auto">Log out</button></li>
    </ul>
    <ul v-else class="sidenav dashboard-sidenav" id="mobile-demo">
      <li>
        <div class="mt-3">
          <h4 class="center-align disp-flex align-items-center justify-center"><img class="dash-logo" src="/img/logo.png" alt="logo" />FinWise</h4>
        </div>
      </li>
       <li>
        <a href="#"
          >Home</a
        >
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      
    </ul>
  </div>
</template>
<script>
import M from "materialize-css";
import {mapState,mapActions} from "vuex"

export default {
  name: "NavBar",
  data(){
    return{
      userName: window.sessionStorage.getItem("userName")
    }
  },
  mounted() {
     const elems = document.querySelectorAll(".sidenav");
     const instances = M.Sidenav.init(elems);
     return instances;
     },
  computed:{
  ...mapState([
"userEmail"
  ]),
userLoggedIn(){
  if(window.sessionStorage.getItem("email") && window.sessionStorage.getItem("userName")){
  return true
  }
  else{
   return false
  }
}
  },
  methods:{
...mapActions([
  "logOutUser"
]),
getUserSymbol(){
 const nameArray =  this.userName.split("")
 const userSymbol = nameArray[0].toUpperCase()
 return userSymbol
}
  }
};
</script>