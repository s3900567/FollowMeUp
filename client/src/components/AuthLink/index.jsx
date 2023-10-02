import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

export default function AuthLink({ to, children }) {
  const navigate = useNavigate
  const auth = useSelector(state => state.auth);
  const HandlerLink = () => {
    if (!auth.token) {
      navigate('/login');
    } else {
      navigate(to);
    }
  };
  return (
    <Link onClick={HandlerLink}>
      {auth.token ? children : null}
    </Link>
  )
}

AuthLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
