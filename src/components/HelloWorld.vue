<template>
  <div class="hello">
    <cont-box v-for="post in info"
            v-bind:key="post.id"
            v-bind:id="post.id"
            v-bind:title="post.title"
            v-bind:content="post.content"></cont-box>

  </div>
</template>



<script>
import axios from 'axios'
import ContBox from "@/components/ContBox.vue";

export default {
  name: 'HelloWorld',
  components: {
    ContBox
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
      .get('http://192.168.99.100:3000/posts')
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
