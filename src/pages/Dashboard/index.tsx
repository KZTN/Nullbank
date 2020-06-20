import React from "react";
import "./styles.scss";
import Form from "../../components/Form";
import Entries from "../../components/Entries";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="content">
        <Form />
        <Entries />
      </div>
    </div>
  );
}
