import React from 'react';
import { Redirect, Route } from 'react-router';
import Loader from "react-loader-spinner";
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {

    const { firebaseContext } = useAuth();
    const { user, admin, isLoading } = firebaseContext;
    if (isLoading) {
        // spinner
        return (
            <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <Loader type="BallTriangle" color="#f8a5b8" height={80} width={80} />
            </div>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email && admin ? children : <Redirect
                to={{
                    pathname: "/home",
                    state: { from: location }
                }}
            ></Redirect>}

        >

        </Route>
    );
};

export default AdminRoute;