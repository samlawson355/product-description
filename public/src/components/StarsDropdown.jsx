import React from "react";

const StarsDropDown = props => (
  <div onMouseEnter={props.hoverDropDown} onMouseLeave={props.hoverGoBack}>
    {props.dropDownDisplayed ? (
      <div>star drop down rendering</div>
    ) : (
      <div>star NO</div>
    )}
  </div>
);

export default StarsDropDown;
