import { createElement } from 'react';
import { LuCalendarRange, LuSettings, LuStretchHorizontal, LuUser2 } from 'react-icons/lu';
import { RxDashboard } from 'react-icons/rx';

export const MENU_ITEMS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: createElement(RxDashboard, { className: 'inline text-xl' }),
    to: '',
  },
  {
    key: 'tasks',
    label: 'Tasks',
    icon: createElement(LuStretchHorizontal, { className: 'inline text-xl' }),
    to: './tasks',
  },
  {
    key: 'calendar',
    label: 'Calendar',
    icon: createElement(LuCalendarRange, { className: 'inline text-xl' }),
    to: './calendar',
  },
  {
    key: 'contacts',
    label: 'Contacts',
    icon: createElement(LuUser2, { className: 'inline text-xl' }),
    to: './contacts',
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: createElement(LuSettings, { className: 'inline text-xl' }),
    to: './settings',
  },
];
