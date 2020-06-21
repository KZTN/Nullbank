import React, { useEffect, useState } from "react";
import { ApplicationState } from "../../store";
import api from "../../services/api";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AxiosResponse, AxiosError } from "axios";
import * as TranslateActions from "../../store/ducks/translates/actions";

import "./styles.scss";
const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const entries = useSelector((state: ApplicationState) => state.translate);
  const [translateCounter, setTranslateCounter] = useState();
  useEffect(() => {
    async function getData() {
      await api
        .get(`/?translate=${entries.history.length}`)
        .then((response: AxiosResponse) => {
          setTranslateCounter(response.data);
          localStorage.setItem("counter", response.data);
        })
        .catch((error: AxiosError) => {
          console.log(error);
        });
    }
    getData();
  }, [entries.history.length]);

  function handleReset(): void {
    dispatch(TranslateActions.LoadReset());
  }

  return (
    <div className="counter">
      <span>
        Number of entries:<strong>{translateCounter}</strong>
      </span>
      <button type="button" onClick={handleReset}>
        reset
      </button>
    </div>
  );
};

export default Counter;
