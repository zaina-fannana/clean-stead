import React from "react";
import "./Services.css";
import { image1 ,Vector ,image2 ,image3 ,image4 ,image5 , image6 ,lines1 ,lines2 ,Line} from "../../../assets";

const Servise = () => {
  return (
    <div className="services">
      <div className="title mb-5">
        <img src={lines1} alt=""></img>
        <h2 style={{ fontWeight: 500, fontSize: 30, color: "#000000" }}>
          {" "}
          الخدمات التي نقدمها{" "}
        </h2>
        <img src={lines2} alt=""></img>
      </div>
      <div className="group1">
        <div className="column1">
          <div className="service1">
            <div className="img1">
              <img src={image1} alt=""></img>
            </div>
            <div className="Rectangle">
              <div className="cleanHome">
                <h3 className="Clean">تنظيف المنازل</h3>
              </div>
              <img className="line" src={Line} alt=""></img>
              <div className="class1">
                <div className="par">
                  <p>
                    <> </>
                    ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت
                    لأنها تحتاج..
                  </p>
                </div>
              </div>
              <div className="text2">
                <h6>رؤية المزيد</h6>
                <div className="img2">
                  <img src={Vector} alt=""></img>
                </div>
              </div>
            </div>
          </div>

          <div className="service2">
            <div className="img44">
              <img src={image2} alt=""></img>
            </div>
            <div className="Rectangle">
              <div className="cleanHome">
                <h3 className="Clean">تنظيف التجاري</h3>
              </div>
              <img className="line" src={Line} alt=""></img>
              <div className="class1">
                <div className="par">
                  <p>
                    ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت
                    لأنها تحتاج..
                  </p>
                </div>
              </div>
              <div className="text1">
                <h6>رؤية المزيد</h6>
                <div className="img2">
                  <img src={Vector} alt=""></img>
                </div>
              </div>
            </div>
          </div>
          <div className="service3">
            <div className="img3">
              <img src={image3} alt=""></img>
            </div>
            <div className="Rectangle">
              <div className="cleanHome">
                <h3 className="Clean">تنظيف السجاد</h3>
              </div>
              <img className="line" src={Line} alt=""></img>
              <div className="class1">
                {" "}
                <div className="par">
                  <p>
                    ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت
                    لأنها تحتاج..
                  </p>
                </div>
              </div>
              <div className="text1">
                <h6>رؤية المزيد</h6>
                <div className="img2">
                  <img src={Vector} alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column2">
          <div className="service4">
            <div className="img4">
              <img src={image4} alt=""></img>
            </div>
            <div className="Rectangle">
              <div className="cleanHome">
                <h3 className="Clean">تنظيف النوافذ</h3>
              </div>
              <img className="line" src={Line} alt=""></img>
              <div className="class1">
                {" "}
                <div className="par">
                  <p>
                    ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت
                    لأنها تحتاج..
                  </p>
                </div>
              </div>
              <div className="text2">
                <h6>رؤية المزيد</h6>
                <div className="img2">
                  <img src={Vector} alt=""></img>
                </div>
              </div>
            </div>
          </div>

          <div className="service2">
            <div className="img5">
              <img src={image5} alt=""></img>
            </div>

            <div className="Rectangle">
              <div className="cleanHome">
                <h3 className="Clean">تنظيف السيارات</h3>
              </div>

              <img className="line" src={Line} alt=""></img>

              <div className="class1">
                {" "}
                <div className="par">
                  <p>
                    ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت
                    لأنها تحتاج..
                  </p>
                </div>
              </div>
              <div className="text1">
                <h6>رؤية المزيد</h6>
                <div className="img2">
                  <img src={Vector} alt=""></img>
                </div>
              </div>
            </div>
          </div>
          <div className="service3">
            <div className="img6">
              <img src={image6} alt=""></img>
            </div>
            <div className="Rectangle">
              <div className="cleanHome">
                <h3 className="Clean">تنظيف بعد البناء</h3>
              </div>

              <img className="line" src={Line} alt=""></img>

              <div className="class1">
                {" "}
                <div className="par">
                  <p>
                    ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت
                    لأنها تحتاج..
                  </p>
                </div>
              </div>
              <div className="text1">
                <h6>رؤية المزيد</h6>
                <div className="img2">
                  <img src={Vector} alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servise;