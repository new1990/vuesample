<template>
  <div class="input">
    <p class="error">
          {{ Validation.loginReult }}
    </p>
    <input placeholder="タイトル" v-model="title"><br>
    <input placeholder="内容" v-model="content"><br>
    <div class="dayhour">

      <div class="cp_ipselect cp_sl01" style="float:left;">
        <select required type="number" name="day" v-model='day'>
                <option value="" hidden>日付設定</option>
                <option v-for="n in 7" v-bind:value="n">{{ n }}</option>
        </select>
      </div>

      <div class="cp_ipselect cp_sl01"　style="float:left;">
        <select required type="number" name="hour" v-model='hour'>
                <option value="" hidden>時間設定</option>
                <option v-for="n in 23" v-bind:value="n">{{ n }}</option>
        </select>
      </div>
    </div>

    <!-- <select type="number" name="day" v-model.number="day">
            <option v-for="n in 7" v-bind:value="n">{{ n }}</option>
    </select> -->

    <br>
      <button class="btn-flat-dashed-filled" v-on:click="createNewUser">作成</button>

    <div v-for="(todo, index) in task" class="form">
    選択肢{{index + 1}}  <input v-model="todo.name"　 placeholder="内容">

      <div v-if="task.length == index + 1" v-on:click="addForm" class="icon icon--plus">
        <span  class="icon__mark"></span>
      </div>
    </div>

    <!-- <div class="commands"> -->

      <!-- <button >追加</button> -->
    <!-- </div> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
name: 'InputBox',
components: {

  },
 props: ['id','form_name','form_detail'],
 data: function(){ // データを返す関数にする
        return {
          task: [{ "name": "" }, { "name": "" }],
          title: '',
          content: '',
          name: '',
          day:'',
          hour:'',
          Validation:{
         loginReult: "",
          },

        }

    },

  methods : {
    createNewUser: function(){
      axios.post('//13.115.98.196:3000/posts', { task: { title: this.title,content: this.content ,day:this.day,hour:this.hour,todo: this.task} }).then((response) => {

        }, (error) => {
          console.log(error);
       });
       this.$router.push({ name: 'HelloWorld', params: { result: 123 }})
    },
    addForm() {
      const additionalForm = {
        name: "",


      }
      var LoginId = false
      if (!this.task) {
       this.Validation.loginReult="選択肢に入力をしてください"
     }
     else {
       console.log(this.task);
       LoginId = true
     }

     if(LoginId == true){
       this.task.push(additionalForm);
     }



    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon {
  position: relative;
  width: 20px;
  height: 20px;
  background: #ccc;
  border-radius: 50%;
  float: right;
}

.icon::before, .icon--plus::after {
  position: absolute;
  top: 9px;
  left: 50%;
  content: '';
  display: inline-block;
  width: 13px;
  height: 13px;
  border-top: 2px solid #fff;
  transform: translateX(-50%);
}

.icon--plus:after {
  top: 3px;
  left: -3px;
  transform: rotate(90deg);
}

.dayhour{
  max-width: 400px;
  margin: 10px auto;
  height: 40px;
}

</style>
