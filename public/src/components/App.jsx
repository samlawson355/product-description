import React from "react";
import Description from "./Description.jsx";
const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {
        id: 1,
        productCategory: "Prime Pantry",
        productDesc:
          "New look, same 100 Percent pure quality water++.5 liter / 16.9 ounce easy to grip, resealable plastic bottled water that's perfect for lunch, or to bring to work or class++12 pack to keep at home or the office to promote healthy hydration++With no calories and no sweeteners, water is a smart alternative to sugary drinks++Consistently clean and great tasting water with our rigorous 12 step quality process. All of our PET bottles are recyclable. Once recycled, they’ll be cleaned, dried and melted ...",
        productMaker: "Nestlé Pure Life",
        productName:
          "Nestle Pure Life Purified Water, 16.9 fl oz. Plastic Bottles (12 count)",
        productNumOfQuestionsAnswered: 118,
        productNumOfRatings: 1278,
        productPrice: 2.23,
        productRating: 4.4
      },
      currentProductRating: null,
      inStock: null,
      flagToShow: null
    };
    // this.selectProduct = this.selectProduct.bind(this);
    this.selectProductFromField = this.selectProductFromField.bind(this);
    this.getRating = this.getRating.bind(this);
    this.getRatingFromInput = this.getRatingFromInput.bind(this);
    this.availableOrNot = this.availableOrNot.bind(this);
    this.dealGetter = this.dealGetter.bind(this);
  }

  // ! These are the proxy routes
  // selectProduct(event) {
  //   axios
  //     .get(
  //       `http://node-express-env.pd2fd7phmh.us-east-2.elasticbeanstalk.com/api/${event.target.value}`,
  //       {
  //         headers: {
  //           "Access-Control-Allow-Origin": "*"
  //         }
  //       }
  //     )
  //     .then(data =>
  //       this.setState({
  //         currentProduct: data.data[0]
  //       })
  //     );
  // }

  selectProductFromField(event) {
    axios({
      method: "GET",
      url: `http://node-express-env.pd2fd7phmh.us-east-2.elasticbeanstalk.com/api/${event}`
    }).then(data =>
      this.setState({
        currentProduct: data.data[0]
      })
    );
  }

  // ! These are the local routes
  // selectProduct(event) {
  //   axios({
  //     method: "GET",
  //     url: `/${event.target.value}`
  //   }).then(data =>
  //     this.setState({
  //       currentProduct: data.data[0]
  //     })
  //   );
  // }

  // selectProductFromField(event) {
  //   axios({
  //     method: "GET",
  //     url: `/${event}`
  //   }).then(data =>
  //     this.setState({
  //       currentProduct: data.data[0]
  //     })
  //   );
  // }

  getRating(event) {
    axios({
      method: "GET",
      url: `http://gammazonreviews.us-east-2.elasticbeanstalk.com/comments/${event.target.value}`
    }).then(data =>
      this.setState({
        currentProductRating: data.data[0].average
      })
    );
  }

  getRatingFromInput(event) {
    axios({
      method: "GET",
      url: `http://gammazonreviews.us-east-2.elasticbeanstalk.com/comments/${event}`
    }).then(data =>
      this.setState({
        currentProductRating: data.data[0].average
      })
    );
  }

  availableOrNot() {
    console.log("avail");
    let stock = [true, true, true, true, true, false];
    this.setState({
      inStock: stock[~~(Math.random() * stock.length)]
    });
  }

  dealGetter() {
    console.log("running");
    let deals = [true, false];
    let flagChooser = deals[~~(Math.random() * deals.length)];
    this.setState({
      flagToShow: flagChooser
    });
  }

  componentDidMount() {
    this.availableOrNot();
    this.dealGetter();
    this.selectProductFromField(1);
    this.getRatingFromInput(1);
  }

  render() {
    return (
      <div>
        <input id="testInputFieldS"></input>
        <button
          onClick={() => {
            this.selectProductFromField(
              document.getElementById("testInputFieldS").value
            );
            this.getRatingFromInput(
              document.getElementById("testInputFieldS").value
            );
            this.availableOrNot();
            this.dealGetter();
          }}
        >
          go
        </button>
        <Description
          flagToShow={this.state.flagToShow}
          availableOrNot={this.availableOrNot}
          inStock={this.state.inStock}
          currentProduct={this.state.currentProduct}
          currentProductRating={this.state.currentProductRating}
        />
      </div>
    );
  }
  // render() {
  //   return !this.state.currentProduct ? (
  //     <button
  //       onClick={e => {
  //         this.selectProduct(e);
  //         this.getRating(e);
  //       }}
  //       value={1}
  //     >
  //       Click for products
  //     </button>
  //   ) : (
  //     <div>
  //       <input id="testInputFieldS"></input>
  //   <button
  //     onClick={() => {
  //       this.selectProductFromField(
  //         document.getElementById("testInputFieldS").value
  //       );
  //       this.getRatingFromInput(
  //         document.getElementById("testInputFieldS").value
  //       );
  //     }}
  //   >
  //   go
  // </button>
  //       <Description
  //         currentProduct={this.state.currentProduct}
  //         currentProductRating={this.state.currentProductRating}
  //       />
  //     </div>
  //   );
  // }
}

export default App;
