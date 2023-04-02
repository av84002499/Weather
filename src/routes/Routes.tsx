import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loader from '@material-ui/core/CircularProgress';

const Home = lazy(async () => import('../pages/Home'));
const Favorites = lazy(async () => import('../pages/Favorites'));
const NotFound = lazy(async () => import('../pages/NotFound'));

const Routes = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route path="/favorites" component={Favorites} />
      <Route exact path="/" component={Home} />
      <Route path="/404" component={NotFound} />
      <Redirect to="/404" />
    </Switch>
  </Suspense>
);

export default Routes;
