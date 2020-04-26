import shop from "@/api/shop";
export default {
  namespaced: true,
  state: {
    all: []
  },
  getters: {},
  actions: {
    getAllProducts(context) {
      return shop.getProducts().then(function(resp) {
        var data = resp.data.data;
        console.log("getProducts--->>>", data);
        context.commit("setProducts", data);
      });
    }
  },
  mutations: {
    setProducts(state, products) {
      state.all = products;
    },
    decrementProductInventory(state, { id }) {
      const product = state.all.find(product => product.id === id);
      product.inventory--;
    }
  }
};
