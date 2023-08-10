import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./SignupForm.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";

const SignupForm = ({ isShow, onClose }) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phoneNumber: Yup.number()
        .integer("Must be an integer")
        .required("Required"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      const signupFormData = new FormData();
      signupFormData.append("name", values.fullName);
      signupFormData.append("email", values.email);
      signupFormData.append("password", values.password);
      signupFormData.append("phone", values.phoneNumber);
      try {
        const response = await axios.post(
          "https://student.valuxapps.com/api/register",
          signupFormData
        );
        console.log("Signup successful!", response.data);

        alert("Signup successful!");
        onClose();
      } catch (error) {
        console.error("Signup failed!", error);

        alert("Signup failed. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Modal show={isShow} onHide={onClose}>
      <Modal.Body className="modal-body">
        <>
          <i class="fa-solid fa-x" style={{ color: "#ccd2e3" }}></i>
          <p className="start">من فضلك قم بتسجيل الدخول للاستمرار</p>
        </>

        <div className="Group">
          <div className="creatAccount">انشاء حساب</div>
          <div className="login">تسجيل دخول</div>
        </div>
        <div className="line12" />

        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="fullName" className="label">
            الاسم
          </label>
          <div className="input-with-icon d-flex justify-content-center">
            <img src={require("../../assets/images/User.png")} />
            <input
              id="fullName"
              name="fullName"
              type="text"
              className="input-field"
              placeholder="ادخل الاسم"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
            />
          </div>

          {formik.touched.fullName && formik.errors.fullName ? (
            <div>
              <span className="required" style={{ color: "red" }}>
                {formik.errors.fullName}
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
            <img src={require("../../assets/images/phone.png")} />

            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              className="input-field"
              placeholder="رقم الجوال"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />
          </div>

          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div>
              <span className="required" style={{ color: "red" }}>
                {formik.errors.phoneNumber}
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

          <button type="submit" className="create">
            انشاء حساب{" "}
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default SignupForm;