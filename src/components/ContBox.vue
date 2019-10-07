<template>
  <div class="hello">
  
    <p>{{ title }}</p>
  </div>
</template>



<script>

export default {
  name: 'ContBox',
 props: ['title'],
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

</style>
