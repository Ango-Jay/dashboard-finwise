<template>
  <div class="dashboard-content-flex-container">
    <div class="disp-flex flex-dir-col">
      <p class="disp-flex m-half font-700">{{ suscriptionName }}</p>
      <p class="disp-flex ml-half red-color">{{ suscriptionDate }}</p>
    </div>

    <p class="disp-flex">{{ suscriptionPrice }}</p>
  </div>
</template>
<script>
export default {

  props: ["suscriptionName", "suscriptionDate", "suscriptionPrice"],
  name: "Suscription",
};
</script>