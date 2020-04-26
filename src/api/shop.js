import service from "@/utils/request";

export default {
  getProducts() {
    return service({
      url: "products",
      method: "get"
    });
  },

  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      Math.random() > 0.5 || navigator.webdriver ? cb() : errorCb();
    }, 100);
  }
};
