import React from "react";
import line7 from "../../assets/images/Line7.png";
import Service from "../Service/Service";
import Vector2 from "../../assets/images/Vector2.png";
import "./SelectService.css";

const BookNowList = [
  {
    title: "تنظيف المنازل",
    description: "رؤية الخدمات",
    icon: Vector2,
  },
  {
    title: "التنظيف التجاري",
    description: "رؤية الخدمات",
    icon: Vector2,
  },
  {
    title: "تنظيف النوافذ",
    description: "رؤية الخدمات",
    icon: Vector2,
  },
  {
    title: "تنظيف السجاد",
    description: "رؤية الخدمات",
    icon: Vector2,
  },
];
const SelectService = () => {
  return (
    <div className="slide">
      <img
        className="line7"
        src={line7}
        alt=""
        style={{
          marginTop: 15,
        }}
      ></img>

      <div className="text21">
        <p className="text61">
          اختر الخدمات التي تحتاج تنظيفها من أي تصنيف تريده
        </p>
      </div>
      {BookNowList.map((item, index) => {
        return <Service item={item} key={index} />;
      })}
    </div>
  );
};
export default SelectService;
