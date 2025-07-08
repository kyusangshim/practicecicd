import React from "react";

function ProductInfo(props){
    return (
        <>
            <div className="product-name">
            {props.name}
            </div>
            <div className="product-description">
            {props.description}
            </div>
        </>
        
    );
}

export default ProductInfo;