import React from "react";
import BookNow from "./BookNow/BookNow";
import EnterInfo from "./EnterInfo/EnterInfo";
import SelectDate from "./SelectDate/SelectDate";
import SelectService from "./SelectService/SelectService";
import Service from "./Service/Service";

const BookNowPage = () => {
  return (
    <>
      <BookNow />
      <EnterInfo />
      <SelectDate />
      <SelectService />
      <Service />
    </>
  );
};
export default BookNowPage;