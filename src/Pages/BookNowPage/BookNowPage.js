import React from "react";
import BookNow from "./BookNow/BookNow";
import EnterInfo from "./EnterInfo/EnterInfo";
import SelectDate from "./SelectDate/SelectDate";
import SelectService from "./SelectService/SelectService";
import Service from "./Service/Service";
import { AuthProvider } from "./AuthContextService/AuthContextService";

const BookNowPage = () => {
  return (
    <>
      <BookNow />
      <EnterInfo />
      <SelectDate />
      <SelectService />
      <AuthProvider>
        <Service />
      </AuthProvider>
    </>
  );
};
export default BookNowPage;
