import React, { useState, Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";
import "./SelectDate.css";
import { line7 ,Date} from "../../../assets";

const SelectDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  return (
    <div className="DateAndTimeslide">
      <div className="ChooseDate">
        <div className="choose0">
          <img className="line7" src={line7} alt="" style={{
              marginTop: 15,
            }}/>
          <h5 className="chooseTheDate">اختر موعد الحجز</h5>
          <div
            className="loop"
            style={{ margin: "20px 0" }}
          >
            <div className="loop" style={{ display: "flex", gap: "10px" }}>
              <h4 className="loop.">تكرار الخدمة</h4>

              <Form>
                {["radio"].map((type) => (
                  <div
                    key={`inline-${type}`}
                    className="mb-3"
                    style={{ marginTop: 45, marginRight: -105 }}
                  >
                    <div className="Rectangle12">
                      <Form.Check
                        inline
                        label="مره واحده"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                    </div>

                    <div className="Rectangle12">
                      <Form.Check
                        inline
                        label="يوميا"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                    </div>
                    <div className="Rectangle12">
                      <Form.Check
                        inline
                        label="اسبوعيا"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                    </div>
                    <div className="Rectangle12">
                      <Form.Check
                        inline
                        label="شهريا"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                    </div>
                  </div>
                ))}
              </Form>
            </div>
          </div>

          <div className="date">
            <h4 className="date">التاريخ والوقت</h4>
            <div className="DateAndTimeRectangle">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateSelect}
                dateFormat="MM/dd/yyyy"
                placeholderText="التاريخ والوقت"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
              <img className="Date" src={Date} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectDate;