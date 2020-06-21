import React from "react";
import "./styles.scss";
import Form from "../../components/Form";
import Entries from "../../components/Entries";
import Counter from "../../components/Counter";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="content">
        <Counter />
        <Form />
        <Entries />
      </div>
    </div>
  );
}
