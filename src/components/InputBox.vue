<template>
  <div class="input">
    <input v-model="title"><br>
    <input v-model="content"><br>
    <button v-on:click="createNewUser">作成</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
name: 'InputBox',
 props: ['id','form_name','form_detail'],
 data: function(){ // データを返す関数にする
        return {
          task: [],
          title: '',
          content: '',
        }
    },

  methods : {
    createNewUser: function(){
      axios.post('http://192.168.99.100:3000/posts', { task: { title: this.title,content: this.content } }).then((response) => {

        }, (error) => {
          console.log(error);
       });
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
