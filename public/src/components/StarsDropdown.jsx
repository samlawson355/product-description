import React from "react";
import Rating from "@material-ui/lab/Rating";

const StarsDropDown = props => (
  <div>
    {props.dropDownDisplayed ? (
      <div id="starDropDownContainerS" onMouseLeave={props.hoverGoBack}>
        <div id="innerStarDropdownContainerS">
          <div id="starsInsideDropdownS">
            <Rating
              name="numOfStarsS"
              value={props.star1 ? 1 : 0}
              readOnly={true}
              precision={1}
              max={1}
              size="small"
            />
            <Rating
              name="numOfStarsS"
              value={props.star2 ? 1 : 0}
              readOnly={true}
              precision={1}
              max={1}
              size="small"
            />
            <Rating
              name="numOfStarsS"
              value={props.star3 ? 1 : 0}
              readOnly={true}
              precision={1}
              max={1}
              size="small"
            />
            <Rating
              name="numOfStarsS"
              value={props.star4 ? 1 : 0}
              readOnly={true}
              precision={1}
              max={1}
              size="small"
            />
            <Rating
              name="numOfStarsS"
              value={props.star5 ? 1 : 0}
              readOnly={true}
              precision={1}
              max={1}
              size="small"
            />
            <div id="ratingInsideDropdownS">
              {Math.round(props.currentProductRating * 100) / 100} out of 5
            </div>
          </div>
        </div>
        <div>
          <div id="ratingBarContainerS">
            <div id="ratingBar1S">{props.bar1} bar1</div>
            <div id="ratingBar2S">{props.bar2} bar2</div>
            <div id="ratingBar3S">{props.bar3} bar3</div>
            <div id="ratingBar4S">{props.bar4} bar4</div>
            <div id="ratingBar5S">{props.bar5} bar5</div>
          </div>
        </div>
      </div>
    ) : null}
  </div>
);

export default StarsDropDown;
