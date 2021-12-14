<template>
  <NavBar />
  <div class="dashboard-border-flex-container">
    <div class="dashboard-special">
      <div class="dashboard-border">
        <div class="dashboard-title-flex-container">
          <h4 class="disp-flex">Cards</h4>
          <h4 class="disp-flex"><i class="material-icons">add</i></h4>
        </div>
        <img
          v-lazyload
          data-img-url="/img/card_ppc-voyage-bronze.png"
          class="dashboard-card-img"
          alt="atm card"
        />
      </div>
      <div class="dashboard-border">
        <div class="dashboard-title-flex-container">
          <h4 class="disp-flex">All Trasactions</h4>
          <h4 class="disp-flex"><i class="material-icons">add</i></h4>
        </div>
        <User
          userName="Daniel Yellow"
          userTransactAmount="120,000"
          userTransactDate="21/10/21"
          button-style="color: #f03c3c"
        />
        <User
          userName="Anthony Green"
          userTransactAmount="20,000"
          userTransactDate="01/10/21"
          button-style="color:  #f03c3c"
        />
        <User
          userName="Victor Red"
          userTransactAmount="60,000"
          userTransactDate="11/10/21"
          button-style="color: green"
        />
      </div>
      <div class="dashboard-border hide-on-med-and-down">
        <div class="dashboard-title-flex-container">
          <h4 class="disp-flex">Report</h4>
          <h4 class="disp-flex"><i class="material-icons">add</i></h4>
        </div>
        <img
          v-lazyload
          data-img-url="/img/graph.png"
          class="dashboard-graph-img"
          alt="graph"
        />
      </div>
    </div>
    <div class="dashboard-special">
      <div class="dashboard-border hide-on-large-only">
        <div class="dashboard-title-flex-container">
          <h4 class="disp-flex">Report</h4>
          <h4 class="disp-flex"><i class="material-icons">add</i></h4>
        </div>
        <img
          v-lazyload
          data-img-url="/img/graph.png"
          class="dashboard-graph-img"
          alt="graph"
        />
      </div>
      <div class="dashboard-border">
        <div class="dashboard-title-flex-container">
          <h4 class="disp-flex">Budget</h4>
          <h4 class="disp-flex"><i class="material-icons">add</i></h4>
        </div>
        <div class="dashboard-content-flex-container">
          <p class="m-none">Cash</p>
          <p class="disp-flex m-none">#24,000</p>
        </div>
        <div class="divider orange-color m-half"></div>

        <Transaction />
      </div>
      <div class="dashboard-special-2">
        <div class="dashboard-border">
          <div class="dashboard-title-flex-container">
            <h4 class="disp-flex">Suscriptions</h4>
            <h4 class="disp-flex"><i class="material-icons">add</i></h4>
          </div>
          <Suscriptions
            suscriptionName="DSTV"
            suscriptionDate="Due 23/02/22"
            suscriptionPrice="23,000"
          />
          <Suscriptions
            suscriptionName="Wifi"
            suscriptionDate="Due 30/12/22"
            suscriptionPrice="37,000"
          />
          <Suscriptions
            suscriptionName="Netflix"
            suscriptionDate="Due 14/02/22"
            suscriptionPrice="27,000"
          />
        </div>
        <div class="dashboard-border">
          <div class="dashboard-title-flex-container">
            <h4 class="disp-flex">Loans</h4>
            <h4 class="disp-flex"><i class="material-icons">add</i></h4>
          </div>
          <div class="dashboard-content-flex-container">
            <div class="disp-flex">
              <img
                v-lazyload
                data-img-url="/img/profile.jpg"
                class="dashboard-profile-img"
                alt="profile"
              />
              <div class="disp-flex flex-dir-col">
                <p class="disp-flex m-half font-700">Pay kids school fee's</p>
                <p class="disp-flex ml-half">
                  <span class="font-600 mr-half">Date taken </span> 21/05/21
                </p>
              </div>
            </div>

            <p class="disp-flex">#240,000</p>
          </div>
          <div class="progress dashboard-loader-progress">
            <div
              class="determinate dashboard-loader-determinate"
              style="width: 70%"
            ></div>
          </div>
          <div class="disp-flex justify-end">
            <p>Amount left: #40,000</p>
          </div>
        </div>
      </div>
      <div class="dashboard-special-2">
        <div class="dashboard-border">
          <div class="dashboard-title-flex-container">
            <h4>Savings</h4>
            <h4><i class="material-icons">add</i></h4>
          </div>
          <div class="disp-flex">
            <div>
              <div class="dashboard-circular-loader">
                <p class="font-700">100%</p>
              </div>
            </div>

            <div>
              <p>Savings Target: #200,000</p>
              <p>Total Reached: #200,000</p>
            </div>
          </div>
        </div>

        <div class="dashboard-border">
          <div class="dashboard-title-flex-container">
            <h4 class="disp-flex">Financial Advice</h4>
            <h4 class="disp-flex"><i class="material-icons">add</i></h4>
          </div>
          <blockquote class="dashboard-blockquote mb-4" cite="Nigerians">
            Try dey enjoy life.<br />
            Problem no dey finish.
          </blockquote>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script>
import UserVue from "../components/user.vue";
import FooterVue from "../components/footer.vue";
import NavBarVue from "../components/navBar.vue";
import TransactionVue from "../components/transaction.vue";
import SuscriptionsVue from "../components/suscriptions.vue";
export default {
  name: "DashBoard",
  components: {
    User: UserVue,
    Footer: FooterVue,
    NavBar: NavBarVue,
    Transaction: TransactionVue,
    Suscriptions: SuscriptionsVue
  }
};
</script>

