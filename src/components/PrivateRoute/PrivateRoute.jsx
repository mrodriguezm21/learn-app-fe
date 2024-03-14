import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuth } from '../../store/authSlice';

export function PrivateRoute({ children }) {
    const { isAuth } = useSelector(selectAuth);
    return isAuth ? children : <Navigate to="/" />;
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};
