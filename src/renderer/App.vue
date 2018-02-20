
<template>
  <div class="wrapper">
    <MainHeader/>
    <MainSidebar/>
    <transition name="fade" mode="out-in">
			
      <router-view/>
    </transition>
    <MainFooter/>
    <MainSetting/>
  </div>
</template>

<script>
import MainHeader from './libs/MainHeader'
import MainSidebar from './libs/MainSidebar'
import MainFooter from './libs/MainFooter'
import MainSetting from './libs/MainSetting'
export default {
  name: 'App',
  components: {
    MainHeader,
    MainSidebar,
    MainFooter,
    MainSetting
  }
}
</script>

<style>
/* body {
	font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
		"Microsoft YaHei", "微软雅黑", Arial, sans-serif;
} */
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	font-family: "Source Sans Pro", sans-serif;
}

#wrapper {
	background: radial-gradient(
		ellipse at top left,
		rgba(255, 255, 255, 1) 40%,
		rgba(229, 229, 229, 0.9) 100%
	);
	height: 100vh;
	padding: 60px 80px;
	width: 100vw;
}
/* H1 - H6 font */
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
	font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
		"Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>