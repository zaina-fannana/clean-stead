import React from "react";
import "./SliderPage.css";
//import slider from "../../assets/images/slider.png";

const SliderPage = () => {
  return (
    <div className="Slider">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h4 style={{ fontSize: 40 }}>
              اختار يلي<span> بخلصك </span> من مره وحده!{" "}
            </h4>
            <> </>
            <h5 style={{ fontWeight: 280, fontSize: 30 }}>
              ما تشيل هم كلمنا بنساعدك احجز خدمة مضمونة بكبسة زر
            </h5>
            <button className="button1" style={{fontweight: 500}}>تواصل معنا</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderPage;
