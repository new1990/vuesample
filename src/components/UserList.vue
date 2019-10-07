<template>
  <div class="list">
    <h2>ユーザー一覧ページ</h2>
    <p>{{ msg }}</p>

    <router-link to="/">ホームへ</router-link>
  </div>

</template>

<script>
export default {
  name: 'UserList',
  data(){
    return {
      msg: '頑張ってユーザ一覧を表示します'
    }
  }
}

</script>

<style scoped>
  h1, h2 {
  font-weight: normal;
  color: red;
}
</style>
