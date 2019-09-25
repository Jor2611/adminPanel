import React from "react";
import {
  //  Route,
  // Switch,
  // Redirect,
  withRouter
  // Redirect
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

//im ejer@
import AdminLayout from "./RoleSwitcher/AdminLayout";
import PMLayout from "./RoleSwitcher/PMLayout";
import DevLayout from "./RoleSwitcher/DevLayout";

// context
import { useLayoutState } from "../../context/LayoutContext";
import { useUserState } from "../../context/UserContext";

function Layout(props) {
  const classes = useStyles();

  // global
  const { isSidebarOpened } = useLayoutState();
  const { role } = useUserState();

  const roleSwitcher = () => {
    switch (role) {
      case "admin":
        return <AdminLayout />;
      case "pm":
        return <PMLayout />;
      case "dev":
        return <DevLayout />;
      default:
        return;
    }
  };

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        {role === "admin" ? <Sidebar /> : null}
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: isSidebarOpened
          })}
        >
          <div className={classes.fakeToolbar} />
          {roleSwitcher()}
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
