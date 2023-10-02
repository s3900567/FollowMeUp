import { RxDashboard, RxEnvelopeClosed } from 'react-icons/rx';
import { LuStretchHorizontal, LuUser2, LuSettings } from 'react-icons/lu';
import { createElement } from 'react';

export const MENU_ITEMS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: createElement(RxDashboard, { className: 'inline text-xl' }),
    to: './',
  },
  {
    key: 'tasks',
    label: 'Tasks',
    icon: createElement(LuStretchHorizontal, { className: 'inline text-xl' }),
    to: './tasks',
  },
  // {
  //   key: 'emails',
  //   label: 'Emails',
  //   icon: createElement(RxEnvelopeClosed, { className: 'inline text-xl' }),
  //   to: './emails',
  // },
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
