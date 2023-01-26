import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import SignIn from "./components/sign-in/Sign-in";
// import SignUp from "./components/sign-up/Sign-up";
// import LandingPage from "./components/landing-page/Landing-page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
