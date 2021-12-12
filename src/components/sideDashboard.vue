<template>
  <div class="dashboard-dashboard">
    <ul class="dashboard-sidenav">
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
  </div>
</template>

<script>
export default {
  name: "SideDashboard"
};
</script>