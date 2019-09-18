import React from "react";
// import { Grid } from "@material-ui/core";

import classnames from "classnames";

// styles
import "react-toastify/dist/ReactToastify.css";
import useStyles from "./styles";

// components

import PageTitle from "../../components/PageTitle/PageTitle";

export default function NotificationPage(props) {
  var classes = useStyles();
  //   var [notifications] = useState('');
  return (
    <>
      <PageTitle title="Reports" />
      <h1 className={classnames(classes.pageTitle)}>Reports Page</h1>
    </>
  );
}
