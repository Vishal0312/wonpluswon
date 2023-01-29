import React from "react";
import  '../styles/Home.module.css'
const ProductItem = ({title,price,image,category,id}) => {
  return (
    <div className="AHome"
    key={id}>
      <h1>{el.title}</h1>

      <iframe src={image} data-testid="product-image"  alt="aic"/>
      <b data-testid="product-title">{title}</b>
      <span data-testid="product-price">   ₹{price}</span>
      <div style={{ display: "flex" }}>
        <b data-testid="product-category">{category}</b>
      </div>
    </div>
  );
};
export default ProductItem;

      // width="853"
      // height="480"
      // src={`https://www.youtube.com/embed/${embedId}`}
      // frameBorder="0"
      // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      // allowFullScreen
      // title="Embedded youtube"