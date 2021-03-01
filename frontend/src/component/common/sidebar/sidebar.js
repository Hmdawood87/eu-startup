import React, {Component} from 'react';
import DashboardIcon from '../../../assets/img/Dashboard-Icon.svg';
import DashboardIconGradient from '../../../assets/img/Dashboard-Icon-gradient.svg';
import LeaderboardIcon from '../../../assets/img/Leaderboard-Icon.svg';
import LeaderboardIconGradient from '../../../assets/img/Leaderboard-Icon-gradient.svg';
import SpreadsheetsIcon from '../../../assets/img/Spreadsheets-Icon.svg';
import SpreadsheetsIconGradient from '../../../assets/img/Spreadsheets-Icon-graident.svg';
import AdminIcon from '../../../assets/img/Admin-Icon.svg';
import AdminIconGradient from '../../../assets/img/Admin-Icon-graident.svg';
import SalesIcon from '../../../assets/img/Sales-Icon.svg';
import SalesIconGradient from '../../../assets/img/Sales-Icon-graident.svg';
import ScheduleIcon from '../../../assets/img/Schedule-Icon.svg';
import ScheduleIconGradient from '../../../assets/img/Schedule-Icon-graident.svg';
import MessageIcon from '../../../assets/img/Message-Icon.svg';
import MessageIconGradient from '../../../assets/img/Message-Icon-gradient.svg';
import LibraryIcon from '../../../assets/img/Library-Icon.svg';
import LibraryIconGradient from '../../../assets/img/Library-Icon-gradient.svg';
import SettingsIcon from '../../../assets/img/Settings-Icon.svg';
import SettingsIconGradient from '../../../assets/img/Settings-Icon-graident.svg';
import SupportIcon from '../../../assets/img/Support-Icon.svg';
import SupportIconGradient from '../../../assets/img/Support-Icon-graident.svg';
import SearchIcon from '../../../assets/img/Seach-Icon.svg';
import SearchIconGradient from '../../../assets/img/Seach-Icon-graident.svg';
import {SideBarDiv, SideBarIcon, SideBarLink, SideBarList, SideBarListing} from "../../../assets/css/sidebarStyle";
import haspermission from '../../../routes/checkpermission'
class Sidebar extends Component {
    render() {
        return (
            <SideBarDiv>
                <SideBarListing>
                    {haspermission(['user_view','user_delete','user_update','user_create'])?
                    (
                        <>
                         <SideBarList>
                        <SideBarLink to="/dashboard">
                            <SideBarIcon>
                              <img src={DashboardIcon} className="normal" alt="sidebar-icon"/>
                              <img src={DashboardIconGradient} className="active" alt="sidebar-icon"/>
                            </SideBarIcon>
                            Dashboard
                        </SideBarLink>
                    </SideBarList>
                        </>
                    ):''
                }
                    {haspermission(['role_view','role_delete','role_update','role_create'])?
                    (
                        <>
                      <SideBarList>
                        <SideBarLink to="/roles">
                            <SideBarIcon>
                              <img src={DashboardIcon} className="normal" alt="sidebar-icon"/>
                              <img src={DashboardIconGradient} className="active" alt="sidebar-icon"/>
                            </SideBarIcon>
                            Roles
                        </SideBarLink>
                    </SideBarList>
                         </>
                    ):''
                }
                   {haspermission(['owner_view','owner_delete','owner_update','owner_create'])?
                    (
                        <>
                    <SideBarList>
                        <SideBarLink to="/owner">
                            <SideBarIcon>
                                <img src={SearchIcon} className="normal" alt="sidebar-icon"/>
                                <img src={SearchIconGradient} className="active" alt="sidebar-icon"/>
                            </SideBarIcon>
                            Owners
                        </SideBarLink>
                    </SideBarList>
                              </>
                    ):''
                }
                {haspermission(['user_view','user_delete','user_update','user_create'])?
                    (
                        <>
                    <SideBarList>
                        <SideBarLink to="/users">
                            <SideBarIcon>
                              <img src={LeaderboardIcon} className="normal" alt="sidebar-icon"/>
                              <img src={LeaderboardIconGradient} className="active" alt="sidebar-icon"/>
                            </SideBarIcon>
                            Users
                        </SideBarLink>
                    </SideBarList>
                    </>): ''}
                    {haspermission(['property_view','property_delete','property_update','property_create'])?
                    (
                        <>
                    <SideBarList>
                        <SideBarLink to="/property">
                            <SideBarIcon>
                              <img src={LeaderboardIcon} className="normal" alt="sidebar-icon"/>
                              <img src={LeaderboardIconGradient} className="active" alt="sidebar-icon"/>
                            </SideBarIcon>
                            Properties
                        </SideBarLink>
                    </SideBarList>
                    </>): ''}
                {haspermission(['tenants_view','tenants_delete','tenants_update','tenants_create'])?
                    (
                        <>
                            <SideBarList>
                                <SideBarLink to="/tenant">
                                    <SideBarIcon>
                                        <img src={LeaderboardIcon}
                                        className="normal"
                                        alt="sidebar-icon"/>
                                        <img src={LeaderboardIconGradient}
                                        className="active"
                                        alt="sidebar-icon"/>
                                    </SideBarIcon>
                                    Tenants
                                </SideBarLink>
                            </SideBarList>
                       </>
                    ):''}
                 {haspermission(['user_view','user_delete','user_update','user_create'])?
                    (
                        <>
                    <SideBarList>
                        <SideBarLink to="/administration">
                            <SideBarIcon>
                                <img src={AdminIcon} className="normal" alt="sidebar-icon"/>
                                <img src={AdminIconGradient} className="active" alt="sidebar-icon"/>
                            </SideBarIcon>
                            Administration
                        </SideBarLink>
                    </SideBarList>
                        </>
                    ):''
                }
                 {haspermission(['user_view','user_delete','user_update','user_create'])?
                    (
                        <>
                    <SideBarList>
                        <SideBarLink to="/sales">
                            <SideBarIcon>
                                <img src={SalesIcon} className="normal" alt="sidebar-icon"/>
                                <img src={SalesIconGradient} className="active" alt="sidebar-icon"/>
                            </SideBarIcon>
                            Sales
                        </SideBarLink>
                    </SideBarList>
                          </>
                    ):''
                }
                 {haspermission(['user_view','user_delete','user_update','user_create'])?
                    (
                        <>
                    <SideBarList>
                        <SideBarLink to="/schedule">
                            <SideBarIcon>
                                <img src={ScheduleIcon} className="normal" alt="sidebar-icon"/>
                                <img src={ScheduleIconGradient} className="active" alt="sidebar-icon"/>
                            </SideBarIcon>
                            Schedule
                        </SideBarLink>
                    </SideBarList>
                           </>
                    ):''
                }
                   {haspermission(['user_view','user_delete','user_update','user_create'])?
                    (
                        <>
                    <SideBarList>
                        <SideBarLink to="/messages">
                            <SideBarIcon>
                                <img src={MessageIcon} className="normal" alt="sidebar-icon"/>
                                <img src={MessageIconGradient} className="active" alt="sidebar-icon"/>
                            </SideBarIcon>
                            Messages
                        </SideBarLink>
                    </SideBarList>
                               </>
                    ):''
                }
                   {haspermission(['user_view','user_delete','user_update','user_create'])?
                    (
                        <>
                    <SideBarList>
                        <SideBarLink to="/library">
                            <SideBarIcon>
                                <img src={LibraryIcon} className="normal" alt="sidebar-icon"/>
                                <img src={LibraryIconGradient} className="active" alt="sidebar-icon"/>
                            </SideBarIcon>
                            Library
                        </SideBarLink>
                    </SideBarList>
                              </>
                    ):''
                }
                {haspermission(['user_view','user_delete','user_update','user_create'])?
                    (
                        <>
                    <SideBarList>
                        <SideBarLink to="/settings">
                            <SideBarIcon>
                                <img src={SettingsIcon} className="normal" alt="sidebar-icon"/>
                                <img src={SettingsIconGradient} className="active" alt="sidebar-icon"/>
                            </SideBarIcon>
                            Settings
                        </SideBarLink>
                    </SideBarList>
                              </>
                    ):''
                }
                {haspermission(['user_view','user_delete','user_update','user_create'])?
                    (
                        <>
                    <SideBarList>
                        <SideBarLink to="/support">
                            <SideBarIcon>
                                <img src={SupportIcon} className="normal" alt="sidebar-icon"/>
                                <img src={SupportIconGradient} className="active" alt="sidebar-icon"/>
                            </SideBarIcon>
                            Support
                        </SideBarLink>
                    </SideBarList>
                              </>
                    ):''
                }
                 {haspermission(['user_view','user_delete','user_update','user_create'])?
                    (
                        <>
                    <SideBarList>
                        <SideBarLink to="#">
                            <SideBarIcon>
                                <img src={SearchIcon} className="normal" alt="sidebar-icon"/>
                                <img src={SearchIconGradient} className="active" alt="sidebar-icon"/>
                            </SideBarIcon>
                            Search…
                        </SideBarLink>
                    </SideBarList>
                              </>
                    ):''
                }
                </SideBarListing>
            </SideBarDiv>
        );
    }
}

export default Sidebar;
