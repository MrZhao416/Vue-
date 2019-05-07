<template>
  <div class="home">
      <ul >
        <li  v-for="(subitem,index) in goodslist.list" :key="index">
          <img v-bind:src='subitem.img' alt="">
          <div>
            <h2>{{subitem.name}}</h2>
            <p>{{subitem.info}}</p>
            <p>￥{{subitem.price}}</p>
            <button @click="addShoplist(subitem)">购物车</button>
          </div>
          
        </li>
      </ul>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  computed:{
    ...mapState(["goodslist","list"]),
    ...mapState(["shoplist","shoplist"]),
  },
  methods:{
    ...mapMutations(["addShoplist"])
  },
    
  
}
</script>

<style>

</style>
