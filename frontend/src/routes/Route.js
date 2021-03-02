import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import haspermission from "./checkpermission"
export default function RouteWrapper({
                                         component: Component,
                                         isPrivate,
                                         keyValue,
                                         ...rest
                                     }) {
    // const signed = false;
    let signed = false;

    if(localStorage.getItem('_property_matters_360_token'))
        signed = true;
    /**
     * Redirect user to SignIn page if he tries to access a private route
     * without authentication.
     */
    if (isPrivate && !signed) {
        return <Redirect to="/"/>;
    }

    /**
     * Redirect user to Main page if he tries to access a non private route
     * (SignIn or SignUp) after being authenticated.
     */
    if (!isPrivate && signed) {
        return <Redirect to="/users"/>;
    }

    /**
     * If not included on both previous cases, redirect user to the desired route.
     */
    if(keyValue){
        let permission=haspermission(keyValue)
        console.log("permissions are",permission)
    if(permission){
    return <Route {...rest} component={Component}/>;
    }else{
        if (signed==false) {
    return <Route {...rest} component={Component}/>
    }else{
        return <Redirect to="/not-found"/>;
    }

    }
}else{
    return <Route {...rest} component={Component}/>

}
    // return <Route {...rest} component={Component}/>;


}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouteWrapper.defaultProps = {
    isPrivate: false
};

