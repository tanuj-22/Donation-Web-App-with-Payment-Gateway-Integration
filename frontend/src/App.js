import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbarcustom from "./Navbarcustom";
import HomePage from "./HomePage";
import MiddleBody from "./MiddleBody";

import CardSection from "./CardSection";
import FooterSection from "./FooterSection";
import DonationPage from "./DonationPage";
import Thankyou from "./Thankyou";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <Router className="App">
      <div>
        

      
       
        <Switch>
        <Route path="/donate/thankyou">
            <Thankyou/>
          </Route>
          <Route path="/donate">
          <Navbarcustom />
            <DonationPage />
            <FooterSection />
          </Route>
          <Route path="/">
          <Navbarcustom />
            <HomePage />
            <MiddleBody />
            <CardSection />
            <FooterSection />
          </Route>
        </Switch>
        
      </div>

     
    </Router>
  );
}

export default App;
