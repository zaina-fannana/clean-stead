import React from "react";
import MaskGroupIcon from "../../assets/images/Mask group.png";
import "./AboutUsPage.css";

const AboutUsPage = () => {
  return (
    <div className="container wrap-header">
      <div className="row justify-content-center align-items-center">
        <div className="col-4">
          <div className="text-wrap">
            <h4>من نحن</h4>
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
              العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
              أخطاء لغوية
            </p>
            <button className="button btn-success">تواصل معنا</button>
          </div>
        </div>
        <div className="col-8 d-flex justify-content-end">
          <div className="image-wrap">
            <img src={MaskGroupIcon} alt="Mask Group"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;