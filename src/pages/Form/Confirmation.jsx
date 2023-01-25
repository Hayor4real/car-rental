import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/confirm.css";

class Confirmation extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {
      inputValues: { firstName, lastName, email, address, city, state, zip },
    } = this.props;

    return (
      <>
        <div className="detailsInfo">
          <h1>Confirm your Details</h1>
          <p>Confirm if the following details are correct.</p>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Email: {email}</p>
          <p>Adress: {address}</p>
          <p>City: {city}</p>
          <p>State: {state}</p>
          <p>Zip: {zip}</p>
          <button className="btnChange" onClick={this.back}>
            Back
          </button>{" "}
          <Link to="/sucess">
            <button className="btnChange">Confirm</button>
          </Link>
        </div>
      </>
    );
  }
}

export default Confirmation;
