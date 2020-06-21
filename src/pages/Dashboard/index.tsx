import React from "react";
import "./styles.scss";
import Form from "../../components/Form";
import Entries from "../../components/Entries";
import Counter from "../../components/Counter";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Messages from "../../components/Messages";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Nav />
      <div className="content">
        <Header />
        <Form />
        <Entries />
        <Counter />
        <Messages />
      </div>
    </div>
  );
}
