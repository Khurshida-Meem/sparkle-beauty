import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import Navigation from '../../../Shared/Navigation/Navigation';

const SignIn = () => {
    const { firebaseContext } = useAuth();
    const { user, signInUsingGoogle, setIsLoading } = firebaseContext;
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from?.pathname || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
            .finally(() => setIsLoading(false));
    }
    return (

        <div>
            <Navigation></Navigation>
            <div className="d-flex justify-content-center my-5 page-size">
                {
                    !user ?
                        <div className="text-center">
                            <button className="btn-primary py-2 rounded  fw-bold mb-3" onClick={handleGoogleLogin}><i className="fab fa-google"></i> Sign In Using Google</button>
                        </div> :
                        <h3 className="pb-5">Wellcome to Hotel Ressort {user.displayName}</h3>
                }

            </div>
        </div>
    );
};

export default SignIn;