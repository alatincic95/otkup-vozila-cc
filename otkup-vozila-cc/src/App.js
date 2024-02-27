import React from "react";
import routes from "./routes";
import {
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";

// Import Scss
import "./theme.scss";

//Import Icon Css
import "./assets/css/materialdesignicons.min.css";
import FormDialog from "./components/Modal/components/Dialog";



const App = () => {
  return (
    <React.Fragment>
      <FormDialog/>
      <Router>
        <Switch>
          {routes.map((route, idx) => (
            <Route path={route.path} component={route.component} key={idx} />
            
          ))}
       
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
