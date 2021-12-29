  <template>
  <div>
    <nav>
      <div class="nav-wrapper dashboard-nav">
        <a href="#!" class="brand-logo right mr-3">FinWise</a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"
          ><i class="material-icons">menu</i></a
        >
        <ul v-if="userLoggedIn" class="left show-on-medium-and-up hide-on-small-and-down">
          <li class="ml-2">
            <div class="disp-flex align-items-center">
              <img
                v-lazyload
                data-img-url="/img/profile.jpg"
                class="dashboard-profile-img disp-flex"
                alt="profile"
              />
              <p  class="disp-flex m-none">{{userName}}</p>
              <i style="color: #cc3507" class="material-icons disp-flex ml-2"
                >notifications</i
              >
            </div>
          </li>
          <li><button @click="logOutUser" class="waves-effect waves-light btn login-button">Log out</button></li>
        </ul>
      </div>
    </nav>


    <ul v-if="userLoggedIn" class="sidenav dashboard-sidenav" id="mobile-demo">
      <li>
        <div class="mt-3">
          <h4 class="center-align">FinWise</h4>
        </div>
      </li>
<li><button @click="logOutUser" class="waves-effect waves-light btn login-button">Log out</button></li>
      <li class="hide-on-med-and-up show-on-small">
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
      <li>
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
      userName: window.localStorage.getItem("userName")
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
  if(window.localStorage.getItem("email") && window.localStorage.getItem("userName")){
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