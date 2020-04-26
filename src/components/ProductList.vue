<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>商品列表</span>
    </div>
    <div class="product-list-body">
      <div v-for="o in products" :key="o.id" class="text item">
        <span class="product-item product-title">{{'商品名称：'+ o.title}}</span>
        <span class="product-item product-price">价格：{{ o.price | currency}}</span>
        <el-button style="float: right; padding: 3px 0" type="text" 
          :disabled="!o.inventory"
          @click="addProductToCart(o)">添加到购物车</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ProductList",
  props: {},
  computed: mapState({
    products: state => state.products.all
  }),
  created(){
    this.$store.dispatch('products/getAllProducts')
  },
  methods:mapActions('cart',['addProductToCart'])
};
</script>

<style scoped>
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.box-card {
  width: 480px;
  display: inline-block;
}
.product-list-body{
  text-align: left;
}
.product-item{
  margin-left:5px;
}
.product-price{
  font-weight: bold;
}
</style>
