import React from "react";
import Route from "../routes/Route";
const AuthLayout = ({children, ...rest}) => {

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
}

const AuthLayoutRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <AuthLayout>
                <Component {...matchProps} />
            </AuthLayout>
        )}/>
    )
};

export default AuthLayoutRoute;
