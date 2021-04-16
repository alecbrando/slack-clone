import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./components/Login";
// @ts-ignore
import Spinner from "react-spinkit";
function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoadingContainer>
        <AppLoadingInner>
          <img
            src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
            alt="loading"
          />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingInner>
      </AppLoadingContainer>
    );
  }
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Route path="/" exact>
              <Header />
              <AppBody>
                <Sidebar />
                <Switch>
                  <Route path="/" exact>
                    <Chat />
                  </Route>
                </Switch>
              </AppBody>
            </Route>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppLoadingContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;
const AppLoadingInner = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    height: 100px;
    padding: 20px;
    object-fit: contain;
    margin-bottom: 30px;
  }
`;
const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
