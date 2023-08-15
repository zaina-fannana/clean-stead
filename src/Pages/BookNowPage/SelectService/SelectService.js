import React from "react";
import Service from "../Service/Service";
import "./SelectService.css";
import { line7, Vector2 } from "../../../assets";

const BookNowList = [
  {
    title: "تنظيف المنازل",
    description: "رؤية الخدمات",
    icon: Vector2,
    contentContainerId: "Rectangle6"
  },
  {
    title: "التنظيف التجاري",
    description: "رؤية الخدمات",
    icon: Vector2,
    contentContainerId: "Rectangle7"
  },
  {
    title: "تنظيف النوافذ",
    description: "رؤية الخدمات",
    icon: Vector2,
    contentContainerId: "Rectangle8"
  },
  {
    title: "تنظيف السجاد",
    description: "رؤية الخدمات",
    icon: Vector2,
    contentContainerId: "Rectangle9"
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
