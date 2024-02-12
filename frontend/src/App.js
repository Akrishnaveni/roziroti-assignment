import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import DashboardPage from "./components/DashboardPage";
import TransactionFormPage from "./components/TransactionFormPage";
import ReportsPage from "./components/ReportsPage";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/NotFound";
//
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <ProtectedRoute exact path="/dashboard" component={DashboardPage} />
        <ProtectedRoute
          exact
          path="/transaction"
          component={TransactionFormPage}
        />
        <ProtectedRoute exact path="/reports" component={ReportsPage} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
    </Router>
  );
};

export default App;
