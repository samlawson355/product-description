import React from "react";
import ProductMaker from "./ProductMaker.jsx";
import Stars from "./Stars.jsx";
import Ratings from "./Ratings.jsx";
import QuestionsAnswered from "./QuestionsAnswered.jsx";
const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentProduct: {
      //   id: 5,
      //   productName: "First Aid Kit",
      //   productMaker: "First Aid Only",
      //   productDesc:
      //     "Contains 299 essential first aid supplies for treating minor aches and injuries++Clear plastic liner in nylon case for organization and easy access to first aid supplies in an emergency++Soft sided, zippered case ideal for home, travel and on the go use++Not made with natural rubber latex",
      //   productPrice: 16.82,
      //   productRating: 4.7,
      //   productNumOfRatings: 4440,
      //   productNumOfQuestionsAnswered: 105
      // },
      dropDownDisplayed: false
    };
    this.goToProductMaker = this.goToProductMaker.bind(this);
    this.descriptionCleaner = this.descriptionCleaner.bind(this);
    this.hoverDropDown = this.hoverDropDown.bind(this);
    this.hoverGoBack = this.hoverGoBack.bind(this);
    this.selectProduct = this.selectProduct.bind(this);
    this.getAllProducts = this.getAllProducts.bind(this);
  }

  descriptionCleaner(desc) {
    let cleanedDesc = "";
    let cleanLines = [];
    let curChar = 0;
    for (let i = 0; i < desc.length; i++) {
      if (desc[i] === "+" && desc[i + 1] === "+") {
        cleanedDesc = desc.slice(curChar, i) + "\n";
        cleanLines.push(cleanedDesc);
        cleanedDesc = "";
        curChar = i + 2;
      }
      if (i === desc.length - 1) {
        cleanedDesc = desc.slice(curChar, i + 1);
        cleanLines.push(cleanedDesc);
      }
    }
    return cleanLines;
  }

  hoverDropDown() {
    this.setState({
      dropDownDisplayed: true
    });
  }

  hoverGoBack() {
    this.setState({
      dropDownDisplayed: false
    });
  }

  selectProduct(event) {
    console.log("this ran");
    axios({
      method: "GET",
      url: `/${event.target.value}`
    }).then(data =>
      this.setState({
        currentProduct: data.data[0]
      })
    );
  }
  // componentDidMount() {
  //   this.getAllProducts();
  // }
  getAllProducts() {
    console.log("get all ran");
    axios({
      method: "GET",
      url: "/allProducts"
    })
      .then(data => data.data)
      .then(console.log);
  }
  goToProductMaker() {
    alert(
      `This would have redirected you to all of ${this.state.currentProduct.productMaker}'s products`
    );
  }

  render() {
    return !this.state.currentProduct ? (
      <button onClick={this.getAllProducts}>click</button>
    ) : (
      <div id="productDescriptionContainerS">
        <div id="titleOfProductContainerS">
          <div id="titleOfProductS">
            {this.state.currentProduct.productName}
          </div>
        </div>
        <div id="productMakerContainerS">
          <ProductMaker
            currentProduct={this.state.currentProduct}
            goToProductMaker={this.goToProductMaker}
          />
        </div>
        <span id="starsRatingsQuestionsContainerS">
          <Stars
            hoverDropDown={this.hoverDropDown}
            hoverGoBack={this.hoverGoBack}
            currentProduct={this.state.currentProduct}
            dropDownDisplayed={this.state.dropDownDisplayed}
          />
          <Ratings currentProduct={this.state.currentProduct} />
          <QuestionsAnswered currentProduct={this.state.currentProduct} />
        </span>
        <span id="productPriceContainerS">
          <span id="theWordPriceS">Price: </span>
          <span id="productPriceS">
            ${this.state.currentProduct.productPrice}
          </span>
        </span>
        <div id="productDescriptionLineContainerS">
          <ul>
            {this.descriptionCleaner(this.state.currentProduct.productDesc).map(
              (line, id) => (
                <li key={id} className="productDescriptionLineS">
                  {line}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
