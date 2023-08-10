import React from "react";
import "./OverviewPage.css";
import { header ,totalBooking ,hanging ,Confirmed ,rejected ,fullGraph ,email0 ,Mask0 ,notfiacation1} from "../../assets";

const OverviewPage = () => {
  return (
    <div className="RectangleOverview">
      <h5 className="overview">نظرة عامة</h5>

      <div className="notices">
        <div className="notification">
          <img className="Rectangle2" src={notfiacation1} alt=""></img>
          <img className="header" src={header} alt=""></img>
          <h5 className="profile">محمد الهبيل</h5>
        </div>
      </div>

      <div className="Cases">
        <div className="cases">
          <div className="totalBooking">
            <img src={totalBooking} alt=""></img>
            <h3 className="totalNum">55</h3>
            <h5 className="totalBooking0">اجمالي الحجوزات</h5>
          </div>

          <div className="hanging">
            <img src={hanging} alt=""></img>
            <h3 className="hangingNum">41</h3>
            <h5 className="hanging0">معلق</h5>
          </div>

          <div className="Confirmed">
            <img src={Confirmed} alt=""></img>
            <h3 className="ConfirmedNum">67</h3>
            <h5 className="Confirmed0">تم تأكيده</h5>
          </div>

          <div className="rejected">
            <img src={rejected} alt=""></img>
            <h3 className="rejectedNum">24</h3>
            <h5 className="rejected0">تم رفضه</h5>
          </div>
        </div>
      </div>

      <div className="sheet2">
        <div className="Reservations0">
          <h6 className="Reservations">حجوزات اليوم</h6>
          <h6 className="TimeAndDate">as of 25 May 2022, 09:41 PM</h6>
        </div>

        <div className="TimePeriod">
          <div className="today">
            <h6 className="today0">اليوم</h6>
          </div>

          <div className="week">
            <h6 className="week0">الاسبوع</h6>
          </div>

          <div className="month">
            <h6 className="month0">الشهر</h6>
          </div>
        </div>

        <img className="fullGraph" src={fullGraph} alt=""></img>

        <div className="activities">
          <h6 className="activities0">أخر النشاطات</h6>

          <div className="Reserve">
            <img className="Mask0" src={Mask0} alt=""></img>
            <p className="Reserve">محمد حجز موعد جديد</p>
          </div>

          <div className="send" style={{ marginTop: -17 }}>
            <img className="email0" src={email0} alt=""></img>
            <p className="send">محمد ارسل رسالة</p>
          </div>

          <div className="Reserve" style={{ marginTop: 12 }}>
            <img className="Mask0" src={Mask0} alt=""></img>
            <p className="Reserve">محمد حجز موعد جديد</p>
          </div>

          <div className="send" style={{ marginTop: -16 }}>
            <img className="email0" src={email0} alt=""></img>
            <p className="send">محمد ارسل رسالة</p>
          </div>

          <div className="Reserve" style={{ marginTop: 10 }}>
            <img className="Mask0" src={Mask0} alt=""></img>
            <p className="Reserve">محمد حجز موعد جديد</p>
          </div>

          <div className="send" style={{ marginTop: -15 }}>
            <img className="email0" src={email0} alt=""></img>
            <p className="send">محمد ارسل رسالة</p>
          </div>

          <div className="Reserve" style={{ marginTop: 10 }}>
            <img className="Mask0" src={Mask0} alt=""></img>
            <p className="Reserve">محمد حجز موعد جديد</p>
          </div>

          <div className="send" style={{ marginTop: -17 }}>
            <img className="email0" src={email0} alt=""></img>
            <p className="send">محمد ارسل رسالة</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;