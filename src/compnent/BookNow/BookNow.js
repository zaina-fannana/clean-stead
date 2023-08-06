import React, { useState, useEffect } from "react";
import lines2 from "../../assets/images/lines2.png";
import "./BookNow.css";
import num1 from "../../assets/images/num1.png";
import line8 from "../../assets/images/Line8.png";
import num2 from "../../assets/images/num2.png";
import num3 from "../../assets/images/num3.png";
import line7 from "../../assets/images/Line7.png";
import line9 from "../../assets/images/Line9.png";
import axios from "axios";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./BookNow.css";
import SelectService from "../SelectService/SelectService";
import SelectDate from "../SelectDate/SelectDate";
import EnterInfo from "../EnterInfo/EnterInfo";

const stepsList = [
  {
    id: 1,
    component: <SelectService />,
  },
  {
    id: 1,
    component: <SelectDate />,
  },
  {
    id: 1,
    component: <EnterInfo />,
  },
];

const BookNow = () => {
  const [currentSlide, setCurrentSlide] = useState("Group230");
  const [selectedOption, setSelectedOption] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  console.log({ currentStep });
  const [expandedSlideIndex, setExpandedSlideIndex] = useState(null);

  const toggleSlide = (index) => {
    console.log({ index });
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
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://63bb90b3cf99234bfa5e3b48.mockapi.io/Products")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

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
        <div className="Group218">
          {/*steps*/}
          <div
            className="steps"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div
              className="Group230"
              style={{ flex: 1, cursor: "pointer" }}
              onClick={() => toggleSlide("Group230")}
            >
              <h6 className="text.">
                <img className="num1" src={num1} alt="" />
                <> </>
                اختر الخدمات
              </h6>
            </div>
            <img
              className="line8"
              src={line8}
              alt=""
              style={{ margin: "0 10px" }}
            />
            <div
              className="Group228"
              style={{ flex: 1, cursor: "pointer" }}
              onClick={() => toggleSlide("Group228")}
            >
              <h6 className="text.." style={{ color: "#C4C4C4" }}>
                <img className="num2" src={num2} alt="" />
                <> </>
                التاريخ والوقت
              </h6>
            </div>
            <img
              className="line8"
              src={line8}
              alt=""
              style={{ margin: "0 10px" }}
            />
            <div
              className="Group233"
              style={{ flex: 1, cursor: "pointer" }}
              onClick={() => toggleSlide("Group233")}
            >
              <h6 className="text..." style={{ color: "#C4C4C4" }}>
                <img className="num3" src={num3} alt="" />
                <> </>
                معلوماتك
              </h6>
            </div>
          </div>
          {stepsList.map((step, index) => {
            return currentStep === index ? step.component : null;
          })}
          <div className="end">
            <img className="line7" src={line7} alt=""></img>
            <button
              className="button btn-success"
              style={{ marginRight: 37 }}
              onClick={() => setCurrentStep(currentStep - 1)}
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
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              استمرار{" "}
            </button>
          </div>
        </div>
        {/*ملخص*/}
        <div className="Rectangle3">
          <h5 className="summary">ملخص</h5>
          <img className="line9" src={line9} alt=""></img>
          <div className="Group225">
            <div className="Group222">
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

            <div className="Group223">
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
            <div className="Group224">
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
