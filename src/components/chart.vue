<template>
  <!--   <div v-if="chartData">   
        <img
          v-lazyload
          data-img-url="/img/graph.png"
          class="dashboard-graph-img"
          alt="graph"
        /></div>  -->
  <div>
    <!--   <div class="small" v-if="datacollection">
          <line-chart :chart-data="datacollection" ></line-chart>
        </div>
          <button @click="fillData">Randomize</button> -->

    <canvas id="myChart" width="400" height="400">
      <p>Start your financial journey today</p>
    </canvas>
  </div>
</template>

<script>
// import LineChart from "./lineChart"
import { Chart, registerables } from "chart.js";
export default {
  name: "Chart",
  created() {
    Chart.register(...registerables);
  },
  methods: {
    createChart() {
      const chartId = document.getElementById("myChart");
      if (chartId) {
        const ctx = chartId.getContext("2d");
        const myChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
              {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)"
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)"
                ],
                borderWidth: 1
              }
            ]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
        return myChart;
      } else {
        return null;
      }
    }
  },
  mounted() {
    return this.createChart();
  },

  // props:["chartData", "options"],
  /* components:{
  LineChart
},

data () {
      return {
        datacollection: null
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    } */
};
</script>
