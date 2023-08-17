import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./ContactUs.css";
import { lines2 } from "../../../assets";
import MaskGroupIcon from "../../../assets/images/Mask group.png";
const initialValues = {
  name: "",
  phone: "",
  message: "",
};

const onSubmit = (values) => {
  console.log("Form Data: ", values);
};

const validationSchema = Yup.object({
  service: Yup.string().required("هذا الحقل مطلوب!"),

  name: Yup.string()
    .required("هذا الحقل مطلوب!")
    .test("wordCount", "يجب أن يتكون الاسم على الأقل من كلمة واحدة ", (value) => {
      if (value) {
        const words = value.split(" ").filter((word) => word !== "");
        return words.length >= 1;
      }
      return false;
    }),

  phone: Yup.string()
    .matches(/^059[98752]{1}[0-9]{6}$/g, "رقم الهاتف غير صحيح")
    .required("هذا الحقل مطلوب!"),

  message: Yup.string()
    .required("هذا الحقل مطلوب!")
    .test(
      "wordCount",
      "يجب أن تتكون الرسالة على الأقل من 10 كلمات",
      (value) => {
        if (value) {
          const words = value.split(" ").filter((word) => word !== "");
          return words.length >= 10;
        }
        return false;
      }
    ),
});

export const ContactUs = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log("Formik Visited: ", formik.touched);

  return (
    <div className="RectangleContactUs">
      <h3 className="ConnectUsTitle">
        تواصل معنا
        <img src={lines2} alt="" style={{ marginRight: 10 }}></img>
      </h3>
      <form onSubmit={formik.handleSubmit} className="ConnectUsData">
        <form className="ContactInformation" onSubmit={formik.handleSubmit}>
          <div className="relative">
            <div class="form-group">
              <label for="exampleFormControlSelect1" className="TheService">
                الخدمة
              </label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>تنظيف المنازل</option>
                <option>تنظيف التجاري</option>
                <option>تنظيف السجاد</option>
                <option>تنظيف النوافذ</option>
                <option>تنظيف السيارات</option>
                <option>تنظيف بعد البناء</option>
              </select>
            </div>
            {formik.touched.service && formik.errors.service ? (
              <div className="error">{formik.errors.service}</div>
            ) : null}
          </div>
          <form>
            <div className="NameAndPhone">
              <div class="row">
                <div class="form-group col-md-6">
                  <label className="Name1">الاسم</label>
                  <input
                    type="text"
                    id="name1"
                    name="name1"
                    placeholder="الاسم"
                    className="NamePerson"
                    {...formik.getFieldProps("name")}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="error">{formik.errors.name}</div>
                  ) : null}
                </div>

                <div class="form-group col-md-6">
                  <label className="phone1">رقم الجوال</label>
                  <input
                    type="text"
                    id="phone1"
                    name="phone1"
                    placeholder="رقم الجوال"
                    className="PhonePerson"
                    {...formik.getFieldProps("phone")}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="error1">{formik.errors.phone}</div>
                  ) : null}
                </div>
              </div>

              <button type="submit" class="btn btn-primary">
                Sign in
              </button>
            </div>
          </form>

          <div class="Group-Message">
            <label for="exampleFormControlTextarea1" className="message">
              الرسالة
            </label>
            <textarea
              className="form-control"
              id="writeMessage"
              rows="3"
              placeholder="اكتب الرسالة هنا"
              {...formik.getFieldProps("message")}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className="error">{formik.errors.message}</div>
            ) : null}
          </div>
        </form>
      </form>
      <button type="submit" className="SendMessage">
        أرسل
      </button>
      <div className="col-8 d-flex justify-content-end">
        <div className="image-wrap">
          <img className="MaskImage" src={MaskGroupIcon} alt="Mask Group"></img>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
