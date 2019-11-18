<template>
  <header id="header">
    <nav id="header-nav">
      <div class="roof-nav-contents">
        <div class="ferret-logo-area">


        </div>
        <div class="text-links">
          <div class="text-link-wrapper">
            <router-link to="/">投票BOX</router-link>

          </div>
        </div>
        <div class="icon-links">
          <div class="serch-wrapper">
            <form method="get" action="#" class="search_container">
              <input type="text" size="25" placeholder="キーワード検索">
              <input type="submit" value="検索">
              <!-- <input type="submit" value="&#xf002"> -->
            </form>
          </div>

          <div class="icon-link-wrapper">

            <router-link to="/new"><span class="cp_btn">投稿する</span></router-link>
            <!-- <a href="/drafts/new" class="st-Header_postButton px-2 mr-2"></a> -->
          </div>
        </div>
      </div>
    </nav>


  </header>
</template>

<!-- style中身は省略 -->
<style scoped>


#header-nav{
  position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    z-index: 2;

}

.roof-nav-contents{
  display: flex;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border-bottom: 1px solid #eee;
    background: #fff;
    box-shadow: 0 0 3px rgba(0,0,0,.2);
}

.roof-nav-contents .icon-links {
    display: flex;
    margin-left: auto;

}

.roof-nav-contents .icon-links .icon-link-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    width: 75px;
    margin-right:30px;
}

.serch-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    width: 250px;
    margin:0 20px;
}

.st-Header_postButton {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    background-color: #3f9200;
    color: #fff;
    border-radius: 4px;
    font-size: 1.2rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.search_container{
  box-sizing: border-box;
  position: relative;
  border: 1px solid #999;
  display: block;
  padding: 3px 10px;
  border-radius: 20px;
  height: 2.3em;
  width: 265px;
  overflow: hidden;
}
.search_container input[type="text"]{
  border: none;
  height: 2.0em;
}
.search_container input[type="text"]:focus {
  outline: 0;
}
.search_container input[type="submit"]{
  cursor: pointer;
  font-family: FontAwesome;
  border: none;
  background: #3879D9;
  color: #fff;
  position: absolute;
  width: 3.5em;
  height: 3.0em;
  right:0px;
  top: -3px;
  outline : none;
}

span.cp_btn {
	position: relative;
	display: block;
	width: 80px;
	padding:6px 10px;
	text-align: center;

	text-decoration: none;
	color: #FFF;
	text-shadow: 0 0 5px rgba(255, 255, 255, 0.0);
	background: #999;
	transition: .4s;
	border-radius: 4px;
}
span.cp_btn:hover {
	text-shadow: -6px 0px 15px rgba(255, 255, 240, 0.83), 6px 0px 15px rgba(255, 255, 240, 0.83);
	transition: .4s;
}



.text-links {
    display: flex;
}

.text-link-wrapper {
    display: flex;
    align-items: center;
    position: relative;

    padding: 15px 10px;
    font-size: 1.4rem;
    font-weight: bold;
}

.ferret-logo-area {
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0 30px;
}

</style>
