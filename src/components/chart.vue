<template>
   <div v-if="chartData">   
        <img
          v-lazyload
          data-img-url="/img/graph.png"
          class="dashboard-graph-img"
          alt="graph"
        /></div> 
</template>

<script>
export default {
    name:"Chart",
    props:["chartData"]
}
</script>