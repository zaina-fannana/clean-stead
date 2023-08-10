import React, { useState, useEffect } from "react";
import "./BookNow.css";
import {
  DateImage,
  lines2,
  num1,
  num2,
  num3,
  line8,
  line7,
  line9,
} from "../../../assets";
import axios from "axios";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./BookNow.css";
import SelectService from "../SelectService/SelectService";
import SelectDate from "../SelectDate/SelectDate";
import EnterInfo from "../EnterInfo/EnterInfo";
import { redirect } from "react-router-dom";
import { isCursorAtStart } from "@testing-library/user-event/dist/utils";

const stepsList = [
  {
    id: 1,
    component: <SelectService />,
  },
  {
    id: 2,
    component: <SelectDate />,
  },
  {
    id: 3,
    component: <EnterInfo />,
  },
];

const servicesHeader = [
  {
    name: "اختر الخدمات",
  },
  {
    name: "التاريخ والوقت",
  },
  {
    name: "معلوماتك",
  },
];

const BookNow = () => {
  const [currentSlide, setCurrentSlide] = useState("selectServices");
  const [selectedOption, setSelectedOption] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [expandedSlideIndex, setExpandedSlideIndex] = useState(null);
  const [products, setProducts] = useState([]);

  const toggleSlide = (index) => {
    if (currentSlide === index) {
      setCurrentSlide(null);
    } else {
      setCurrentSlide(index);
    }
    setExpandedSlideIndex((prevIndex) => (prevIndex === index ? null : index));
    setCurrentStep(index);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    axios
      .get("https://63bb90b3cf99234bfa5e3b48.mockapi.io/Products")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNextStep = () => {
    if (currentStep < stepsList.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <>
      <div className="book-now">
        <h2 style={{ fontWeight: 500, fontSize: 30, color: "#000000" }}>
          احجز الآن
          <> </>
          <img src={lines2} alt=""></img>
        </h2>
      </div>
      <div className="row">
        <div className="stepsContainer">
          {/*steps*/}
          <div
            className="steps"
            style={{ display: "flex", alignItems: "center" }}
          >
            {servicesHeader.map((item, index) => {
              return (
                <div key={index} className="d-flex align-items-baseline mb-2">
                  <div
                    className="selectServices"
                    style={{ flex: 1, cursor: "pointer" }}
                    onClick={() => toggleSlide(index)}
                  >
                    <h6
                      className="selectServicesText d-flex align-items-center"
                      style={{
                        color: index === currentStep ? "#000000" : "#C4C4C4",
                      }}
                    >
                      <div
                        className="header-service-number"
                        style={{
                          backgroundColor:
                            index === currentStep ? "#00adee" : "#fff",
                          color: index === currentStep ? "#fff" : "#C4C4C4",
                          borderRadius:
                            index === currentStep ? "#00adee" : "##C4C4C4",
                        }}
                      >
                        {index + 1}
                      </div>
                      <> </>

                      {item.name}
                    </h6>
                  </div>
                  {servicesHeader.length !== index + 1 && (
                    <img
                      className="line8"
                      src={line8}
                      alt=""
                      style={{ margin: "0 10px" }}
                    />
                  )}
                </div>
              );
            })}
          </div>
          {stepsList.map((step, index) => {
            return currentStep === index ? step.component : null;
          })}
          <div className="endSection">
            <img className="line7" src={line7} alt=""></img>
            <button
              className="button btn-success"
              style={{ marginRight: 37 }}
              onClick={handlePrevStep}
            >
              الرجوع
            </button>

            <button
              className="button btn-success"
              style={{
                background: "#00ADEE",
                borderRadius: 150,
                color: "#ffffff",
                marginRight: 450,
              }}
              onClick={handleNextStep}
            >
              استمرار{" "}
            </button>
          </div>
        </div>
        {/*ملخص*/}
        <div className="Summary">
          <h5 className="summary">ملخص</h5>
          <img className="line9" src={line9} alt=""></img>
          <div className="SummarySection">
            <div className="ServiceDepartment">
              <h6
                className="service."
                style={{
                  fontWeight: 300,
                  fontSize: 17,
                  textAlign: "right",
                  color: "#7D7E82",
                }}
              >
                الخدمة
              </h6>
              <h6 className="clean">تنظيف المنازل</h6>
            </div>

            <div className="selectedItems">
              <h6
                className="service."
                style={{
                  fontWeight: 300,
                  fontSize: 17,
                  textAlign: "right",
                  color: "#7D7E82",
                }}
              >
                العناصر المختارة
              </h6>
              <ul>
                <li className="clean">تنظيف المنازل (1)</li>
              </ul>
            </div>
            <div className="totalPrice">
              <h6
                className="service."
                style={{
                  fontWeight: 300,
                  fontSize: 17,
                  textAlign: "right",
                  color: "#7D7E82",
                }}
              >
                اجمالي السعر
              </h6>

              <h6 className="clean">55$</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookNow;
