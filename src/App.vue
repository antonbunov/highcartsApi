
<template>

  <div id="app">
    <div class="title-row">
      <p>Set the chart title here:</p>
      <input type="text" v-model="title">
    </div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
  
  </template>
  
  <style scoped>
  .title-row {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #eee;
    padding: 20px;
  }
  </style>
  
  
  
  
  <script >
  export default{
    data(){
      return{
        chartOptions: {
          chart: {
            type: 'spline'
          },
          title: {
            text: 'Entire title'
          },
          series: [{
            data: [10, 0, 8, 2, 6, 4, 5, 5]
          }]
        },
        title: ''
      }
    },
  
    methods:{
      currentRelate(today, yesterday){
        this.relate = (today - yesterday) / yesterday * 100 
        return (today - yesterday) / yesterday * 100 
      }
    },
    watch: {
      title(newValue) {
        if (newValue === '') {
          this.chartOptions.title.text = 'Entire title'
        } else {
          this.chartOptions.title.text = newValue
        }
  
      }
    }
  }

  </script>