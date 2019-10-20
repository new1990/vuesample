<template>
  <div class="hello">
    <detail-box
            v-bind:key="info.id"
            v-bind:title="info.title"
            v-bind:content="info.content"></detail-box>
  </div>

</template>



<script>
import axios from 'axios'
import DetailBox from "@/components/DetailBox.vue";

export default {
  name: 'UserList',
  components: {
    DetailBox
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      info: null,
        posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ]
    }
  }
  ,
  mounted () {
    axios
      .get('http://192.168.99.100:3000/posts/'+ this.$route.params.id)
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
