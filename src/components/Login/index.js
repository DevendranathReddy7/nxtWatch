import { Component } from "react";
import { withRouter } from "react-router-dom";

import Cookies from "js-cookie";
import "./index.css";
import LoaderComp from "../Loader";

class Login extends Component {
  state = {
    userName: "",
    password: "",
    err: false,
    isLoading: false,
    errMsg: "",
    checked: false,
  };

  componentDidMount() {
    const token = Cookies.get("jwt_token");
    const { history } = this.props;
    if (token !== undefined) {
      history.replace("/");
    }
    return null;
  }

  userNameHandler = (e) => {
    const { value } = e.target;
    this.setState({ userName: value });
  };

  passwordHandler = (e) => {
    const { value } = e.target;
    this.setState({ password: value });
  };

  showPswdHandler = (e) => {
    this.setState({ checked: e.target.checked });
  };

  submitHandler = async (e) => {
    e.preventDefault();
    const { userName, password } = this.state;
    this.setState({ isLoading: true });

    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify({ username: userName, password }),
    };

    const resp = await fetch(url, options);
    const data = await resp.json();

    if (resp.ok) {
      this.setState({
        userName: "",
        password: "",
        err: false,
        isLoading: false,
        errMsg: "",
      });
      Cookies.set("jwt_token", data.jwt_token, { expires: 1 });
      const { history } = this.props;
      history.replace("/");
    } else {
      this.setState({
        err: true,
        isLoading: false,
        errMsg: data.error_msg,
      });
    }
  };

  render() {
    const { userName, password, err, isLoading, errMsg, checked } = this.state;

    return (
      <center className="login__container">
        <div className="logo__container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
            className="login__logo"
          />
        </div>

        <form onSubmit={this.submitHandler} className="form__container">
          <div className="input__div">
            <label htmlFor="username">USERNAME</label>
            <input
              id="username"
              type="text"
              placeholder=""
              value={userName}
              onChange={this.userNameHandler}
              className="input__field"
            />
          </div>

          <div className="input__div">
            <label htmlFor="password">PASSWORD</label>
            <input
              id="password"
              type={checked ? "text" : "password"}
              placeholder=""
              value={password}
              onChange={this.passwordHandler}
              className="input__field"
            />
          </div>

          <div className="checkBox__div">
            <input
              type="checkbox"
              id="checkbox"
              value={checked}
              onChange={this.showPswdHandler}
            />
            <label htmlFor="checkbox">Show Password</label>
          </div>

          <div>
            <button type="submit" className="login__btn">
              Login
            </button>
          </div>
          {err && <p className="err_para">*{errMsg}</p>}
        </form>

        {isLoading && <LoaderComp />}
      </center>
    );
  }
}

export default withRouter(Login);
