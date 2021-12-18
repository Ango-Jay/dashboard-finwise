<template>
      <div class="dashboard-content-flex-container">
            <div class="disp-flex">
              <img
                v-lazyload
                data-img-url="/img/profile.jpg"
                class="dashboard-profile-img"
                alt="profile"
              />
              <div class="disp-flex flex-dir-col">
                <p class="disp-flex m-half font-700">{{loanName}}</p>
                <p class="disp-flex ml-half">
                  <span class="font-600 mr-half">Due Date </span> {{dateTaken}}
                </p>
              </div>
            </div>

            <p class="disp-flex">#{{loanAmount}}</p>
          </div>
          <div class="progress dashboard-loader-progress">
            <div
              class="determinate dashboard-loader-determinate"
              style="width: 0%"
            ></div>
          </div>
          <div class="disp-flex justify-end">
            <p>Amount left: #{{loanAmount}}</p>
          </div>
</template>

<script>
export default {
    name: "Loans",
    props:["loanName","dateTaken","loanAmount"]
}
</script>