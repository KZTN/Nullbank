import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { ApplicationState } from "../../store";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Messages: React.FC = () => {
  const entries = useSelector((state: ApplicationState) => state.translate);
  const [alertmsg, setAlertmsg] = useState<string>("");
  const [severity, setSeverity] = useState<string>("");
  const [alertisopen, setAlertisopen] = useState<boolean>(false);
  useEffect(() => {
    if (entries.error === true) {
      setAlertisopen(true);
      setAlertmsg(`error: ${entries.msg}`);
      setSeverity("error");
    }
    if (entries.error === false && entries.msg !== "") {
      setAlertisopen(true);
      setAlertmsg(`${entries.msg}`);
      setSeverity("success");
    }
  }, [entries.error, entries.msg]);
  const handleClose = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertmsg("");
    setAlertisopen(false);
  };

  function Alert(props: any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <>
      <Snackbar
        open={alertisopen}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity}>
          {alertmsg}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Messages;
