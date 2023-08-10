import React from "react";
import "./Footer.css";
import { message ,phone ,map ,logo1} from "../../assets";

const Footer = () => {
  return (
    <footer className="mx-auto bg-#E5F7FD  text-#7D7E82  pt-5 pb-4">
      <div className="containar text-center text-md-left">
        <div className="row text-end text-md-left">
          <div className="col-md-4 col-lg-2 mx-auto mt-3 text">
            <div className="logo" href="#home">
              <h4>
                كلين
                <> </>
                <span style={{ color: "#00adee" }}>
                  ستيد <img src={logo1} alt=""></img>
                </span>
              </h4>
            </div>
            <p
              className="text"
              style={{
                fontSize: 17,
              }}
            >
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص.
            </p>
          </div>

          <div className="col-md-3 col-lg-2 mx-auto mt-3 text-end">
            <h5 className="text-uppercase mb-4 font-weight- text-end">
              خدماتنا
            </h5>
            <div className="servise">
              <div>
                <p className="text">تنظيف المنازل</p>

                <p className="text">تنظيف التجاري</p>

                <p className="text">تنظيف السجاد</p>

                <p className="text">تنظيف النوافذ</p>

                <p className="text">تنظيف السيارات</p>

                <p className="text">تنظيف بعد البناء</p>
              </div>
            </div>
          </div>

          <div className="col-md-2 col-lg-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-end ">
              {" "}
              تواصل معنا{" "}
            </h5>

            <div className="servise">
              <div>
                <p className="fas2 mr-3">
                  <img src={phone} alt="phone"></img>
                  +970592700722
                </p>
              </div>
              <div className="img">
                <img className="fas1 mr-3" src={message} alt="message"></img>
                <p>eng.mohammadalhabil@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-lg-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weidht-bold text-end">
              تابعنا على
            </h5>

            <ul className="list-unstyled list-inline px-0">
              <li className="list-inline-item">
                <a href="#" className="btn-floating btn-sm text-start">
                  <i
                    className="fa-brands fa-facebook-f"
                    style={{ color: "gray" }}
                  ></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="btn-floating btn-sm text">
                  <i className="fab fa-twitter" style={{ color: "gray" }}></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="btn-floating btn-sm text">
                  <i className="fab fa-youtube" style={{ color: "gray" }}></i>
                </a>
              </li>
              <> </>
              <li className="list-inline-item">
                <a href="#" className="btn-floating btn-sm text">
                  <i
                    className="fa-brands fa-whatsapp"
                    style={{ color: "gray" }}
                  ></i>
                </a>
              </li>
              <> </>
              <li className="list-inline-item">
                <a href="#" className="btn-floating btn-sm text">
                  <i className="fab fa-instagram" style={{ color: "gray" }}></i>
                </a>
              </li>
              <>ㅤ</>
              <li className="list-inline-item">
                <a href="#" className="btn-floating btn-sm text">
                  <i
                    className="fa-sharp fa-light fa-g"
                    style={{ color: "gray" }}
                  ></i>
                </a>
              </li>
            </ul>

            <img className="mapImage"src={map} alt="map"></img>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-12">
            <hr className="divider" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="copyrightText">
              <p>جميع الحقوق محفوظة © 2022</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;