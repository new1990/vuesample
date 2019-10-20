<template>
  <header id="header">
    <nav id="header-nav">
      <div class="roof-nav-contents">
        <div class="text-links">

        </div>
        <div class="icon-links">
          <div class="icon-link-wrapper">
            <router-link to="/new"><span class="fa fa-pencil square-o mr-1"></span>投稿する</router-link>
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
    background-color: black;
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

</style>
