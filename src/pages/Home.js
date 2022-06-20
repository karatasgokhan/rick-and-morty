import React from "react";
import LocationTable from "../components/tables/LocationTable";

function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Location Table</h1>
      </div>
      <LocationTable />
    </>
  );
}

export default Home;
