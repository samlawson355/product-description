import React from "react";

const ProductMaker = props => {
  return (
    <div>
      <a onClick={props.goToProductMaker}>
        {props.currentProduct.productMaker}
      </a>
    </div>
  );
};

export default ProductMaker;
