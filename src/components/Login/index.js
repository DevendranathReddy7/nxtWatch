import { Component } from "react";
import { withRouter } from "react-router-dom";

import Cookies from "js-cookie";
import LoaderComp from "../Loader";
import {
  LoginContainer,
  LoginLogo,
  LogoContainer,
  FormContainer,
  InputDiv,
  InputField,
  CheckBoxDiv,
  Checkbox,
  LoginBtn,
  ErrPara,
} from "./LoginStyles";

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
      <LoginContainer>
        <LogoContainer>
          <LoginLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
        </LogoContainer>

        <FormContainer onSubmit={this.submitHandler}>
          <InputDiv>
            <label htmlFor="username">USERNAME</label>
            <InputField
              id="username"
              type="text"
              placeholder=""
              value={userName}
              onChange={this.userNameHandler}
            />
          </InputDiv>

          <InputDiv>
            <label htmlFor="password">PASSWORD</label>
            <InputField
              id="password"
              type={checked ? "text" : "password"}
              placeholder=""
              value={password}
              onChange={this.passwordHandler}
            />
          </InputDiv>

          <CheckBoxDiv>
            <Checkbox
              type="checkbox"
              id="checkbox"
              value={checked}
              onChange={this.showPswdHandler}
            />
            <label htmlFor="checkbox">Show Password</label>
          </CheckBoxDiv>

          <div>
            <LoginBtn type="submit">Login</LoginBtn>
          </div>
          {err && <ErrPara>*{errMsg}</ErrPara>}
        </FormContainer>

        {isLoading && <LoaderComp />}
      </LoginContainer>
    );
  }
}

export default withRouter(Login);
