import React from "react";
import axios from "axios";
import "./ListIBAN.css";

class ListIBAN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      responseList: [],
      showResults: false
    };
    this.handleFileChange = this.handleFileChange.bind(this);
    this.validateIBANS = this.validateIBANS.bind(this);
  }

  handleFileChange = async e => {
    e.preventDefault();
    let arr = [];
    let reader = new FileReader();
    reader.onload = async e => {
      let text = e.target.result;
      text = text.split("\n");
      await text.map((code, key) => {
        let item = code.replace(/(?:\r\n|\r|\n)/g, "");
        return arr.push(item);
      });
    };
    await reader.readAsText(e.target.files[0]);
    await this.setState({ data: arr });
  };

  validateIBANS() {
    var list = {};
    this.state.data.map((code, idx) => {
      return list[idx] = code;
    });
    axios
      .post(`/api/checkList/`, list, {
        responseType: "json"
      })
      .then(async res => {
        this.setState({
          responseList: res.data.list,
          showResults: true
        });
      });
  }

  render() {
    return (
      <div className="h-100 list-container">
        <div className="row text-center">
          <div className="col-12">
            <h3 className="shadow pad-10" style={{ color: "#e7e7e7" }}>
              CHECK A LIST OF IBANs
            </h3>
          </div>
        </div>
        <div className="alert alert-warning" role="alert">
          Each <b>IBAN</b> number should be in a single line!
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="file-input">Attach a .txt file with IBANs</label>
            <input
              type="file"
              className="form-control-file"
              id="file-input"
              onChange={e => this.handleFileChange(e)}
            />
          </div>
          {this.state.data}
          {this.state.data ? (
            <button
              type="button"
              className="btn btn-upload-light"
              onClick={this.validateIBANS}
            >
              VALIDATE
            </button>
          ) : null}
        </form>
        {this.state.showResults ? (
          <div className="row mar-top text-center">
            <div className="col-12">
              {this.state.responseList.map(item => {
                return <h3>
                {item.iban} <br />
                {item.status === "valid" ? (
                  <span className="valid">IBAN IS VALID</span>
                ) : (
                  <span className="invalid">IBAN IS NOT VALID</span>
                )}
                </h3>
              })}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default ListIBAN;
