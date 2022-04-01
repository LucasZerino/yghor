import PropTypes from "prop-types";
import MetaTags from "react-meta-tags";
import React from "react";

import { Row, Col, CardBody, Card, Alert, Container, Form, Input, FormFeedback, Label } from "reactstrap";

//redux
import { useSelector, useDispatch } from "react-redux";

import { withRouter, Link } from "react-router-dom";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

//Import Login
import "./login.scss"
//Imgs do Login
import logou from "./img/logo.png"
import Ellipe from "./img/circulo.png" 


//Social Media Imports
import { GoogleLogin } from "react-google-login";
// import TwitterLogin from "react-twitter-auth"
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

// actions
import { loginUser, socialLogin } from "../../store/actions";

// import images
import profile from "assets/images/profile-img.png";
import logo from "assets/images/logo.svg";

//Import config
import { facebook, google } from "../../config";

const Login = props => {
  const dispatch = useDispatch();

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: "admin@themesbrand.com" || '',
      password: "123456" || '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values, props.history));
    }
  });

  const { error } = useSelector(state => ({
    error: state.Login.error,
  }));

  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    dispatch(loginUser(values, props.history));
  };

  const signIn = (res, type) => {
    if (type === "google" && res) {
      const postData = {
        name: res.profileObj.name,
        email: res.profileObj.email,
        token: res.tokenObj.access_token,
        idToken: res.tokenId,
      };
      dispatch(socialLogin(postData, props.history, type));
    } else if (type === "facebook" && res) {
      const postData = {
        name: res.name,
        email: res.email,
        token: res.accessToken,
        idToken: res.tokenId,
      };
      dispatch(socialLogin(postData, props.history, type));
    }
  };

  //handleGoogleLoginResponse
  const googleResponse = response => {
    signIn(response, "google");
  };

  //handleTwitterLoginResponse
  // const twitterResponse = e => {}

  //handleFacebookLoginResponse
  const facebookResponse = response => {
    signIn(response, "facebook");
  };


//funções de animação de login
const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

  

  return (
    <React.Fragment>
      <MetaTags>
        <title>Yghor Meira | Login</title>
      </MetaTags>
      <div className="elip2"></div>
      <div className="elip"></div>

      <div className="account-pages my-5 pt-sm-5">

        <img
          src={logou}
          className="principal"
        />


        <div className="formulario">
            <div className="form2">
              <div className="login-content">
              <div className="">
                    <Form
                      className=""
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                    >
                      <img
                      src={Ellipe}
                      className="userImg"
                      />
                      {error ? <Alert color="danger">{error}</Alert> : null}

                      <div className="input-div one">
                        <div className="i">
                          <i className="bx bx-user-plus"></i>
                        </div>
                        <div className="div">
                        <h5>E-mail</h5>
                          <input
                          name="email"
                          className="input"
                          placeholder=""
                          type="email"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email ? true : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                        ) : null}
                        </div>
                      </div>

                      <div className="input-div pass">
                        <div className="i">
                          <i className="bx bx-lock"></i>
                        </div>
                        <div className="div">
                        <h5>Senha</h5>
                        <input
                          className="input"
                          name="password"
                          value={validation.values.password || ""}
                          type="password"
                          placeholder=""
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.password && validation.errors.password ? true : false
                          }
                        />
                        {validation.touched.password && validation.errors.password ? (
                          <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                        ) : null}
                        </div>
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customControlInline"
                        >
                          lembrar usuário
                        </label>
                      </div>

                      <div className="mt-3 d-grid">
                        <button
                          className="btm"
                          type="submit"
                        >
                          Entrar
                        </button>
                      </div>


                      <div className="mt-4 text-center">
                        <Link to="/forgot-password" className="text-muted">
                          <i className="mdi mdi-lock me-1" />
                          Esqueceu a senha?
                        </Link>
                      </div>
                    </Form>
                    <div className="">
                <p>
                  Não tem uma conta ?{" "}
                  <Link to="/register" className="fw-medium text-primary">
                    {" "}
                    Registrar{" "}
                  </Link>{" "}
                </p>
              </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Login);

Login.propTypes = {
  history: PropTypes.object,
};
