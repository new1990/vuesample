<template>
  <div class="chart" >

        <div class="chart_bar" :style="styles">
          <p> {{ width }}% {{ title }}</p>
        </div>


  </div>

</template>



<script>

export default {
  name: 'ChartGraph',
  data () {
    return {

    }
  },
 props: ['id','chose_count','total','title'],
 methods : {
   // update_count: function (event) {
   //   axios.put('http://192.168.99.100:3000/posts/'+ this.id, { task: { count: 1} }).then((response) => {
   //
   //     }, (error) => {
   //       console.log(error);
   //    });
   //
   //  }

 },
 computed: {
   // バインドするスタイルを生成
   styles () {
     var width = 0
     if(this.chose_count != 0 && this.total !=0){
       width =  (this.chose_count/this.total) *100 +'%';
     }
     return {'--width': width}

   },
   width () {
     var width = 0
     if(this.chose_count != 0 && this.total !=0){
       width =  (this.chose_count/this.total) *100;
     }
     width = Number(width);
     return Math.round(width);
   }
 },

 // computed: {
 //   href () {
 //     return this.id
 //   }
 // },
  // data () {
  //   return {
  //     msg: 'これは箱'
  //   }
  // }
}
</script>

<style scoped>

.chart{
  width:100%;

  margin-bottom: 20px;
}

.chart_bar{

  margin-top: 10px;
  font-size:10px;
  height: 20px;
  background-color: rgba(29,161,242,1.00);;
  width: var(--width);
  border-radius: 3px;

}

.chart_bar p{
   padding-top: 3px;
   padding-bottom: 3px;
   padding-left: 3px;
   z-index: 1000;
   text-align: left
}

</style>
