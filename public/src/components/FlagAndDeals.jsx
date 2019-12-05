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
              <span>ORANGE flag</span>
            ) : (
              <span>BLACK flag</span>
            )}
          </span>
          <span id="dealsDropdownS">
            <a>DEALS</a>
          </span>
        </span>
      </div>
    );
  }
}

export default FlagAndDeals;
