import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import Home from "./components/pages/home";
import { strings } from "data/strings";

const App: React.FC<RouteComponentProps> = (props) => {
  const handleSpanishClick = () => {
    props.history.push("/es");
  };
  const handleEnglishClick = () => {
    props.history.push("/en");
  };
  return (
    <Switch>
      <Route
        path="/en"
        component={() => (
          <Home
            strings={strings.english}
            handleSpanishClick={handleSpanishClick}
            handleEnglishClick={handleEnglishClick}
          />
        )}
      />
      <Route
        path="/es"
        component={() => (
          <Home
            strings={strings.spanish}
            handleSpanishClick={handleSpanishClick}
            handleEnglishClick={handleEnglishClick}
          />
        )}
      />
      <Redirect to="/en" />
    </Switch>
  );
};

export default withRouter(App);
