import React, { Suspense } from "react";
import { BrowserRouter   as Router, Switch,Route } from "react-router-dom";
import "./App.css"
import Loader from "../Components/Loader/Loader";
export const Home = React.lazy(() => import('./Home/Home'));

class App extends React.Component {
  render() {
    return (
     
        <Suspense fallback={<Loader />}>
          <Router >
            <Switch>
              <Route component={Home} path="/" exact />
            </Switch>
          </Router>
        </Suspense>
    
    );
  }
}



export default App;
