import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getFromStorage } from 'services/localStorService';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const authorization_id = getFromStorage('authorization_id');
  return authorization_id ? <Navigate to={redirectTo} /> : Component;
};
RestrictedRoute.propTypes = {
  component: PropTypes.any.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
