import React from "react";
import "./ReservationsPage.css";
import { MDBCol, MDBIcon } from "mdbreact";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import { header ,acceptable ,unacceptable ,hanging0 ,TrueOrFalse ,notfiacation1} from "../../assets";

const ReservationsPage = () => {
  return (
    <div className="RectangleReservations">
      <h5 className="Reservations">الحجوزات</h5>
      <div className="notices">
        <div className="notification">
          <img className="Rectangle2" src={notfiacation1} alt=""></img>
          <img className="header" src={header} alt=""></img>
          <h5 className="profile">محمد الهبيل</h5>
        </div>
      </div>

      <div className="searchRectangle">
        <MDBCol md="6">
          <form className="form-inline mt-4 .mb-4">
            <MDBIcon icon="search" />
            <input
              className="form-control form-control-sm ml-3 w-75"
              type="text"
              placeholder="1565 او محمد الهبيل .."
              aria-label="Search"
            />
          </form>
        </MDBCol>

        <div className="ReservationStatuses">
          <div className="all">
            <h6 className="all0">الكل</h6>
          </div>

          <div className="hanging0">
            <h6 className="hanging">معلق</h6>
          </div>

          <div className="Confirmed0">
            <h6 className="Confirmed">تم تأكيده</h6>
          </div>

          <div className="rejected0">
            <h6 className="rejected">تم رفضه</h6>
          </div>
        </div>
        <Form.Select aria-label="Default select example">
          <option value="1">الأحدث</option>
          <option value="2">الأقدم</option>
        </Form.Select>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>رقم الحجز</th>
            <th>الاسم</th>
            <th>العنوان</th>
            <th>السعر</th>
            <th>الوقت</th>
            <th>تكرار العمل</th>
            <th>الحالة</th>
            <th>اكشن</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>6351</td>
            <td>محمد الهبيل</td>
            <td>النصر, شارع النصر</td>
            <td>150$</td>
            <td>22/5/2022 | 09:30 AM</td>
            <td>مره واحده</td>
            <td>
              <img src={hanging0} alt=""></img>
            </td>
            <td>
              <img src={TrueOrFalse} alt=""></img>
            </td>
          </tr>
          <tr>
            <td>5451</td>
            <td>محمد الهبيل</td>
            <td>الكرامة, شارع الكرامة</td>
            <td>356$</td>
            <td>22/5/2022 | 09:30 AM</td>
            <td>مره واحده</td>
            <td>
              <img src={acceptable} alt=""></img>
            </td>
            <td>
              <img src={TrueOrFalse} alt=""></img>
            </td>
          </tr>
          <tr>
            <td>2548</td>
            <td>محمد الهبيل</td>
            <td>الكرامة, شارع الكرامة</td>
            <td>648$</td>
            <td>22/5/2022 | 09:30 AM</td>
            <td>مره واحده</td>
            <td>
              <img src={unacceptable} alt=""></img>
            </td>
            <td>
              <img src={TrueOrFalse} alt=""></img>
            </td>
          </tr>
        </tbody>
      </Table>

      <Pagination>
        <Pagination.Item>{100}</Pagination.Item>
        <Pagination.Item>{50}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item active>{3}</Pagination.Item>
        <Pagination.Item disabled>{2}</Pagination.Item>
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </div>
  );
};

export default ReservationsPage;