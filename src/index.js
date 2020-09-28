/*!

=========================================================
* Paper Kit PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-pro-react
* Copyright 2020 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
// pages
import Index from "views/Index.js";


import Presentation from "views/Presentation.js";






import LoginPage from "views/examples/LoginPage.js";




import Settings from "views/examples/Settings.js";

// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      
      
      <Route
        path="/presentation"
        render={(props) => <Presentation {...props} />}
      />
         

      
      
   
      
      <Route path="/login-page" render={(props) => <LoginPage {...props} />} />
      


      <Route path="/settings" render={(props) => <Settings {...props} />} />

      <Redirect to="/presentation" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
