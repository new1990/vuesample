<template>
  <div class="detailbox">
    <p>{{ title }}</p>
    <p>{{ content }}</p>

    <template v-if="deadline_flg == 1">
      <chart-graph v-for="data in cdata"
              v-bind:key="data.chose_id"
              v-bind:id="data.chose_id"
              v-bind:chose_count="data.chose_count"
              v-bind:total="total"
              v-bind:title="data.chose_title"></chart-graph>

    </template>

      <template v-else>
        <cdata-box v-for="data in cdata"
                v-bind:key="data.chose_id"
                v-bind:id="data.chose_id"
                v-bind:count_val="count_val"
                className='cbox'
                v-bind:title="data.chose_title"></cdata-box>
      </template>

  </div>

</template>



<script>
import CdataBox from "@/components/CdataBox.vue";
import ChartGraph from "@/components/ChartGraph.vue";
export default {
  name: 'DetailBox',
  components: {
    CdataBox,
    ChartGraph,

  },
 props: ['title','content','cdata','cdata_count','deadline_flg'],
 // data: function(){ // データを返す関数にする
 //        return {
 //          cdata_count: '',
 //        }
 //    },

 computed: {
     count_val: function () {
         if(this.cdata_count == 1 || this.cdata_count ==3){
            return 'three'
         }else{
           return 'forth'
         }
     },
     total: function () {
       var total = 0;
        for(var i = 0; i < this.cdata.length; i++ ){
          total = total + this.cdata[i].chose_count
        }
        return total
      },

 },



}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}


.detailbox {
    padding: 0.5em 1em;
    margin: 2em 0;
    font-weight: bold;
    color: black;/*文字色*/
    background: #FFF;
    border: solid 1px black;/*線*/

}




</style>
