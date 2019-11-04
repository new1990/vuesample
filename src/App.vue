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
 },

}
</script>


<style>
html{
  background: #f9f9f9;
}

a {
text-decoration: none;
color: black;
}

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

input{
  width: 100%;
  max-width: 400px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

/*基本スタイル*/
   .msg_cover {
       text-align: center;
       width: 59%;
       padding: 10px 0;
       height: 60px;
       line-height: 40px;
       font-size: 20px;
       background: green;
       color: white;
       z-index: 1000;
   }

   .error_msg_cover {
       text-align: center;
       width: 59%;
       padding: 10px 0;
       height: 60px;
       line-height: 40px;
       font-size: 20px;
       background: red;
       color: white;
       z-index: 1000;
   }
   /*画面の60px上に置いて見えないようにしておく(デフォルト)*/
   .msg_hide {
       position: fixed;
       top: -100px;
       /*transitionで変化させる属性や変化速度、変化の仕方を記載(消す時)*/
       transition-property:top;
       transition-duration:.6s;
       transition-timing-function:ease-in-out;
   }
   /*画面上部に表示させる*/
   .msg_appear {
       top:0;
       /*transitionで変化させる属性や変化速度、変化の仕方を記載(表示させる時)*/
       transition-property:top;
       transition-duration:.6s;
       transition-timing-function:ease-in-out;
   }

   .btn-flat-dashed-filled {
     display: inline-block;
     padding: 0.5em 1em;
     text-decoration: none;
     color: #67c5ff;
     border: dashed 1px #67c5ff;
     background: #f2fcff;
     border-radius: 3px;
     transition: .4s;
   }

   .btn-flat-dashed-filled:hover {
     background: #cbedff;
     color: #FFF;
   }


  .cp_ipselect {
	overflow: hidden;
	width: 30%;
	margin: 10px 20px 10px 0px;
	text-align: center;
}
.cp_ipselect select {
	width: 100%;
	padding-right: 1em;
	cursor: pointer;
	text-indent: 0.01px;
	text-overflow: ellipsis;
	border: none;
	outline: none;
	background: transparent;
	background-image: none;
	box-shadow: none;
	-webkit-appearance: none;
	appearance: none;
}
.cp_ipselect select::-ms-expand {
    display: none;
}
.cp_ipselect.cp_sl01 {
	position: relative;
	border: 1px solid #bbbbbb;
	border-radius: 2px;
	background: #ffffff;
}
.cp_ipselect.cp_sl01::before {
	position: absolute;
	top: 0.8em;
	right: 0.9em;
	width: 0;
	height: 0;
	padding: 0;
	content: '';
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-top: 6px solid #666666;
	pointer-events: none;
}
.cp_ipselect.cp_sl01 select {
	padding: 8px 38px 8px 8px;
	color: #666666;
}

</style>
