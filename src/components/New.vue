<template>
<div class="box">
  <InputBox/>
</div>
</template>



<script>
import InputBox from "@/components/InputBox.vue";
export default {
  name: 'New',
  components: {
    InputBox
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
  // mounted () {
  //   axios
  //     .get('http://192.168.99.100:3000/posts')
  //     .then(response => (this.info = response.data))
  // }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
