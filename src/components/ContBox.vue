<template>
  <div class="box">
    <router-link :to="{name:'content',params:{id:this.id}}" >
      <p>{{ title }}</p>
      <!-- <p>{{ content }}</p> -->
      <template v-if="type ==='list'">
        <cdata-box v-for="data in cdata"
                v-bind:key="data.chose_id"
                v-bind:id="data.chose_id"
                className='fatbox'
                v-bind:title="data.chose_title"></cdata-box>
        <!-- <a :href="href">リストへ</a> -->
        <div class="deadline">
        <span class="deadline_in">投票期限{{deadline}}</span>
        </div>


      </template>
      <template v-else>
        <chart-graph v-for="data in cdata"
                v-bind:key="data.chose_id"
                v-bind:id="data.chose_id"
                v-bind:chose_count="data.chose_count"
                v-bind:total="total"
                v-bind:title="data.chose_title"></chart-graph>

                <div class="deadline">
                <span class="deadline_in">投票終了日{{deadline}}</span>
                </div>

      </template>

    </router-link>
    <!-- <router-link to="{ name: 'content', params: { id: 1 }}">リストへ</router-link> -->

  </div>
</template>



<script>
import CdataBox from "@/components/CdataBox.vue";
import ChartGraph from "@/components/ChartGraph.vue";

export default {
  name: 'ContBox',
  components: {
    CdataBox,
    ChartGraph,

  },
 props: ['id','title','content','cdata','type','deadline'],
 computed: {
   total: function () {
     var total = 0;
      for(var i = 0; i < this.cdata.length; i++ ){
        total = total + this.cdata[i].chose_count
      }
      return total
    }
 },
  // data () {
  //   return {
  //     msg: 'これは箱'
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.box {
  padding: 0.5em 1em;
   margin: 5px 0;
   font-weight: bold;
   background:#fff;
   /* border: solid 3px #000000; */
   -webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);
}
.box p {
    margin: 0;
    padding: 0;
}

.box:hover{
    opacity: 0.6;
}

.deadline_in{
 color:#C0C0C0;
 font-size: 13px;

 margin-left:60%;


}

.deadline{
  padding-top: 10px;
  padding-bottom: 10px;

}



</style>
