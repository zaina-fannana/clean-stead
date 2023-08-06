import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login.css";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useAuth } from "../../AuthContext/AuthContext";
import { setAccessToken } from "../../axiosConfig";

const Login = ({ isShow, onClose }) => {
  const [isLogin, setIsLogin] = useState();
  const [isClose, setIsClose] = useState();
  const { setIsAuthnticated } = useAuth();
  const [loginAttemptFailed, setLoginAttemptFailed] = useState("");
  const loginInitialValues = {
    email: "abullah@gmailASD.comm",
    password: "123456",
  };
  const registerInitialValues = {
    name: "",
    email: "abullah@gmailASD.comm",
    password: "123456",
    phone: "",
  };
  const loginValidationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
  });
  const registerValidationSchema = Yup.object({
    name: Yup.string().required("this field is requeired"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    phone: Yup.string().required("this field is requeired"),
  });
  const onSubmitLogin = async (values, { setSubmitting }) => {
    const loginData = new FormData();
    loginData.append("email", values.email);
    loginData.append("password", values.password);
    try {
      const response = await axios.post("/login", loginData);
      if (response.data.status) {
        localStorage.setItem("token", response.data.data.token);
        setAccessToken(response.data.data.token);
        setIsAuthnticated(true);
        onClose();
      } else {
        setLoginAttemptFailed(response.data.message);
      }
    } catch (error) {
      console.error("LogIn failed!", error);
      setLoginAttemptFailed(error.message);
    } finally {
      setSubmitting(false);
    }
  };
  const onSubmitRegister = async (values, { setSubmitting }) => {
    const registerData = new FormData();
    registerData.append("name", values.name);
    registerData.append("email", values.email);
    registerData.append("phone", values.phone);
    registerData.append("password", values.password);
    try {
      debugger;
      const response = await axios.post("/register", registerData);
      const { data } = response;
      console.log({ data });
      if (response.data.status) {
        localStorage.setItem("token", response.data.data.token);
        setAccessToken(response.data.data.token);
        setIsAuthnticated(true);
        onClose();
      } else {
        setLoginAttemptFailed(response.data.message);
      }
    } catch (error) {
      console.error("LogIn failed!", error);
      setLoginAttemptFailed(error.message);
    }
  };
  const formik = useFormik({
    initialValues: isLogin ? loginInitialValues : registerInitialValues,
    validationSchema: isLogin
      ? loginValidationSchema
      : registerValidationSchema,
    onSubmit: isLogin ? onSubmitLogin : onSubmitRegister,
  });
  const handleButtonClick = () => {
    setIsClose(true);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  return (
    <Modal show={isShow} onHide={onClose}>
      <Modal.Body className={`modal-body ${isClose ? "drunk-effect" : ""}`}>
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          onClick={handleButtonClick}
        ></button>

        <p className="start">من فضلك قم بتسجيل الدخول للاستمرار</p>

        <div className="Group 263">
          <div
            className={`creatAccount ${isLogin ? "" : "active-title"}`}
            onClick={() => setIsLogin(false)}
          >
            انشاء حساب
            {isLogin || <div className="underline blue-line"></div>}
          </div>
          <> </>
          <div
            className={`login ${isLogin ? "active-title" : ""}`}
            onClick={() => setIsLogin(true)}
          >
            تسجيل دخول
            {isLogin && <div className="underline blue-line"></div>}
          </div>
        </div>

        <div className="line3">
          <div id="line-12"></div>
          <div id="line-13"></div>
        </div>
        {isLogin ? (
          <form>
            <label htmlFor="email" className="label">
              الايميل
            </label>

            <div className="input-with-icon d-flex justify-content-center">
              <img
                src={require("../../assets/images/email.png")}
                alt="Email icon"
              />

              <input
                id="email"
                name="email"
                type="email"
                className="input-field"
                placeholder="ادخل الايميل"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>

            <label htmlFor="password" className="label">
              كلمة المرور
            </label>

            <div className="input-with-icon d-flex justify-content-center">
              <img
                src={require("../../assets/images/Lock.png")}
                alt="Lock icon"
              />

              <input
                id="password"
                name="password"
                type="password"
                className="input-field"
                placeholder="ادخل كلمة المرور"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
            </div>

            {loginAttemptFailed && formik.errors.password ? (
              <div>
                <span className="required" style={{ color: "red" }}>
                  {formik.errors.password}
                </span>
              </div>
            ) : null}
            <div className="password-error-message">
              {loginAttemptFailed && (
                <span className="required" style={{ color: "red" }}>
                  {loginAttemptFailed}
                </span>
              )}
            </div>
            <button onClick={() => formik.handleSubmit()} className="create">
              دخول
            </button>
          </form>
        ) : (
          <form>
            <label htmlFor="fullName" className="label">
              الاسم
            </label>
            <div className="input-with-icon d-flex justify-content-center">
              <img
                className="user"
                src={require("../../assets/images/User.png")}
              />
              <input
                id="name"
                name="name"
                type="text"
                className="input-field"
                placeholder="ادخل الاسم"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </div>

            {formik.touched.name && formik.errors.name ? (
              <div>
                <span className="required" style={{ color: "red" }}>
                  {formik.errors.name}
                </span>
              </div>
            ) : null}

            <label htmlFor="الايميل" className="label">
              الايميل
            </label>
            <div className="input-with-icon d-flex justify-content-center">
              <img src={require("../../assets/images/email.png")} />

              <input
                id="email"
                name="email"
                type="email"
                className="input-field"
                placeholder="ادخل الايميل"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>

            {formik.touched.email && formik.errors.email ? (
              <div>
                <span className="required" style={{ color: "red" }}>
                  {formik.errors.email}
                </span>
              </div>
            ) : null}

            <label htmlFor="رقم الجوال" className="label">
              رقم الجوال
            </label>
            <div className="input-with-icon d-flex justify-content-center">
              <img
                className="user"
                src={require("../../assets/images/phone.png")}
              />

              <input
                id="phone"
                name="phone"
                type="text"
                className="input-field"
                placeholder="رقم الجوال"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
            </div>

            {formik.touched.phone && formik.errors.phone ? (
              <div>
                <span className="required" style={{ color: "red" }}>
                  {formik.errors.phone}
                </span>
              </div>
            ) : null}

            <label htmlFor="كلمة المرور" className="label">
              كلمة المرور
            </label>
            <div className="input-with-icon d-flex justify-content-center">
              <img src={require("../../assets/images/Lock.png")} />

              <input
                id="password"
                name="password"
                type="password"
                className="input-field"
                placeholder="ادخل كلمة المرور"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
            </div>

            {formik.touched.password && formik.errors.password ? (
              <div>
                <span className="required" style={{ color: "red" }}>
                  {formik.errors.password}
                </span>
              </div>
            ) : null}

            <div className="password-error-message">
              {loginAttemptFailed && <span className="required">{}</span>}
            </div>

            <button onClick={() => formik.handleSubmit()} className="create">
              انشاء حساب{" "}
            </button>
          </form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default Login;
