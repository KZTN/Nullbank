import React from "react";
import { ApplicationState } from "../../store";
import { useSelector } from "react-redux";

const Entries: React.FC = () => {
  const entries = useSelector((state: ApplicationState) => state.translate);
  console.log(entries.history);
  if (entries.error) {
    alert(entries.msgerror);
  } else {
    alert("success");
  }
  return (
    <div className="entries">
      <ul>
        {entries.history.map((entry) => (
          <li key={entry.id}>
            <span>
              Número literal: <strong>{entry.literal_number}</strong>
            </span>
            <br />
            <span>
              Número por extenso: <strong>{entry.extented_number}</strong>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Entries;
