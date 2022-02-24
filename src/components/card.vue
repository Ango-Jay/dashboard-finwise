<template>
<div  style="display:flex;justify-content:space-between;padding:0.5rem 1rem;background-color:#303030;border-radius:20px">
  <div>
  <p>{{cardName}}</p>
    <p style="font-size:12px;color:#cc3507;">{{cardType}}</p>
  </div>

  <img
  v-if="cardType == 'MasterCard'"
          v-lazyload
          data-img-url="/img/card_ppc-voyage-bronze.png"
          class="dashboard-card-img"
          alt="atm card"
        />
         <img
  v-else-if="cardType == 'Visa'"
          v-lazyload
          data-img-url="/img/card_ppc-voyage-bronze.png"
          class="dashboard-card-img"
          alt="atm card"
        />
        
        </div>

</template>

<script>
export default {
    name:"Card",
    props:[
      "cardType","cardName"
    ]
}
</script>