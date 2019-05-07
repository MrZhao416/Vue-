<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">商品</router-link> |
      <router-link to="/about">购物车</router-link>
    </div>
    <transition enter-active-class="animated tada" leave-active-class="animated bounceOutRight" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
<script>

import "../public/reset -yidong.css"

export default {
  
}
</script>

<style>

html{
  font-size: 26.67vw;
}

#nav {
  position: fixed;
  top:0;
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
  text-align: center;
  background-color: #fff;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
