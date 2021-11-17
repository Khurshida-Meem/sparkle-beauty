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
            <div className="text-center mt-5">
                <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
            </div>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user ? children : <Redirect
                to={{
                    pathname: "/signin",
                    state: { from: location }
                }}
            ></Redirect>}

        >

        </Route>
    );
};

export default PrivateRoute;