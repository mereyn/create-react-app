import Home from '../components/pages/Home';
import SignIn from '../components/pages/SignIn';
import Dashboard from '../components/pages/Dashboard';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/sign-in',
    exact: true,
    component: SignIn,
  },
  {
    path: '/dashboard',
    exact: true,
    component: Dashboard,
  }
]

export default routes
