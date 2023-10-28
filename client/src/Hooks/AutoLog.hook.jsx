import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AutoLoginJWT } from '../services/Auth.services';

export default function AutoLogin({ children }) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useLayoutEffect(() => {
    const fetchUser = async () => {
      if (!auth._id) {
        const token = Cookies.get('token');
        if (token) {
          dispatch(AutoLoginJWT(token));
        }
      }
    };
    fetchUser();
  }, []);
  return <>{children}</>;
}

AutoLogin.propTypes = {
  children: PropTypes.node.isRequired,
};
