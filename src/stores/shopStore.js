import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ShopStore {
  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }
  shops = [];

  createShop = async (newShop) => {
    try {
      const formData = new FormData();
      for (const key in newShop) {
        formData.append(key, newShop[key]);
      }
      const response = await instance.post("/shops", formData);
      this.shops.push(response.data);
    } catch (error) {
      console.log(
        "🚀 ~ file: shopStore.js ~ line 16 ~ ShopStore ~ createShop= ~ error",
        error
      );
    }
  };

  createProduct = async (shop, product) => {
    try {
      const formData = new FormData();
      for (const key in product) {
        formData.append(key, product[key]);
      }
      const res = await instance.post(`/shops/${shop._Id}/products`, formData);
      // const shop = this.shops.find((shop) => shop._id === shopId);
      shop.product.push(res.data);
    } catch {}
  };

  fetchShops = async () => {
    try {
      const response = await instance.get("/products");
      this.shops = response.data;
    } catch (error) {
      console.log("ShopStore -> fetchShops -> error", error);
    }
  };
}

const shopStore = new ShopStore();
shopStore.fetchShops();

export default shopStore;
