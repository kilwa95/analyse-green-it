/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
// any CSS you import will output into a single css file (app.css in this case)
import "./App.css";

// start the Stimulus application
// import './bootstrap';

console.log("Hello world!");

function App() {
  return (
    <HashRouter>
      <main className="container pt-5">
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </main>
    </HashRouter>
  );
}

export default App;
