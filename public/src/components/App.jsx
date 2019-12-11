import React from "react";
import Description from "./Description.jsx";
const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: null
    };
    this.selectProduct = this.selectProduct.bind(this);
  }

  selectProduct(event) {
    axios
      .get({
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        url: `http://node-express-env.bcgwijp6ik.us-east-2.elasticbeanstalk.com/${event.target.value}`
      })
      .catch(console.log)
      .then(data =>
        this.setState({
          currentProduct: data.data[0]
        })
      );
  }

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

  render() {
    console.log("test");
    return !this.state.currentProduct ? (
      <button onClick={this.selectProduct} value="70">
        Click for products
      </button>
    ) : (
      <Description currentProduct={this.state.currentProduct} />
    );
  }
}

export default App;
