<template>
  <div class="dashboard-content-flex-container">
    <div class="disp-flex">
      <img src="/img/profile.jpg" class="dashboard-profile-img" alt="profile" />
      <div class="disp-flex flex-dir-col">
        <p class="disp-flex m-half font-700">{{ userName }}</p>
        <p class="disp-flex ml-half">{{ userTransactDate }}</p>
      </div>
    </div>

    <p class="disp-flex" :style="buttonStyle">
      {{ userTransactAmount }}
    </p>
  </div>
</template>
<script>
export default {
  props: ["userName", "userTransactAmount", "userTransactDate", "button-style"],
  name: "Transaction"
};
</script>