import React from 'react'
import {useLocation, Navigate} from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <div className="d-flex justify-content-center">
        <div className="spinner-border" style={{ width: '10rem', height: '10rem' }} role="status"></div>
    </div>}
    if (user.email) {
        return children
    }
    return <Navigate to="/login" state={{from:location}}/>
};

export default PrivateRoute
