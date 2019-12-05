import React from "react";

class FlagAndDeals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flagToShow: null
    };
    this.dealGetter = this.dealGetter.bind(this);
  }

  dealGetter() {
    let deals = [true, false];
    let flagChooser = deals[~~(Math.random() * deals.length)];
    this.setState({
      flagToShow: flagChooser
    });
  }

  componentDidMount() {
    this.dealGetter();
  }

  render() {
    return (
      <div id="flagAndDealsContainerS">
        <span id="textFlagDealContainerS">
          <span id="theFlagS">
            {this.state.flagToShow ? (
              <span id="flagHolderS">
                <span id="orangeFlagS">Extra Savings</span>
                <span id="dealContainerS">
                  <span id="dealsDropdownS">
                    <a>Buy 5, save 5%. 3 Applicable Promotion(s)</a>
                  </span>
                </span>
              </span>
            ) : (
              <span id="flagHolderS">
                <span id="blackFlagS">
                  Gammazon's <span id="theWordChoiceS">Choice</span>
                </span>
                <span id="theTriangleS"></span>{" "}
                <span id="textAfterBlackFlagS">
                  in <a>[category]</a>
                </span>
              </span>
            )}
          </span>
        </span>
      </div>
    );
  }
}

export default FlagAndDeals;
