import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

//im ejer@
import Notification from "../../pages/notification";
import Report from "../../pages/report";
import Admin from "../../pages/admin";

// context
import { useLayoutState } from "../../context/LayoutContext";
import { useUserState } from "../../context/UserContext";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();
  var { role } = useUserState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        {role === "admin" ? <Sidebar /> : null}
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened
          })}
        >
          <div className={classes.fakeToolbar} />
          {role === "admin" ? (
            <Switch>
              <Route
                path="/app/users/*"
                render={() => <Redirect to="/app/users" />}
              />
              <Route path="/app/users" component={Admin} />
              <Route path="/app/report" component={Report} />
              <Route path="/app/notification" component={Notification} />
              <Route
                path="/app/*"
                render={() => <Redirect to="/app/users" />}
              />
            </Switch>
          ) : (
            <h1>Not Admin</h1>
          )}
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
