<template>
      <img
          v-lazyload
          data-img-url="/img/graph.png"
          class="dashboard-graph-img"
          alt="graph"
        />
</template>

<script>
export default {
    name:"Chart"
}
</script>