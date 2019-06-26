import React, { Component } from "react";
import { API_URL } from "../../config";
import { handleResponse } from "../../helpers";

export class NexInfo extends Component {
  constructor() {
    super();

    this.state = {
      cuurrency: "",
      error: null
    };
  }

  componentDidMount() {
    fetch({ API_URL })
      .then(handleResponse)
      .then(data => {
        this.setState({
          currency: data.currency
        });
      })
      .catch(error => {
        this.setState({
          error: error.errorMessage
        });
      });
  }

  render() {
    const { currency, error } = this.state;

    if (error) {
      return <div>{error}</div>;
    }
    return (
      <div>
        <h1>{currency}</h1>
      </div>
    );
  }
}

export default NexInfo;
