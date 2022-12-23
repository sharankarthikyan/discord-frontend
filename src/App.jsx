// importing built in libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// current component styles
import "./App.css";

// component
import LoginPage from "./pages/auth/login/login.page";
import SignUpPage from "./pages/auth/signup/signup.page";
import DashboardPage from "./pages/dashboard/dashboard.page";
import FourOFour from "./pages/404/404.page";

import AlertNotification from "./components/alert/alert.component";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<DashboardPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="*" element={<FourOFour />}></Route>
        </Routes>
      </Router>
      <AlertNotification />
    </>
  );
}

export default App;
