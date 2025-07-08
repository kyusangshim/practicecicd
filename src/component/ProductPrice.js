import React from "react";

function ProductPrice(props){
    return (
        <div className="product-price">
          {props.price}원
        </div>
    );
}

export default ProductPrice;