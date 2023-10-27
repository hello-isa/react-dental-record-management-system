import React, { useState, useEffect } from "react";

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
      {visits.map((visit) => (
        <div key={visit.id}>
          <div>{visit.date}</div>
          <div>{visit.visit_purpose}</div>
          <div>{visit.treatment}</div>
          <div>{visit.balance}</div>
          <br />
        </div>
      ))}
    </>
  );
}

export default Visit;
