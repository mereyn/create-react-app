import Home from '../components/pages/Home';
import SignIn from '../components/pages/SignIn';

const routes = [
  {
    path: '/',
    exact: true,
    auth: false,
    component: Home
  },
  {
    path: '/sign-in',
    exact: true,
    auth: false,
    component: SignIn,
  },
]

export default routes
