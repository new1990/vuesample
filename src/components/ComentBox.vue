<template>
  <div class="comment">


      <div :class="desighn" >
          <button v-on:click="show" class="btn-flat-dashed-border">コメントする</button>
          <modal name="hello-world">
            <div class="cp_iptxt">
              <p>コメント</p>
              <button class="del_icon btn-gradient-radius" v-on:click="hide">閉じる</button>
              <label class="ef">
                <textarea  v-model="comment"></textarea>
                <button class="btn-flat-dashed-filled" v-on:click="createNewComment">投稿</button>
              </label>

            </div>
         </modal>
      </div>
    <!-- <router-link to="{ name: 'content', params: { id: 1 }}">リストへ</router-link> -->

  </div>
</template>



<script>
import axios from 'axios'
export default {
  name: 'ComentBox',
 props: ['desighn'],
 data: function(){ // データを返す関数にする
        return {
          comment: '',
          result_data: '',
    }
  },
 methods: {
   show : function() {
     this.$modal.show('hello-world');
   },
   hide : function () {
     this.$modal.hide('hello-world');
   },

   createNewComment: function(){
     axios.post('http://192.168.99.100:3000/comment_create', { comment: { body: this.comment,posts_id: this.$route.params.id } }).then((response) => {
       // データ受け取り
        (this.result_data = response.data)
        if(this.result_data.color == 'green'){
            $(".msg_hide").addClass('msg_cover');
        }else{
            $(".msg_hide").addClass('error_msg_cover');
        }
       $(".msg_hide").addClass('msg_appear');
       setTimeout(function() {
           $('.msg_hide').removeClass('msg_appear');
       }, 3000);
       // データ受け取り
       }, (error) => {
         console.log(error);
      });
   },
 },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.btn-flat-dashed-border {
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  color: #67c5ff;
  border: dashed 1px #67c5ff;
  border-radius: 3px;
  transition: .4s;
}

.btn-flat-dashed-border:hover {
  border-style: dotted;
  color: #679efd;
}


.cp_iptxt {
	position: relative;
	width: 80%;
	margin: 40px ;
}
.cp_iptxt textarea {
	font: 15px/24px sans-serif;
	box-sizing: border-box;
	width: 100%;
  height: 150px;
	padding: 0.3em;
	transition: 0.3s;
	letter-spacing: 1px;
	color: #aaaaaa;
	border: 1px solid #1b2538;
	border-radius: 4px;
}
.ef textarea:focus {
	border: 1px solid #da3c41;
	outline: none;
	box-shadow: 0 0 5px 1px rgba(218,60,65, .5);
}

.del_icon {
    position: absolute;
    top: 0%;
    right: 0%;
    color: #808080;
}

.btn-gradient-radius {
  display: inline-block;
  padding: 7px 20px;
  border-radius: 25px;
  text-decoration: none;

}

.btn-gradient-radius:hover {

}



</style>
