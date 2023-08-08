import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo1 from "../../assets/images/logo1.png";
import "./Header.css";
import SignupForm from "../SignupForm/SignupForm";
import Login from "../Login/Login";
import { useAuthContext } from "../../AuthContext/AuthContext";
import BookNow from "../BookNow/BookNow";
import { Link } from "react-router-dom";
import overview from "../../assets/images/overview.png";
import Mask from "../../assets/images/Mask.png";
import MaskEmail from "../../assets/images/MaskEmail.png";
import MaskCategories from "../../assets/images/MaskCategories.png";
import MaskServices from "../../assets/images/MaskServices.png";
import SignIn from "../../assets/images/SignIn.png";
import OverviewPage from "../OverviewPage/OverviewPage";
import ReservationsPage from "../ReservationsPage/ReservationsPage";

function Header() {
  const [isAuthModalShown, setIsAuthModalShown] = useState(false);
  const [isBookNowVisible, setIsBookNowVisible] = useState(false);
  const [isSlideVisible, setIsSlideVisible] = useState(false);
  const [isLoginComplete, setIsLoginComplete] = useState(false);
  const { isAuthnticated } = useAuthContext();
  const [showOverviewPage, setShowOverviewPage] = useState(false);
  const toggleSlide = (index) => {
    if (index === selectedDivIndex) {
      setIsSlideVisible(false);
      setSelectedDivIndex(-1);
    } else {
      setIsSlideVisible(true);
      setSelectedDivIndex(index);
    }
    setShowOverviewPage(index === 0 && !showOverviewPage);
  };
  const openAuthModal = () => {
    setIsAuthModalShown(true);
  };
  const closeAuthModal = () => {
    setIsAuthModalShown(false);
  };
  const toggleBookNow = () => {
    setIsBookNowVisible((prevValue) => !prevValue);
  };
  const divs = [
    { title: "نظرة عامة", image: overview },
    { title: "الحجوزات", image: Mask },
    { title: "التواصل", image: MaskEmail },
    { title: "التصنيفات", image: MaskCategories },
    { title: "الخدمات", image: MaskServices },
  ];
  const [selectedDivIndex, setSelectedDivIndex] = useState(-1);
  const handleDivClick = (index) => {
    setSelectedDivIndex(index);
  };

  return (
    <Container style={{ fontFamily: "AvenirArabic" }}>
      <Navbar className="navbar" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand
            className="logo"
            href="#home"
            style={{ marginRight: 0 }}
            onClick={() => toggleSlide(0)}
          >
            <img src={logo1} alt=""></img>
            <>
              كلين{" "}
              <span className="stead" style={{ fontWeight: 200, fontSize: 20 }}>
                ستيد
              </span>
            </>
          </Navbar.Brand>
          <Nav className="nav-contents">
            <Nav.Link as={Link} to="/products">
              <h6 style={{ color: "#1D1D35", fontWeight: 200, fontSize: 20 }}>
                الرئيسية
              </h6>
            </Nav.Link>
            <Nav.Link as={Link} to="/Services">
              <h6 style={{ color: "#1D1D35", fontWeight: 200, fontSize: 20 }}>
                الخدمات
              </h6>
            </Nav.Link>
            <Nav.Link className="who-us" href="/AboutUsPage">
              <h6 style={{ color: "#1D1D35", fontWeight: 200, fontSize: 20 }}>
                من نحن
              </h6>
            </Nav.Link>
            <Nav.Link className="call-us" href="/home">
              <h6 style={{ color: "#1D1D35", fontWeight: 200, fontSize: 20 }}>
                اتصل بنا
              </h6>
            </Nav.Link>
          </Nav>

          <Nav className="book-now mr-auto">
            {
              <button
                className="logIn"
                style={{ fontWeight: 200, fontSize: 20 }}
                onClick={openAuthModal}
              >
                دخول
              </button>
            }
            <> </>
            {isAuthnticated ? (
              <button
                className="btn btn-success"
                style={{ fontWeight: 150, fontSize: 15 }}
                onClick={toggleBookNow}
              >
                احجز الان
              </button>
            ) : (
              <button
                className="logIn"
                style={{ fontWeight: 200, fontSize: 20 }}
                onClick={openAuthModal}
              ></button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Login isShow={isAuthModalShown} onClose={closeAuthModal} />
      {isBookNowVisible && <BookNow />}
      {isSlideVisible && (
        <div className="Rectangle4153">
          {divs.map((div, index) => (
            <div
              className="sheet"
              key={index}
              style={{
                background:
                  selectedDivIndex === index ? "#e5f7fd" : "transparent",
                borderRadius: 8,
              }}
              onClick={() => toggleSlide(index)}
            >
              <img className="overview" src={div.image} alt=""></img>
              <p
                className="sheet"
                style={{
                  color: selectedDivIndex === index ? "#00ADEE" : "#000",
                }}
              >
                {div.title}
              </p>

              {selectedDivIndex === index && <div className="chip"></div>}
            </div>
          ))}
          <img src={SignIn} alt="" style={{ marginRight: 22 }}></img>
          <button className="logout" onClick={() => toggleSlide(-1)}>
            تسجيل خروج
          </button>
          {selectedDivIndex === 0 && <OverviewPage />}
          {selectedDivIndex === 1 && <ReservationsPage />}
        </div>
      )}
    </Container>
  );
}

export default Header;
