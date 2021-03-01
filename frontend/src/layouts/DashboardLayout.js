import React from "react";
import {Main, PageContent,SideBarWrapper} from "../globalStyle";
import Header from "../component/common/header/header";
import Sidebar from "../component/common/sidebar/sidebar";
import ChatBox from "../component/common/chat-box/chat-box";
import Route from "../routes/Route";

const DashboardLayout = ({children, ...rest}) => {
    return (
        <React.Fragment>
            <Header/>
            <Main>
                <SideBarWrapper className="mb-3 d-none d-xl-block">
                    <Sidebar/>
                </SideBarWrapper>
                <PageContent>
                    {children}
                </PageContent>
                <ChatBox/>
            </Main>
        </React.Fragment>
    );
}

const DashboardLayoutRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <DashboardLayout>
                <Component {...matchProps} />
            </DashboardLayout>
        )} />
    )
};

export default DashboardLayoutRoute;
