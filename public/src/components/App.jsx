import React from "react";
import ProductMaker from "./ProductMaker.jsx";
import Stars from "./Stars.jsx";
import Ratings from "./Ratings.jsx";
import QuestionsAnswered from "./QuestionsAnswered.jsx";
const axios = require("axios");
const fetch = require("node-fetch");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {}
    };
  }

  componentDidMount() {
    axios.get("/").then(console.log);
  }

  render() {
    return (
      <div id="productDescriptionContainerS">
        <div id="titleOfProductS">
          <p>TITLE</p>
        </div>
        <div id="productMakerContainerS">
          <ProductMaker currentProduct={this.state.currentProduct} />
        </div>
        <div id="starsRatingsQuestionsS">
          <span>
            <Stars currentProduct={this.state.currentProduct} />
            <Ratings currentProduct={this.state.currentProduct} />
            <QuestionsAnswered currentProduct={this.state.currentProduct} />
          </span>
        </div>
      </div>
    );
  }
}

export default App;
