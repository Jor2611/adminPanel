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
import Admin from "../../pages/users/admin";
import Developer from "../../pages/users/dev";
import ProjectManager from "../../pages/users/pm";

// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route path="/app/notification" component={Notification} />
            <Route path="/app/report" component={Report} />
            <Route
              exact
              path="/app/users"
              render={() => <Redirect to="/app/users/admin" />}
            />
            <Route path="/app/users/admin" component={Admin} />
            <Route path="/app/users/pm" component={ProjectManager} />
            <Route path="/app/users/dev" component={Developer} />
          </Switch>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
