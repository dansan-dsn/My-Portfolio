import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Subscriptions from "./pages/Subscriptions/Subscriptions";
import Shorts from "./pages/Shorts/Shorts";
import You from "./pages/You/You";

const routes = (
  <Router>
    <Routes>
      <Route path="/dashbord" exact element={<Home />} />
      <Route path="/you" exact element={<You />} />
      <Route path="/shorts" exact element={<Shorts />} />
      <Route path="/subscriptions" exact element={<Subscriptions />} />
    </Routes>
  </Router>
);

const App = () => {
  return <div>{routes}</div>;
  // return <Home />;
};

export default App;

// react-icons
// react-route-dom
