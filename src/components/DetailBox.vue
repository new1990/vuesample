<template>
  <div class="detailbox">
    <p>{{ title }}</p>
    <p>{{ content }}</p>
  </div>
</template>



<script>

export default {
  name: 'DetailBox',
 props: ['title','content'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.box {
    padding: 0.5em 1em;
    margin: 2em 0;
    font-weight: bold;
    color: #6091d3;/*文字色*/
    background: #FFF;
    border: solid 3px #6091d3;/*線*/
    border-radius: 10px;/*角の丸み*/
}
.box p {
    margin: 0;
    padding: 0;
}

</style>
