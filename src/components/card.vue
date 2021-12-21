<template>
<div>
  <p>{{cardName}}</p>
  <img
  v-if="cardType == 'MasteCard'"
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