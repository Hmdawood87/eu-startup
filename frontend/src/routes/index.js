import React, {Component} from "react";
import {Switch} from "react-router-dom";
import FileUpload from "../component/file-upload/file-upload";

import AuthLayoutRoute from "../layouts/AuthLayout";
import DashboardLayoutRoute from "../layouts/DashboardLayout";
import asyncComponent from "./AsyncComponent";

const Authentication = asyncComponent(() =>
    import("../component/auth/authentication")
);
const Dashboard = asyncComponent(() =>
    import("../component/dashboard/dashboard")
);
const StyleGuide = asyncComponent(() =>
    import("../component/guide")
);
const ResetPassword = asyncComponent(() =>
    import("../component/auth/reset-password")
);
const Leaderboard = asyncComponent(() =>
    import("../component/leaderboard/leaderboard")
);
const Spreadsheets = asyncComponent(() =>
    import("../component/spreadsheets/spreadsheets")
);
const Administration = asyncComponent(() =>
    import("../component/administration/administration")
);
const Sales = asyncComponent(() =>
    import("../component/sales/sales")
);
const Schedule = asyncComponent(() =>
    import("../component/schedule/schedule")
);
const Messages = asyncComponent(() =>
    import("../component/messages/messages")
);
const Library = asyncComponent(() =>
    import("../component/library/library")
);
const Settings = asyncComponent(() =>
    import("../component/settings/settings")
);
const Support = asyncComponent(() =>
    import("../component/support/support")
);
const Profile = asyncComponent(() =>
    import("../component/profile/profile")
);
const viewrole = asyncComponent(() =>
    import("../component/roles/viewrole")
);
const User = asyncComponent(() =>
    import("../component/users/users")
);
const Property = asyncComponent(() =>
    import("../component/property/property")
);
const PropertyDetails = asyncComponent(() =>
    import("../component/property/property_details")
);
const PropertyHistory = asyncComponent(() =>
    import("../component/property/property_history")
);
const createrole = asyncComponent(() =>
    import("../component/roles/createrole")
);
const unauthorized = asyncComponent(() =>
    import("../component/roles/Unauthorized")
);

const Tenant = asyncComponent(() =>
    import("../component/tenants/tenant")
);

const viewowner = asyncComponent(() =>
    import("../component/owner/viewowner")
);
const createowner = asyncComponent(() =>
    import("../component/owner/createowner")
);

const PropertyCreate = asyncComponent(() =>
  import("../component/property/property-create")
);

class AppRoute extends Component {
    render() {
        return (
            <Switch>
                <AuthLayoutRoute
                    exact
                    path="/"
                    component={Authentication}
                />

                <AuthLayoutRoute
                    exact
                    isPrivate={true}
                    path="/guide"
                    keyValue={['user_view', 'user_delete', 'user_update', 'user_create']}
                    component={StyleGuide}
                />
                <AuthLayoutRoute
                    exact
                    path="/reset-password"
                    component={ResetPassword}
                />
                <DashboardLayoutRoute
                    exact
                    isPrivate={true}
                    keyValue={['user_view', 'user_delete', 'user_update', 'user_create']}
                    path="/dashboard"
                    component={Dashboard}
                />

                <DashboardLayoutRoute
                    exact
                    isPrivate={true}
                    keyValue={['user_view', 'user_delete', 'user_update', 'user_create']}
                    path="/leaderboard"
                    component={Leaderboard}
                />
                <DashboardLayoutRoute
                    exact
                    isPrivate={true}
                    keyValue={['user_view', 'user_delete', 'user_update', 'user_create']}
                    path="/spreadsheets"
                    component={Spreadsheets}
                />
                <DashboardLayoutRoute
                    exact
                    isPrivate={true}
                    keyValue={['user_view', 'user_delete', 'user_update', 'user_create']}
                    path="/administration"
                    component={Administration}
                />
                <DashboardLayoutRoute
                    exact
                    isPrivate={true}
                    keyValue={['user_view', 'user_delete', 'user_update', 'user_create']}
                    path="/sales"
                    component={Sales}
                />
                <DashboardLayoutRoute
                    exact
                    isPrivate={true}
                    keyValue={['user_view', 'user_delete', 'user_update', 'user_create']}
                    path="/schedule"
                    component={Schedule}
                />
                <DashboardLayoutRoute
                    exact
                    isPrivate={true}
                    keyValue={['user_view', 'user_delete', 'user_update', 'user_create']}
                    path="/messages"
                    component={Messages}
                />
                <DashboardLayoutRoute
                    exact
                    isPrivate={true}
                    keyValue={['user_view', 'user_delete', 'user_update', 'user_create']}
                    path="/library"
                    component={Library}
                />
                <DashboardLayoutRoute
                    exact
                    isPrivate={true}
                    keyValue={['user_view', 'user_delete', 'user_update', 'user_create']}
                    path="/settings"
                    component={Settings}
                />
                <DashboardLayoutRoute
                    exact
                    isPrivate={true}
                    keyValue={['user_view', 'user_delete', 'user_update', 'user_create']}
                    path="/support"
                    component={Support}
                />
                <DashboardLayoutRoute
                    exact
                    isPrivate={true}
                    keyValue={['user_view', 'user_delete', 'user_update', 'user_create']}
                    path="/profile"
                    component={Profile}
                />

                <DashboardLayoutRoute
                    exact
                    isPrivate={true}
                    keyValue={['role_view', 'role_view', 'role_view', 'role_view']}
                    path="/roles"
                    component={viewrole}
                />

                <DashboardLayoutRoute
                    exact
                    isPrivate={true}
                    keyValue={['user_view', 'user_delete', 'user_update', 'user_create']}
                    path='/users'
                    component={User}
                />

                <DashboardLayoutRoute
                    exact
                    isPrivate={true}
                    keyValue={['property_view', 'property_delete', 'property_update', 'property_create']}
                    path='/property'
                    component={Property}
                />
                <DashboardLayoutRoute
                    exact
                    isPrivate={true}
                    keyValue={['property_view', 'property_delete', 'property_update', 'property_create']}
                    path='/property/details'
                    component={PropertyDetails}
                />

                <DashboardLayoutRoute
                    exact
                    isPrivate={true}
                    keyValue={['property_view', 'property_delete', 'property_update', 'property_create']}
                    path='/property/history'
                    component={PropertyHistory}
                />

                <DashboardLayoutRoute
                exact
                keyValue={['property_view','property_delete','property_update','property_create']}
                isPrivate={true}
                path="/property/create"
                component={PropertyCreate}
                />

                <DashboardLayoutRoute
                exact
                keyValue={['property_view','property_delete','property_update','property_create']}
                isPrivate={true}
                path="/property/upload"
                component={FileUpload}
                />

                <DashboardLayoutRoute
                    exact
                    keyValue={['user_view', 'user_delete', 'user_update', 'user_create']}
                    isPrivate={true}
                    path="/roles/create"
                    component={createrole}
                />

                <DashboardLayoutRoute
                    exact
                    isPrivate={true}
                    keyValue={['grades_view', 'grades_delete', 'grades_update', 'grades_create']}
                    path="/grades"
                    component={Tenant}
                />

                <DashboardLayoutRoute
                    exact
                    keyValue={['grades_view','grades_delete','grades_update','grades_create']}
                    isPrivate={true}
                    path="/payment"
                    component={viewowner}
                />
                <DashboardLayoutRoute
                    exact
                    keyValue={['user_view', 'user_delete', 'user_update', 'user_create']}
                    isPrivate={true}
                    path="/owner/create"
                    component={createowner}
                />
                <DashboardLayoutRoute
                    exact
                    isPrivate={true}
                    keyValue={['user_view', 'user_delete', 'user_update', 'user_create']}
                    path="/not-found"
                    component={unauthorized}
                />
            </Switch>
        );
    }
}

export default AppRoute;
