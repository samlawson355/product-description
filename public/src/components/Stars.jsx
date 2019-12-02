import React from "react";
import StarsDropdown from "./StarsDropdown.jsx";

const Stars = props => {
  return (
    <div onMouseEnter={props.hoverDropDown} onMouseLeave={props.hoverGoBack}>
      {props.dropDownDisplayed ? (
        <div>
          <StarsDropdown
            productRating={props.currentProduct.productRating}
            productNumOfRatings={props.currentProduct.productNumOfRatings}
          />
        </div>
      ) : (
        "NOT HOVERING"
      )}
    </div>
  );
};
export default Stars;
