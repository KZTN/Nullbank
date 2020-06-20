import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RootState from "../../store/rootReducer";

const Entries: React.FC = () => {
  const entries = useSelector((state: RootState) => state.translate.entries);
  return (
    <div className="entries">
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    </div>
  );
};

export default Entries;
