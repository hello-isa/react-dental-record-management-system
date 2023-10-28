import React, { useState, useEffect } from "react";
import VisitTable from "../components/VisitTable";

function Visit() {
  const [visits, setVisits] = useState([]);

  const fetchVisitData = () => {
    const jsonFileUrl =
      "https://raw.githubusercontent.com/hello-isa/react-dental-record-management-system/main/visit-page-mock-data.json";

    fetch(jsonFileUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setVisits(data);
      });
  };

  useEffect(() => {
    fetchVisitData();
  }, []);

  return (
    <>
      <h1>Visit Page</h1>
      <VisitTable />
    </>
  );
}

export default Visit;
