import React from 'react'
import {useLocation, Navigate} from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) { return <div className="spinner-border text-success" style={{ width: '5rem', height: '5rem' }} role="status"></div> }
    if (user.email) {
        return children
    }
    return <Navigate to="/login" state={{from:location}}/>
};

export default PrivateRoute
