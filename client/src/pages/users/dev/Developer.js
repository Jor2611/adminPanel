import React from "react";
// import { Grid } from "@material-ui/core";
import classnames from "classnames";
// styles
import "react-toastify/dist/ReactToastify.css";
import useStyles from "./styles";
// components
import PageTitle from "../../../components/PageTitle/PageTitle";

export default function DeveloperPage(props) {
  var classes = useStyles();
  return (
    <>
      <PageTitle title="Users" />
      <h1 className={classnames(classes.pageTitle)}>Developer Page</h1>
    </>
  );
}
