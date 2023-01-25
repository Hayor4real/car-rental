import React, { Component } from "react";
import "../../styles/bookingInfo.css";

class AddressDetails extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
      <>
        <h2 style={{ textAlign: "center", marginTop: "10px" }}>
          Booking Information
        </h2>
        <form className="row g-2" style={{ width: "90%", margin: "auto auto" }}>
          <div className="col-md-10">
            <label for="AddressInput" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="AddressInput"
              defaultValue={this.props.inputValues.address}
              name="address"
              required
              onChange={this.props.handleChange}
            />
          </div>
          <div className="col-md-10">
            <label for="CityInput" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="CityInput"
              defaultValue={this.props.inputValues.city}
              name="city"
              required
              onChange={this.props.handleChange}
            />
          </div>
          <div className="col-md-10">
            <label for="inputState" className="form-label">
              State
            </label>
            <select
              id="inputState"
              className="form-select"
              name="state"
              defaultValue={this.props.inputValues.state}
              onChange={this.props.handleChange}
            >
              <option selected>Choose...</option>
              <option>Bavaria</option>
              <option>North Rhine-westphalia</option>
              <option> Baden-Wurttemberg</option>
              <option>Berlin</option>
              <option> Hesse Frankfurt am Main</option>
              <option> Saxony Dresden</option>
            </select>
          </div>
          <div className="col-md-10">
            <label for="inputZip" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              defaultValue={this.props.inputValues.zip}
              name="zip"
              required
              onChange={this.props.handleChange}
            />
          </div>
          <button className="btnChange" onClick={this.back}>
            Back
          </button>{" "}
          <button className="btnChange" onClick={this.saveAndContinue}>
            Next
          </button>
        </form>
      </>
    );
  }
}
export default AddressDetails;
