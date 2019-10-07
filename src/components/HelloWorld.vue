<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <cont-box v-for="post in posts"
            v-bind:key="post.id"
            v-bind:title="post.title"></cont-box>
    <router-link to="/users">リストへ</router-link>
    {{ info }}

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
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
