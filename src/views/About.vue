<template>
  <div class="home">
    <ul >
        <li  v-for="(subitem,index) in shoplist.shoplist" :key="index">
          <img v-bind:src='subitem.img' alt="">
          <div>
            <h2>{{subitem.name}}</h2>
            <p>{{subitem.info}}</p>
            <p>￥{{subitem.price}}</p>
            <div>
              <button @click="numJian(index)">-</button><span> {{subitem.n}} </span><button @click="numAdd(index)">+</button>
            </div>
            <button @click="remove(subitem.id)">删除</button>
          </div>
        </li>
      </ul>
      <div class="check">
        <p>合计:￥ {{sumprice}}</p>
        <button :class="{'bgc':goodsLength>0}">去结账:{{goodsLength}}</button>
      </div>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
  computed:{
    ...mapState(["shoplist","shoplist"]),
    ...mapGetters(["sumprice","goodsLength"]),
  },
  methods:{
    ...mapActions(["numAdd","numJian"]),
    ...mapMutations(["remove"])
  }
}
</script>
<style>

.bgc{
  background-color: #3b95E6 !important;
}
</style>


