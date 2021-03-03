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
                
                {haspermission(['grades_view','grades_delete','grades_update','grades_create'])?
                    (
                        <>
                            <SideBarList>
                                <SideBarLink to="/grades">
                                    <SideBarIcon>
                                        <img src={LeaderboardIcon}
                                        className="normal"
                                        alt="sidebar-icon"/>
                                        <img src={LeaderboardIconGradient}
                                        className="active"
                                        alt="sidebar-icon"/>
                                    </SideBarIcon>
                                    Grades
                                </SideBarLink>
                            </SideBarList>
                       </>
                    ):''}
          {haspermission(['grades_view','grades_delete','grades_update','grades_create'])?
                    (
                        <>
                            <SideBarList>
                                <SideBarLink to="/payment">
                                    <SideBarIcon>
                                        <img src={LeaderboardIcon}
                                        className="normal"
                                        alt="sidebar-icon"/>
                                        <img src={LeaderboardIconGradient}
                                        className="active"
                                        alt="sidebar-icon"/>
                                    </SideBarIcon>
                                    Payment request
                                </SideBarLink>
                            </SideBarList>
                       </>
                    ):''}
       
                </SideBarListing>
            </SideBarDiv>
        );
    }
}

export default Sidebar;
