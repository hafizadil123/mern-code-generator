import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// Import Containers
const HomePage = React.lazy(() => import('../containers/HomePage'));
const NotFoundPage = React.lazy(() => import('../containers/NotFoundPage'));

const Routes = () => (
  <Suspense fallback="Loading......">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Suspense>
);

export default Routes;
