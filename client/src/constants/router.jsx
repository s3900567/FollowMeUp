import { createBrowserRouter } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ChoosePlanPage from '../pages/ChoosePlanPage';
import ContactSupport from '../pages/ContactSupport';
import CustomersPage from '../pages/CustomersPage';
import ContactsPage from '../pages/Dashboard/Contacts';
import NewContacts from '../pages/Dashboard/Contacts/NewContact';
import DashboardLayout from '../pages/Dashboard/Layout';
import MainDashboard from '../pages/Dashboard/MainPage';
import SettingPage from '../pages/Dashboard/SettingPage';
import TasksPage from '../pages/Dashboard/TasksPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import PaymentPage from '../pages/PaymentPage';
import ProductPage from '../pages/ProductPage';
import SignUpPage from '../pages/SignUpPage';
import CalendarPage from '../pages/Dashboard/CalendarPage';

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
    path: '/payment',
    element: <PaymentPage />,
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
        element: <TasksPage />,
      },
      {
        path: '/dashboard/settings',
        element: <SettingPage />,
      },
      {
        path: '/dashboard/calendar',
        element: <CalendarPage />,
      },
    ],
  },
  {
    path: '/dashboard/contacts/new',
    element: <NewContacts />,
  },
  {
    path: '/dashboard/contacts/edit/:id',
    element: <NewContacts />,
  },
]);

export default router;
