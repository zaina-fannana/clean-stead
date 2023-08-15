import React, { useEffect, useState, createContext, useContext } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";
import "./Service.css";
import { Maskgroup4, Vector2, Vector3 } from "../../../assets";
import { useAuth } from "../AuthContextService/AuthContextService"; 

const Service = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [activeDiv, setActiveDiv] = useState(null);
  const [counter, setCounter] = useState(0);

  const handleDivClick = (divName) => {
    setActiveDiv(divName);
  };

  const incrementCount = () => {
    setCounter(counter + 1);
  };

  const decrementCount = () => {
    setCounter((c) => Math.max(c - 1, 0));
  };

  const servicesOptions = [
    {
      id: "Rectangle6",
      title: "غرفة النوم",
      price: "$ 15",
      imgSrc: Maskgroup4,
      buttonText: "رؤية التفاصيل",
    },
    {
      id: "Rectangle7",
      title: "غرفة النوم",
      price: "$ 15",
      imgSrc: Maskgroup4,
      buttonText: "اخفاء التفاصيل",
      additionalInfo: [
        {
          title: "العناصر التي ستيم تنظيفها في هذه الغرفة",
          content: (
            <div className="element">
              <ul>
                <li className="element.">العناصر المختارة</li>
                <li className="element.">العناصر المختارة</li>
                <li className="element.">العناصر المختارة</li>
              </ul>
            </div>
          ),
        },
      ],
    },
    {
      id: "Rectangle8",
      title: "غرفة النوم",
      price: "$ 15",
      imgSrc: Maskgroup4,
      buttonText: "رؤية التفاصيل",
    },
  ];
  const servicesOptionsData = servicesOptions.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  console.log({ item });
  return (
    <div>
      <div
        className="d-flex align-items-center mt-3"
        style={{
          border: "1px solid #F2F2F2",
          padding: "10px",
          borderRadius: "15px",
        }}
      >
        <div className="mx-3">
          <h5
            style={{
              color: "#303C38",
              fontSize: 20,
              fontFamily: "Avenir Arabic",
            }}
          >
            {item.title}
          </h5>
        </div>

        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          style={{
            background: "#fff",
          }}
        >
          {open ? (
            <>
              <span
                style={{
                  color: "#00ADEE",
                  background: "#fff",
                  marginRight: 20,
                }}
              >
                إخفاء الخدمات
              </span>
              <> </>
              <img className="img.vector3" src={Vector3} alt="Hide" />
            </>
          ) : (
            <>
              <span style={{ color: "#00ADEE", background: "#fff" }}>
                رؤية التفاصيل
              </span>
              <img className="img.vector2" src={Vector2} alt="See" />
            </>
          )}
        </Button>
      </div>
      <div>
        <Collapse in={open}>
          <div
            id={`example-collapse-text`}
            className={item.contentContainerId}
            onClick={() => {}}
          >
            {servicesOptionsData.map((rect, index) => (
              <div className={rect.id} key={index}>
                <Form>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        style={{ marginRight: 0 }}
                      />
                    </div>
                  ))}
                </Form>
                <img className="Maskgroup4" src={rect.imgSrc} alt="" />
                <h6 className="bedroom">{rect.title}</h6>
                <h4 className="price">{rect.price}</h4>
                <div className="btn-group">
                  <>
                    <button
                      type="button"
                      className="btn btn-warning d-flex justify-content-center align-items-center"
                      style={{
                        borderRadius: 6,
                        border: "#00adee",
                        background: "#E5F7FD",
                      }}
                      onClick={incrementCount}
                    >
                      +
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={counter}
                      onChange={(e) => setCounter(e.target.value)}
                      className="form-control"
                      style={{
                        textAlign: "center",
                        width: 35,
                        padding: 0,
                        height: 35,
                        marginTop: -40,
                        marginRight: 10,
                      }}
                    />
                    <button
                      type="button"
                      className="btn btn-warning1 d-flex justify-content-center align-items-center"
                      onClick={decrementCount}
                      style={{
                        borderRadius: 6,
                        border: "#00adee",
                        background: "#E5F7FD",
                      }}
                    >
                      -
                    </button>
                  </>
                </div>
                <div className="RectangleHide.Show">
                  <h6 className="show-hide" style={{}}>
                    {rect.buttonText}
                  </h6>
                  <img className="vactor9" src={item.icon} alt="" />
                </div>
                {rect.additionalInfo &&
                  rect.additionalInfo.map((info, infoIndex) => (
                    <div key={`info-${infoIndex}`}>
                      <p className="elements">{info.title}</p>
                      <p>{info.content}</p>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </Collapse>
      </div>
    </div>
  );
};
export default Service;
