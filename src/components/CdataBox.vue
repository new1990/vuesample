<template>
  <div :class="[className, count_val]" >
      <div class="msg_hide">
        {{result_data_c.text}}
      </div>

      <template v-if="className === 'cbox'">
        <div  v-on:click="update_count('{{id}}')">

          <p>{{ id }} {{ title }}</p>
        </div>
      </template>
      <template v-else>
        <div>
          <p>{{ id }} {{ title }}</p>

        </div>
      </template>

  </div>

</template>



<script>
import axios from 'axios'
export default {
  name: 'CdataBox',
  data () {
    return {
      c_id : null,
      result_data_c: '',
    }
  },
 props: ['id','title','count_val','className'],
 methods : {
   update_count: function (event) {
     axios.put('http://13.115.98.196:3000/posts/'+ this.id, { task: { count: 1} }).then((response) => {
       // データ受け取り
        (this.result_data_csl = response.data)
        if(this.result_data_c.color == 'green'){
            $(".result_erea").addClass('msg_cover');
        }else{
            $(".result_erea").addClass('error_msg_cover');
        }
       $(".result_erea").addClass('msg_appear');

       // setTimeout(function() {
       //     $('.result_erea').removeClass('msg_appear');
       // }, 3000);
       // データ受け取り
       }, (error) => {
         console.log(error);
      });

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
.cbox{
  padding: 0.5em 1em;
  margin: 2em 0;
  background: #f0f7ff;
  border: dashed 2px #5b8bd0;
  display: inline-block;
}

.cbox:hover{
    opacity: 0.6;
}

.fatbox{
  padding: 4px;
   margin: 5px 0;
   font-weight: bold;
   color: #6091d3;/*文字色*/
   background: #FFF;
   border: solid 1px #6091d3;/*線*/
   border-radius: 10px;
}

.fatbox p {
    margin: 0;
    padding: 0;
}

.three{
  padding: 4px;
   margin: 5px 0;
   font-weight: bold;
   color: #6091d3;/*文字色*/
   background: #FFF;
   border: solid 1px #6091d3;/*線*/
   border-radius: 10px;
  width:95%;
}

.forth{
  padding: 4px;
   margin: 5px 0;
   font-weight: bold;
   color: #6091d3;/*文字色*/
   background: #FFF;
   border: solid 1px #6091d3;/*線*/
   border-radius: 10px;
   width:40%;
}
</style>
