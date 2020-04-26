<template>
  <div class="about-wrap">
    <el-table :data="products" border show-summary :summary-method="getSummaries">
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="title" label="商品名"></el-table-column>
      <el-table-column prop="price" label="商品单价（$）"></el-table-column>
      <el-table-column prop="quantity" label="购买数量（件）"></el-table-column>
      <el-table-column label="总价（$）">
        <template slot-scope="scope">
          {{scope.row.price|currency}} X {{scope.row.quantity}}
        </template>
      </el-table-column>
    </el-table>
    <div class="pay">
      <el-button type="primary" :disabled="!products.length" @click="checkout(products)">立即支付（{{total|currency}}）</el-button>
    </div>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
  name: "About",
  computed:{
    ...mapState({
      checkoutStatus:state => state.cart.checkoutStatus
    }),
    ...mapGetters('cart',{
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  },
  methods: {
    checkout(products){
      this.$store.dispatch('cart/checkout', products)
    },
    getSummaries(param){
      const { columns, data } = param;
      const sums = [];
      const that = this;
      columns.forEach(function(column, index){
        if (index === 0) {
          sums[index] = '总价';
          return;
        }
        if(index != 4){
          sums[index] = '';
          return;
        }
        sums[index] = '$'+that.total.toFixed(2);
      });
      return sums;
    }
  },
  created(){
    this.$store.dispatch('products/getAllProducts')
  }
};
</script>
<style scoped>
.pay{
  text-align:center;
  margin-top:15px;
}
</style>