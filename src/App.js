import React, { Component } from "react";
import Nav from "./components/layout/Nav";
import News from "./components/News";
import FooterTab from "./components/layout/Footer";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import FAQ from "./components/FAQ";

//const API_URL = "https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=ebb4e990874246c894b63d2e79f04754";
const API_URL =
  "https://newsapi.org/v2/everything?q=covid19&apiKey=ebb4e990874246c894b63d2e79f04754";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route
              exact
              path="/"
              component={() => <News api_url={API_URL} />}
            />
            <Route exact path="/faq" component={FAQ} />
          </Switch>
          <FooterTab />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
