  <template>
  <div>
    <nav>
      <div class="nav-wrapper dashboard-nav">
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"
          ><i class="material-icons">menu</i></a
        >
        <ul v-if="userLoggedIn" class="right show-on-medium-and-up hide-on-small-and-down">
          <!-- <li class="ml-2">
            <div class="disp-flex align-items-center">
                 <span style=" background-color:#707070; border-radius:50%; display:flex; justify-items:center; align-items:center; margin:0 1rem; padding:.25rem">       <i style="color: #cc3507; line-height:28px; height:28px; width:28px; text-align:center" class="material-icons"
                >notifications</i
              ></span>
              <img
                v-lazyload
                data-img-url="/img/profile.jpg"
                class="dashboard-profile-img disp-flex"
                alt="profile"
              />
             
           
       
            </div>
          </li> -->
          <!-- <li><button @click="logOutUser" class="waves-effect waves-light btn login-button ml-2" >Log out</button></li> -->
        </ul>
         <div class="disp-flex align-items-center" style="height:100%">
                <span  style="margin:0 auto 0 0; display: flex" class="hide-on-med-and-down">
                  <img
                v-lazyload
                data-img-url="/img/profile.jpg"
                class="dashboard-profile-img disp-flex"
                alt="profile"
               
              />
              <p  class="disp-flex m-none">{{userName}}</p>
              </span>
              <span class=" disp-flex"  style="margin:0 0 0 auto">
                 <span style=" background-color:#707070; border-radius:50%; display:flex; justify-items:center; align-items:center; margin:0 1rem; padding:.25rem">       <i style="color: #cc3507; line-height:28px; height:28px; width:28px; text-align:center" class="material-icons"
                >notifications</i
              ></span>
               <img
                v-lazyload
                data-img-url="/img/profile.jpg"
                class="dashboard-profile-img disp-flex hide-on-large-only"
                alt="profile"
               style="margin:0 1rem 0 0"
              />
              </span>
            
              <!-- <p  class="disp-flex m-none">{{userName}}</p> -->
           
       
            </div>
      </div>
    </nav>


    <ul v-if="userLoggedIn"  class="sidenav dashboard-sidenav" id="mobile-demo">
      <li>
        <div class="mt-3">
          <h4 class="center-align disp-flex align-items-center justify-center"><img class="dash-logo" src="/img/logo.png" alt="logo" /><span>FinWise</span></h4>
          
        </div>
      </li>

      <!-- <li class="hide-on-med-and-up show-on-small">
        <div class="disp-flex p-1">
          <img
            v-lazyload
            data-img-url="/img/profile.jpg"
            class="dashboard-profile-img"
            alt="profile"
          />
          <div class="disp-flex justify-space-between">
            <p class="disp-flex">{{userName}}</p>
            <i
              style="color: #cc3507; padding-left: 2rem; padding-top: 1.7rem"
              class="material-icons disp-flex"
              >notifications</i
            >
          </div>
        </div>
      </li> -->

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
    <ul v-else class="sidenav dashboard-sidenav" id="mobile-demo">
      <li>
        <div class="mt-3">
          <h4 class="center-align">FinWise</h4>
        </div>
      </li>
       <li>
        <a href="sass.html"
          >Home</a
        >
      </li>
      <li>
        <a href="sass.html">About</a>
      </li>
      <li>
        <a href="sass.html">Contact</a>
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
])
  }
};
</script>