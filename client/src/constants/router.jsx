import { createBrowserRouter } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ChoosePlanPage from '../pages/ChoosePlanPage';
import CustomersPage from '../pages/CustomersPage';
import CalendarPage from '../pages/Dashboard/Calendar';
import ContactsPage from '../pages/Dashboard/Contacts';
import DashboardLayout from '../pages/Dashboard/Layout';
import MainDashboard from '../pages/Dashboard/Main';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProductPage from '../pages/ProductPage';
import SignUpPage from '../pages/SignUpPage';
import NewContacts from '../pages/Dashboard/Contacts/NewContact';
import ContactSupport from '../pages/ContactSupport';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <SignUpPage />,
  },
  {
    path: '/choose_plan',
    element: <ChoosePlanPage />,
  },
  {
    path: '/About_us',
    element: <AboutPage />,
  },
  {
    path: '/customers',
    element: <CustomersPage />,
  },
  {
    path: '/products',
    element: <ProductPage />,
  },
  {
    path: '/contact_support',
    element: <ContactSupport />,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard',
        element: <MainDashboard />,
      },
      {
        path: '/dashboard/contacts',
        element: <ContactsPage />,
      },
      {
        path: '/dashboard/tasks',
        element: <CalendarPage />,
      },
    ],
  },
  {
    path: '/dashboard/contacts/new',
    element: <NewContacts />,
  },
]);

export default router;
