import React from "react";
import { Redirect, useParams } from "react-router";
import shopStore from "../stores/shopStore";
import ProductList from "./ProductList";

const ShopDetail = () => {
  const { shopSlug } = useParams();
  const shop = shopStore.shops.find((shop) => shop.slug === shopSlug);
  if (!shop) return <Redirect to="/shops" />;
  return (
    <div className="detail">
      <img className="detail-img" src={shop.image} alt={shop.name} />
      <h2 className="title">{shop.name}</h2>
      <ProductList products={shop.products} shop={shop} />
    </div>
  );
};

export default ShopDetail;
