import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import StarRating from "./StartRating";
// function Test() {}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRatings={5} />
    <StarRating
      maxRatings={5}
      color="red"
      size={30}
      messages={["Terrible", "Bad", "Good", "Great", "Excellent"]}
    /> */}
  </React.StrictMode>
);
