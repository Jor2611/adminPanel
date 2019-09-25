import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import PM from "../../../pages/PM";
import Report from "../../../pages/report";
import Notification from "../../../pages/notification";

const PMLayout = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/pm/" />} />
      <Route exact path="/pm/" component={PM} />
      <Route exact path="/pm/report" component={Report} />
      <Route exact path="/pm/notification" component={Notification} />
      <Route exact path="/*" render={() => <Redirect to="/pm/" />} />
    </Switch>
  );
};

export default withRouter(PMLayout);
