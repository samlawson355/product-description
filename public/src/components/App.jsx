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
    this.selectProductFromField = this.selectProductFromField.bind(this);
  }

  // ! This is the proxy route
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

  selectProduct(event) {
    axios({
      method: "GET",
      url: `/${event.target.value}`
    }).then(data =>
      this.setState({
        currentProduct: data.data[0]
      })
    );
  }

  selectProductFromField(event) {
    axios({
      method: "GET",
      url: `/${event}`
    }).then(data =>
      this.setState({
        currentProduct: data.data[0]
      })
    );
  }

  render() {
    return !this.state.currentProduct ? (
      <button onClick={this.selectProduct} value={1}>
        Click for products
      </button>
    ) : (
      <div>
        <input id="testInputFieldS"></input>
        <button
          onClick={() =>
            this.selectProductFromField(
              document.getElementById("testInputFieldS").value
            )
          }
        >
          go
        </button>
        <Description currentProduct={this.state.currentProduct} />
      </div>
    );
  }
}

export default App;
