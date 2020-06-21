import React, { useEffect, useState } from "react";
import { ApplicationState } from "../../store";
import api from "../../services/api";
import { useSelector } from "react-redux";
import { AxiosResponse, AxiosError } from "axios";
// import { Container } from './styles';

const Counter: React.FC = () => {
  const entries = useSelector((state: ApplicationState) => state.translate);
  const [translateCounter, setTranslateCounter] = useState();
  useEffect(() => {
    async function getData() {
      await api
        .get(`/?translate=${entries.history.length}`)
        .then((response: AxiosResponse) => {
          setTranslateCounter(response.data);
        })
        .catch((error: AxiosError) => {
          console.log(error);
        });
    }
    getData();
  }, [entries.history.length]);

  return <strong>Number of entries: {translateCounter}</strong>;
};

export default Counter;
