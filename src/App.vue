<template>
  <div id="app">
    <HeaderItem/>
    <div class="main_content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderItem from './components/HeaderItem'
export default {
  name: 'App',
  components : {
   HeaderItem
 }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;


}

.main_content{
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 100px;
}
</style>
