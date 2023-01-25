import React, { Component } from "react";

class UserDetails extends Component {
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
        <h2 style={{ textAlign: "center", marginTop: "10px" }}>User Details</h2>

        <div>
          <form
            className="row g-2"
            style={{ width: "70%", margin: "auto auto" }}
          >
            <div className="mb-3 ">
              <label htmlFor="inputFirstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                defaultValue={this.props.inputValues.firstName}
                id="inputFirstName"
                className="form-control"
                name="firstName"
                required
                onChange={this.props.handleChange}
              />
            </div>
            <div className="mb-3">
              <label for="inputLastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                defaultValue={this.props.inputValues.lastName}
                id="inputLastName"
                className="form-control"
                name="lastName"
                required
                onChange={this.props.handleChange}
              />
            </div>
            <div className="mb-3">
              <label for="inputEmail" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                defaultValue={this.props.inputValues.email}
                name="email"
                required
                onChange={this.props.handleChange}
              />
            </div>

            <button
              variant="primary"
              onClick={this.saveAndContinue}
              style={{
                width: "10rem",
                color: "white",
                backgroundColor: "#0000ff",
                padding: "0.5rem 0.5rem",
                textTransform: "uppercase",
                border: "none",
                transitionDuration: "0.4s",
                cursor: "pointer",
                outline: "none",
                borderRadius: "5px",
              }}
            >
              Next
            </button>
          </form>
        </div>
      </>
    );
  }
}
export default UserDetails;
