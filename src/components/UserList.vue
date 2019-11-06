<template>
  <div class="hello">

    <div class="result_erea">

    </div>

    <dl v-if="info">
      <detail-box
              v-bind:key="info.id"
              v-bind:title="info.title"
              v-bind:cdata="info.cdata"
              v-bind:cdata_count="info.cdata.length"
              v-bind:deadline_flg="info.show_flg"

              v-bind:content="info.content"></detail-box>
     </dl>
      <!-- コメント投稿 -->
     <coment-box
        desighn="button"></coment-box>
     <!-- コメント投稿 -->
     <dl v-if="info.comment_data">
     <!-- コメント内容 -->
     <coment-list v-for="comment in info.comment_data"
          v-bind:id="comment.comment_id"
          v-bind:body="comment.comment_body"
                  ></coment-list>
      </dl>
    <!-- コメント内容 -->




  </div>

</template>



<script>
import axios from 'axios'
import DetailBox from "@/components/DetailBox.vue";
import ComentBox from "@/components/ComentBox.vue";
import ComentList from "@/components/ComentList.vue";

export default {
  name: 'UserList',
  components: {
    DetailBox,
    ComentBox,
    ComentList
  },
  data () {
    return {

      info: null,
      id: null,
      title: null,
      cdata: null,
      content: null,
      comment_data:null,
    }
  }
  ,
  mounted () {
    axios
      .get('//13.115.98.196:3000/posts/'+ this.$route.params.id)
      .then(response => (this.info = response.data))
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
