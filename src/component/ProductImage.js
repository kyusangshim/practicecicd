import React from "react";

function ProductImage(props){
    return (
        <div className="product-image">
          <img
            className="thumbnail"
            src={props.imageUrl}
            alt={props.name}
          />
        </div>
    );
}

export default ProductImage;