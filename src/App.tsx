import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact>
              <Header />
              <AppBody>
                <Sidebar />
                <Switch>
                  <Route path="/" exact></Route>
                </Switch>
              </AppBody>
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div``;
