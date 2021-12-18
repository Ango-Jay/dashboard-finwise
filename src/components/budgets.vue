<template>
<div class="dashboard-content-flex-container">
          <p class="m-none">Total Cash</p>
          <p class="disp-flex m-none">{{totalCash}}</p>
        </div>
        <div class="divider orange-color m-half"></div>
  <div class="dashboard-content-flex-container">
    <div class="disp-flex">
      <i class="material-icons">assignment_turned_in</i>
      <div class="disp-flex flex-dir-col">
        <p class="disp-flex m-half font-700">{{budgetName}}</p>
        <p class="disp-flex ml-half">{{budgetType}}</p>
      </div>
    </div>

    <p class="disp-flex">{{budgetAmount}}</p>
  </div>

</template>
<script>
export default {
  name: "Budgets",
  props:["totalCash","budgetName","budgetType","budgetAmount"]
};
</script>