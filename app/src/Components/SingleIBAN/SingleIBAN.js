import React from "react";
import axios from "axios";
import "./SingleIBAN.css";

class SingleIBAN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iban: null,
      valid: null,
      showResults: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateIBAN = this.validateIBAN.bind(this);
  }

  handleChange(e) {
    this.setState({
      iban: e.target.value,
      showResults: false
    });
  }

  validateIBAN() {
    axios
      .get(`/api/check/${this.state.iban}`, {
        responseType: "json"
      })
      .then(async res => {
        this.setState({
          iban: res.data.iban,
          valid: res.data.status === "valid" ? true : false,
          showResults: true
        });
      });
  }

  render() {
    return (
      <div className="h-100 single-container">
        <div className="row text-center">
          <div className="col-12">
            <h3 className="shadow pad-10" style={{ color: "#abd9ab" }}>
              CHECK SINGLE IBAN
            </h3>
          </div>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="iban-input">IBAN number</label>
            <input
              type="text"
              className="form-control"
              id="iban-input"
              placeholder="Enter the IBAN number..."
              onChange={this.handleChange}
            />
          </div>
          {this.state.iban ? (
            <button
              type="button"
              className="btn btn-upload-green"
              onClick={this.validateIBAN}
            >
              VALIDATE
            </button>
          ) : null}
        </form>
        {this.state.showResults ? (
          <div className="row mar-top text-center">
            <div className="col-12">
              <h3>
                {this.state.iban} <br />
                {this.state.valid ? (
                  <span className="valid">IBAN IS VALID</span>
                ) : (
                  <span className="invalid">IBAN IS NOT VALID</span>
                )}
              </h3>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default SingleIBAN;
