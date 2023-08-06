import React from "react";
import lines1 from "../../../assets/images/lines1.png";
import lines2 from "../../../assets/images/lines2.png";
import Maskgroup2 from "../../../assets/images/Maskgroup2.png";
import reliability1 from "../../../assets/images/reliability.png";
import online from "../../../assets/images/online.png";
import discont from "../../../assets/images/discont.png";
import chat1 from "../../../assets/images/chat1.jpeg";

const whyChooseUsList = [
  {
    icon: reliability1,
    title: "الموثقية",
    description: "ندرك صعوبة القيام بتنظيف السجاد من قبل النساء",
  },
  {
    icon: online,
    title: "الحجز اونلاين",
    description: "ندرك صعوبة القيام بتنظيف السجاد من قبل النساء",
  },
  {
    icon: discont,
    title: "خصومات دائمة",
    description: "ندرك صعوبة القيام بتنظيف السجاد من قبل النساء",
  },
  {
    icon: chat1,
    title: "دعم متواصل",
    description: "ندرك صعوبة القيام بتنظيف السجاد من قبل النساء",
  },
];

const WhyChoosUs = () => {
  return (
    <div className="whychoose">
      <div className="title mb-5">
        <img src={lines1} alt=""></img>
        <h2 style={{ fontWeight: 500, fontSize: 30, color: "#000000" }}>
          لماذا تختارنا
        </h2>
        <img src={lines2} alt=""></img>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <img className="w-60 h-60" src={Maskgroup2} alt=""></img>
        </div>

        <div className="col-12 col-md-6 my-auto">
          {whyChooseUsList.map((item, index) => {
            return (
              <div className="d-flex align-items-center mt-3" key={index}>
                <div className="img.rely">
                  <img src={item.icon} alt=""></img>
                </div>
                <div className="mx-3">
                  <h4
                    style={{
                      color: "#303C38",
                      fontSize: 20,
                      fontWeight: 800,
                      fontFamily: "Avenir Arabic",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "Avenir Arabic",
                      fontSize: 20,
                      fontWeight: 300,
                      color: "#6D6E71",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChoosUs;
