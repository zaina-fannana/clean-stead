import React from "react";
import "./Reviews.css";
import { comma1 ,Ellipse1 ,comma2 ,Ellipse2 ,Ellipse3 ,lines1 ,lines2} from "../../../assets";

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="title mb-5">
        <img src={lines1} alt=""></img>
        <h2 style={{ fontWeight: 500, fontSize: 30, color: "#000000" }}>
          ماذا يقولون عملائنا
        </h2>
        <img src={lines2} alt=""></img>
      </div>

      <div className="group1">
        <div className="column1">
          <div className="group190">
            <div className="Ellipse1">
              <img src={Ellipse1} alt=""></img>
              <> </>
            </div>
            <div className="Rectangles1">
              <div className="group111">
                <img src={comma1} alt=""></img>
              </div>
              <> </>
              <p className="text3" style={{ fontWeight: 100 }}>
                ندرك صعوبة القيام بتنظيف السجاد من قبل النساء
              </p>

              <> </>
              <h5
                className="text4"
                style={{ fontWeight: 400, fontSize: 16, color: "#2F3239" }}
              >
                محمد أحمد
              </h5>
            </div>
            <> </>
            <div className="group112">
              <img src={comma2} alt=""></img>
            </div>
          </div>

          <div className="group191">
            <div className="Ellipse2">
              <img src={Ellipse2} alt=""></img>
              <> </>
            </div>
            <div className="Rectangles1">
              <div className="group111">
                <img src={comma1} alt=""></img>
              </div>
              <> </>
              <p className="text3" style={{ fontWeight: 100}}>
                ندرك صعوبة القيام بتنظيف السجاد من قبل النساء
              </p>
              <> </>
              <h5
                className="text4"
                style={{ fontWeight: 400, fontSize: 16, color: "#2F3239" }}
              >
                محمد أحمد
              </h5>
            </div>
            <> </>
            <div className="group112">
              <img src={comma2} alt=""></img>
            </div>
          </div>

          <div className="group192">
            <div className="Ellipse3">
              <img src={Ellipse3} alt=""></img>
              <> </>
            </div>
            <div className="Rectangles1">
              <div className="group111">
                <img src={comma1} alt=""></img>
              </div>
              <> </>
              <p className="text3" style={{ fontWeight: 100}}>
                ندرك صعوبة القيام بتنظيف السجاد من قبل النساء
              </p>
              <> </>
              <h5
                className="text4"
                style={{ fontWeight: 400, fontSize: 16, color: "#2F3239" }}
              >
                محمد أحمد
              </h5>
            </div>
            <> </>
            <div className="group112">
              <img src={comma2} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;