import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Dev from "../../../pages/Dev";
import Report from "../../../pages/report";
import Notification from "../../../pages/notification";
const DevLayout = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/dev/" />} />
      <Route exact path="/dev/" component={Dev} />
      <Route exact path="/dev/report/" component={Report} />
      <Route exact path="/dev/notification/" component={Notification} />
      <Route exact path="/*" render={() => <Redirect to="/dev/" />} />
    </Switch>
  );
};

export default withRouter(DevLayout);
