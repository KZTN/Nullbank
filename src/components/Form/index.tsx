import React, { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import * as TranslateActions from "../../store/ducks/translates/actions";
import { FaRegKeyboard } from "react-icons/fa";

import "./styles.scss";

const Form: React.FC = () => {
  const [textfield, setTextField] = useState<string>("");
  const dispatch = useDispatch();

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();
    dispatch(TranslateActions.LoadRequest(parseFloat(textfield)));
    setTextField("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FaRegKeyboard size={32} color="#f5f5f2" style={{ marginRight: 5 }} />
        <input
          type="text"
          name="inputfield"
          id="inputfield"
          value={textfield}
          placeholder="Type here..."
          onChange={(e) => setTextField(e.target.value)}
          required
        />
        <button type="submit">send</button>
      </form>
    </>
  );
};

export default Form;
