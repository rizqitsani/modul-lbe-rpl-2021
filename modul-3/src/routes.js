import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PageNotFound from './pages/404';
import ClassLifecycle from './pages/ClassLifecycle';
import DynamicPage from './pages/DynamicPage';
import FunctionalLifecycle from './pages/FunctionLifecycle';
import Home from './pages/Home';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/class-lifecycle' component={ClassLifecycle} />
        <Route path='/function-lifecycle' component={FunctionalLifecycle} />
        <Route path='/dynamic/:id' component={DynamicPage} />

        <Route path='*' component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
