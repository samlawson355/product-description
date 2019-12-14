import React from "react";
import Description from "./Description.jsx";
const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      currentProduct: null,
      // currentProduct: {
      //   id: 1,
      //   productCategory: "Prime Pantry",
      //   productDesc:
      //     "New look, same 100 Percent pure quality water++.5 liter / 16.9 ounce easy to grip, resealable plastic bottled water that's perfect for lunch, or to bring to work or class++12 pack to keep at home or the office to promote healthy hydration++With no calories and no sweeteners, water is a smart alternative to sugary drinks++Consistently clean and great tasting water with our rigorous 12 step quality process. All of our PET bottles are recyclable. Once recycled, they’ll be cleaned, dried and melted ...",
      //   productMaker: "Nestlé Pure Life",
      //   productName:
      //     "Nestle Pure Life Purified Water, 16.9 fl oz. Plastic Bottles (12 count)",
      //   productNumOfQuestionsAnswered: 118,
      //   productNumOfRatings: 1278,
      //   productPrice: 2.23
      //   // productRating: 4.4
      // },
      currentProductRating: null,
      inStock: null,
      flagToShow: null
    };
    // this.selectProduct = this.selectProduct.bind(this);
    this.selectProductFromField = this.selectProductFromField.bind(this);
    // this.getRating = this.getRating.bind(this);
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

  // selectProductFromField(event) {
  //   axios({
  //     method: "GET",
  //     url: `http://node-express-env.pd2fd7phmh.us-east-2.elasticbeanstalk.com/api/${event}`
  //   }).then(data =>
  //     this.setState({
  //       currentProduct: data.data[0]
  //     })
  //   );
  // }

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

  selectProductFromField(event) {
    axios({
      method: "GET",
      url: `/${event}`
    })
      .then(console.log)
      .then(data =>
        this.setState({
          currentProduct: data.data[0]
        })
      );
  }

  // getRating(event) {
  //   axios({
  //     method: "GET",
  //     url: `http://gammazonreviews.us-east-2.elasticbeanstalk.com/comments/${event.target.value}`
  //   }).then(data =>
  //     this.setState({
  //       currentProductRating: data.data[0].average
  //     })
  //   );
  // }

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
    let stock = [true, true, true, true, true, false];
    this.setState({
      inStock: stock[~~(Math.random() * stock.length)]
    });
  }

  dealGetter() {
    let deals = [true, false];
    let flagChooser = deals[~~(Math.random() * deals.length)];
    this.setState({
      flagToShow: flagChooser
    });
  }

  componentDidMount() {
    let idText = window.location.search;
    let croppedID = idText.substring(idText.indexOf("=") + 1);

    croppedID = +croppedID;

    this.state.id
      ? null
      : this.setState(
          {
            id: croppedID
          },
          () => {
            axios({
              method: "GET",
              url: `/${croppedID}`
            })
              // .then(console.log)
              .then(data =>
                this.setState(
                  {
                    currentProduct: data.data[0]
                  },
                  () => {
                    this.getRatingFromInput(this.state.id);
                  }
                )
              )
              .then(() => {
                this.availableOrNot();
                this.dealGetter();
              });

            // this.selectProductFromField(this.state.id);
          }
        );
  }

  render() {
    return this.state.currentProduct ? (
      <div>
        <Description
          flagToShow={this.state.flagToShow}
          availableOrNot={this.availableOrNot}
          inStock={this.state.inStock}
          currentProduct={this.state.currentProduct}
          currentProductRating={this.state.currentProductRating}
        />
      </div>
    ) : null;
  }
}

export default App;
