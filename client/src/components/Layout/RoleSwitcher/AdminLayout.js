import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Admin from "../../../pages/Admin";
import Report from "../../../pages/report";
import Notification from "../../../pages/notification";

const AdminLayout = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/admin/" />} />
      <Route exact path="/admin/" component={Admin} />
      <Route exact path="/admin/report" component={Report} />
      <Route exact path="/admin/notification" component={Notification} />
      <Route exact path="/*" render={() => <Redirect to="/admin" />} />
    </Switch>
  );
};

export default withRouter(AdminLayout);
