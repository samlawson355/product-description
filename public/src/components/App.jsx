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
      currentProduct: {
        id: 5,
        productName: "First Aid Kit",
        productMaker: "First Aid Only",
        productDesc:
          "Contains 299 essential first aid supplies for treating minor aches and injuries++Clear plastic liner in nylon case for organization and easy access to first aid supplies in an emergency++Soft sided, zippered case ideal for home, travel and on the go use++Not made with natural rubber latex",
        productPrice: 16.82,
        productRating: 4.7,
        productNumOfRatings: 4440,
        productNumOfQuestionsAnswered: 105
      }
    };
    this.goToProductMaker = this.goToProductMaker.bind(this);
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: `/${this.state.currentProduct.id}`
    }).then(console.log);
  }

  goToProductMaker() {
    alert(
      `This would have redirected you to all of ${this.state.currentProduct.productMaker}'s products`
    );
  }

  render() {
    return (
      <div id="productDescriptionContainerS">
        <div id="titleOfProductS">
          <h1>TITLE</h1>
        </div>
        <div id="productMakerContainerS">
          <ProductMaker
            currentProduct={this.state.currentProduct}
            goToProductMaker={this.goToProductMaker}
          />
        </div>
        <span id="starsRatingsQuestionsContainerS">
          <Stars currentProduct={this.state.currentProduct} />
          <Ratings currentProduct={this.state.currentProduct} />
          <QuestionsAnswered currentProduct={this.state.currentProduct} />
        </span>
        <div id="productPriceS">$5,000,000.99</div>
        <div id="productDescriptionTextS">
          <p>this is the product description</p>
        </div>
      </div>
    );
  }
}

export default App;
