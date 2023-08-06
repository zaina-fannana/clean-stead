import React, { useState } from "react";
import line7 from "../../assets/images/Line7.png";
import Form from "react-bootstrap/Form";
import "./EnterInfo.css";

const EnterInfo = () => {
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetails, setAddressDetails] = useState("");

  return (
    <div className="slide">
      <div className="choose">
        <div className="choose0">
          <img
            className="line7"
            style={{
              marginTop: 15,
            }}
            src={line7}
            alt=""
          ></img>
          <h5 className="choose1">ادخل معلوماتك</h5>
          <h6 className="login.">تسجيل الدخول</h6>
          <div className="information">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>الاسم</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="الاسم"
                  style={{
                    fontWeight: 300,
                    fontSize: 16,
                    lineHeight: 25,
                    width: 252,
                    height: 51,
                    marginTop: 90,
                    marginRight: -38,
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>رقم الجوال</Form.Label>
                <Form.Control
                  type="phone"
                  placeholder="رقم الجوال"
                  style={{
                    fontWeight: 300,
                    fontSize: 16,
                    lineHeight: 25,
                    width: 252,
                    height: 51,
                    marginTop: 4,
                    marginRight: -88,
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{ marginTop: 8 }}>العنوان</Form.Label>
                <Form.Control
                  className="address"
                  type="address"
                  placeholder="العنوان"
                  style={{
                    fontWeight: 300,
                    fontSize: 16,
                    lineHeight: 25,
                    width: 252,
                    height: 51,
                    marginRight: -46,
                    marginTop: 44,
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>العنوان التفصيلي</Form.Label>
                <Form.Control
                  className="addressDetails"
                  type="addressDetails"
                  placeholder="العنوان التفصيلي"
                  style={{
                    fontWeight: 300,
                    fontSize: 16,
                    lineHeight: 25,
                    width: 252,
                    height: 51,
                  }}
                />
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterInfo;
