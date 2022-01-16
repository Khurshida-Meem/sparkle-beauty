import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Loader from "react-loader-spinner";

const PrivateRoute = ({ children, ...rest }) => {

    const { firebaseContext } = useAuth();
    const { user, isLoading } = firebaseContext;
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
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/sign_in",
                    state: { from: location }
                }}
            ></Redirect>}

        >

        </Route>
    );
};

export default PrivateRoute;