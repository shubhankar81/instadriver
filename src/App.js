import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Header =  lazy(()=> import('./component/header'));
const Footer = lazy(()=> import('./component/footer'));
const DashBoard = lazy(()=> import('./component/dashboard'));

const App = () => {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading Component ...</div>}>
          <Header />
            <Switch>
              <Route exact path="/" component={DashBoard}></Route>
            </Switch>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
