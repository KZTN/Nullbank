import React, { useState, FormEvent } from "react";

// import { Container } from './styles';

const Form: React.FC = () => {
  const [textfield, setTextField] = useState<string>();

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();
    alert(textfield);
    setTextField("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="inputfield"
        id="inputfield"
        value={textfield}
        onChange={(e) => setTextField(e.target.value)}
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
