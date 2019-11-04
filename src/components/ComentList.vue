<template>
  <div class="comment_erea comment">
    <p>{{ body }}</p>
    <!-- <p>{{ content }}</p> -->

    <!-- <router-link to="{ name: 'content', params: { id: 1 }}">リストへ</router-link> -->

  </div>
</template>



<script>
export default {
  name: 'ComentList',

 props: ['id','body'],

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.comment {
    padding: 1rem;
    margin-top:5px;
}

.comment_erea {
    -webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);
    min-height: 55px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);
}

.box:hover{
    opacity: 0.6;
}

</style>
