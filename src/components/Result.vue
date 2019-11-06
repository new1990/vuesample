<template>
  <div class="hello">

    <div class="tab_wrap">
  	<input id="tab1" type="radio" name="tab_btn" >
  	<input id="tab2" type="radio" name="tab_btn" checked>
  	<!-- <input id="tab3" type="radio" name="tab_btn"> -->

  	<div class="tab_area">
      <router-link to="/">
  		    <label class="tab1_label" for="tab1">投票受付中</label>
      </router-link>

  		<label class="tab2_label" for="tab2">結果</label>

  		<!-- <label class="tab3_label" for="tab3">tab3</label> -->
  	</div>

  		<div class="panel_area" >
        <div id="panel2" class="tab_panel">

            <cont-box v-for="post in info"
                    v-bind:key="post.id"
                    v-bind:id="post.id"
                    type ="chart"
                    v-bind:cdata="post.cdata"
                    v-bind:cdata_count="post.cdata.length"
                    v-bind:title="post.title"
                    v-bind:content="post.content"
                      v-bind:deadline="post.deadline"
                    ></cont-box>


                <!-- InfiniteLoadingコンポーネントを定義 -->

                <infinite-loading
                  ref="infiniteLoading"
                  spinner="bubbles"
                  @infinite="infiniteHandler">
                  <span slot="no-more"></span>
                </infinite-loading>

  		</div>
  		<!-- <div id="panel3" class="tab_panel">
  			<p>panel3</p>
  		</div> -->
  	</div>
  </div>






  </div>
</template>



<script>

import axios from 'axios'
import ContBox from "@/components/ContBox.vue";
import InfiniteLoading from 'vue-infinite-loading';
const api = '//13.115.98.196:3000/result'



export default {
  name: 'Result',
  components: {
    ContBox,
    InfiniteLoading
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',

        page: 1,
        info: [],

    }
  }
  ,
  // mounted () {
  //   // MEMO: 初回表示時にデータ取得するため実行
  //
  //
  // },
  methods: {
    infiniteHandler($state) {

      axios.get(api, {
        params: {
          page: this.page,
        },
      }).then(({ data }) => {
        if (data.length) {
          this.page += 1
          this.info.push(...data)
          $state.loaded()
        } else {
          $state.complete()
        }
      }).catch((err) => {
          $state.complete()
      })

    },

  }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



.tab_wrap{width:500px; margin:80px auto;}
input[type="radio"]{display:none;}
.tab_area{font-size:0; margin:0;}
.tab_area label{width:248px; margin:0 1px; display:inline-block; padding:12px 0; color:#999; background:#ddd; text-align:center; font-size:13px; cursor:pointer; transition:ease 0.2s opacity;}
.tab_area label:hover{opacity:0.5;}
/* .panel_area{background:#fff;} */
.tab_panel{width:100%; padding:20px 0; display:none;}
.tab_panel p{font-size:14px; letter-spacing:1px; text-align:center;}

#tab1:checked ~ .tab_area .tab1_label{background:#fff; color:#000;}
#tab1:checked ~ .panel_area #panel1{display:block;}
#tab2:checked ~ .tab_area .tab2_label{background:#fff; color:#000;}
#tab2:checked ~ .panel_area #panel2{display:block;}
#tab3:checked ~ .tab_area .tab3_label{background:#fff; color:#000;}
#tab3:checked ~ .panel_area #panel3{display:block;}

</style>
