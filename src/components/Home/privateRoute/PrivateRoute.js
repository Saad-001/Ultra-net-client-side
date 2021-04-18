import React, { useContext, useState } from 'react';
import { Redirect, Route } from 'react-router';
import { userContext } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [user, setUser] = useState(sessionStorage.getItem('email') || '')
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser?.email || user? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;