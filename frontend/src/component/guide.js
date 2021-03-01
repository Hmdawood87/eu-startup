import React, {Component} from 'react';
import Avatar from "./common/avatar/Avatar";
import User from "../assets/img/Bitmap.svg";
import SearchArea from "./dashboard/common/search-area";
import {
    BadgeLabel,
    Btn,
    colorPrimary, colorPrimary11,
    colorPrimary2,
    colorPrimary3,
    colorPrimary4,
    colorPrimary5, colorPrimary6, colorPrimary7, colorPrimary8
} from "../globalStyle";
import ChartCard from "./common/chart-card/chart-card";
import ChartCardSmall from "./common/chart-card/chart-card.-small";
import UserMedia from "./common/list-items/user-media";
import LocationMedia from "./common/list-items/location-media";
import StarRating from "./common/star-rating/star-rating";
import BasicTable from "./common/table/basic-table";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const data = [
    {name: 'Aug', uv: 3500, amt: 2300},
    {name: 'Sep', uv: 3000, amt: 2210},
    {name: 'Oct', uv: 2000, amt: 2290},
    {name: 'Nov', uv: 2780, amt: 2000},
    {name: 'Dec', uv: 1890, amt: 2181},
    {name: 'Jan', uv: 2390, amt: 2500},
];

class StyleGuide extends Component {
    render() {
        return (
            <div className="commonSection p-4">
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
                <h4 className="mb-3">Text Colors</h4>
                <p className="textPrimary">Hello Text</p>
                <p className="text2">Hello Text</p>
                <p className="text3">Hello Text</p>
                <p className="text4">Hello Text</p>
                <p className="text5">Hello Text</p>
                <p className="text6">Hello Text</p>
                <p className="text7">Hello Text</p>
                <p className="text8">Hello Text</p>
                <p className="text9">Hello Text</p>
                <p className="text10">Hello Text</p>
                <p className="text11">Hello Text</p>
                <h2 className="mb-3">Background Colors</h2>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <div className="bgPrimary" style={{width: '30px', height: '30px'}}></div>
                    </li>
                    <li className="list-inline-item">
                        <div className="bg2" style={{width: '30px', height: '30px'}}></div>
                    </li>
                    <li className="list-inline-item">
                        <div className="bg3" style={{width: '30px', height: '30px'}}></div>
                    </li>
                    <li className="list-inline-item">
                        <div className="bg4" style={{width: '30px', height: '30px'}}></div>
                    </li>
                    <li className="list-inline-item">
                        <div className="bg5" style={{width: '30px', height: '30px'}}></div>
                    </li>
                    <li className="list-inline-item">
                        <div className="bg6" style={{width: '30px', height: '30px'}}></div>
                    </li>
                    <li className="list-inline-item">
                        <div className="bg7" style={{width: '30px', height: '30px'}}></div>
                    </li>
                    <li className="list-inline-item">
                        <div className="bg8" style={{width: '30px', height: '30px'}}></div>
                    </li>
                    <li className="list-inline-item">
                        <div className="bg11" style={{width: '30px', height: '30px'}}></div>
                    </li>
                </ul>
                <h2 className="mb-3">Border Colors</h2>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <div className="borderPrimary"
                             style={{width: '30px', height: '30px', borderWidth: '1px', borderStyle: 'solid'}}></div>
                    </li>
                    <li className="list-inline-item">
                        <div className="border2"
                             style={{width: '30px', height: '30px', borderWidth: '1px', borderStyle: 'solid'}}></div>
                    </li>
                    <li className="list-inline-item">
                        <div className="border3"
                             style={{width: '30px', height: '30px', borderWidth: '1px', borderStyle: 'solid'}}></div>
                    </li>
                    <li className="list-inline-item">
                        <div className="border4"
                             style={{width: '30px', height: '30px', borderWidth: '1px', borderStyle: 'solid'}}></div>
                    </li>
                    <li className="list-inline-item">
                        <div className="border5"
                             style={{width: '30px', height: '30px', borderWidth: '1px', borderStyle: 'solid'}}></div>
                    </li>
                    <li className="list-inline-item">
                        <div className="border6"
                             style={{width: '30px', height: '30px', borderWidth: '1px', borderStyle: 'solid'}}></div>
                    </li>
                    <li className="list-inline-item">
                        <div className="border7"
                             style={{width: '30px', height: '30px', borderWidth: '1px', borderStyle: 'solid'}}></div>
                    </li>
                </ul>
                <h2 className="mb-3">Buttons</h2>
                <ul className="list-inline">
                    <li className="list-inline-item mb-2">
                        <Btn>
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="gradient">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri2">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri3">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri4">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri5">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri6">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri7">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri8">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri9">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri10">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri11">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="priOutline">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri2Outline">
                            Button
                        </Btn>
                    </li>

                    <li className="list-inline-item mb-2">
                        <Btn variant="pri3Outline">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri4Outline">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri5Outline">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri6Outline">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri7Outline">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri8Outline">
                            Button
                        </Btn>
                    </li>

                    <li className="list-inline-item mb-2">
                        <Btn variant="pri9Outline">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri10Outline">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri11Outline">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="priRGBA">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri2RGBA">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri3RGBA">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri4RGBA">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri5RGBA">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri6RGBA">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri7RGBA">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri8RGBA">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri9RGBA">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri10RGBA">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri11RGBA">
                            Button
                        </Btn>
                    </li>

                    <li className="list-inline-item mb-2">
                        <Btn variant="pri" fill="none">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri2" fill="none">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri3" fill="none">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri4" fill="none">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri5" fill="none">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri6" fill="none">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri7" fill="none">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri8" fill="none">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri9" fill="none">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri10" fill="none">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri11" fill="none">
                            Button
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri11" size="lg">
                            Button Size Large
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri11" size="md">
                            Button Size Small
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri11" size="sm">
                            Button Size Small
                        </Btn>
                    </li>

                    <li className="list-inline-item mb-2">
                        <Btn variant="pri11" size="lg">
                            <FontAwesomeIcon className="avatarBtnIcon" icon="edit"/>
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri11" size="md">
                            <FontAwesomeIcon className="avatarBtnIcon" icon="trash"/>
                        </Btn>
                    </li>
                    <li className="list-inline-item mb-2">
                        <Btn variant="pri11" size="sm">
                            <FontAwesomeIcon className="avatarBtnIcon" icon="edit"/>
                        </Btn>
                    </li>
                </ul>
                <h2 className="mb-3">Badges</h2>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <BadgeLabel variant="pri">Badges</BadgeLabel>
                    </li>
                    <li className="list-inline-item">
                        <BadgeLabel variant="pri2">Badges</BadgeLabel>
                    </li>
                    <li className="list-inline-item">
                        <BadgeLabel variant="pri3">Badges</BadgeLabel>
                    </li>
                    <li className="list-inline-item">
                        <BadgeLabel variant="pri4">Badges</BadgeLabel>
                    </li>
                    <li className="list-inline-item">
                        <BadgeLabel variant="pri5">Badges</BadgeLabel>
                    </li>
                    <li className="list-inline-item">
                        <BadgeLabel variant="pri6">Badges</BadgeLabel>
                    </li>
                    <li className="list-inline-item">
                        <BadgeLabel variant="pri8">Badges</BadgeLabel>
                    </li>
                    <li className="list-inline-item">
                        <BadgeLabel variant="pri9">Badges</BadgeLabel>
                    </li>
                    <li className="list-inline-item">
                        <BadgeLabel variant="pri10">Badges</BadgeLabel>
                    </li>
                    <li className="list-inline-item">
                        <BadgeLabel variant="pri11">Badges</BadgeLabel>
                    </li>
                    <h5>Size</h5>
                    <li className="list-inline-item">
                        <BadgeLabel variant="pri11" size="lg">Badges</BadgeLabel>
                    </li>
                    <li className="list-inline-item">
                        <BadgeLabel variant="pri10" size="md">Badges</BadgeLabel>
                    </li>
                </ul>
                <h2 className="mb-3">Avatars</h2>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <Avatar
                            size="xl"
                            avatarImg={User}
                        />
                    </li>
                    <li className="list-inline-item">
                        <Avatar
                            size="lg"
                            avatarImg={User}
                        />
                    </li>
                    <li className="list-inline-item">
                        <Avatar
                            size="lg"
                            avatarImg={User}
                        />
                    </li>
                    <li className="list-inline-item">
                        <Avatar
                            size="sm"
                            avatarImg={User}
                        />
                    </li>
                    <li className="list-inline-item">
                        <Avatar
                            size="xs"
                            avatarImg={User}
                        />
                    </li>
                </ul>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <Avatar
                            size="lg"
                            variant="primary"
                            avatarImg={User}
                        />
                    </li>
                    <li className="list-inline-item">
                        <Avatar
                            size="lg"
                            variant="primary2"
                            avatarImg={User}
                        />
                    </li>
                    <li className="list-inline-item">
                        <Avatar
                            size="lg"
                            variant="primary3"
                            avatarImg={User}
                        />
                    </li>
                    <li className="list-inline-item">
                        <Avatar
                            size="lg"
                            variant="primary4"
                            avatarImg={User}
                        />
                    </li>
                    <li className="list-inline-item">
                        <Avatar
                            size="lg"
                            variant="primary7"
                            avatarImg={User}
                        />
                    </li>
                    <li className="list-inline-item">
                        <Avatar
                            size="lg"
                            variant="primary9"
                            avatarImg={User}
                        />
                    </li>
                    <li className="list-inline-item">
                        <Avatar
                            size="lg"
                            variant="primary11"
                            avatarImg={User}
                        />
                    </li>
                </ul>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <Avatar
                            size="md"
                            variant="primary"
                            avatarImg={User}
                            isActionBtn='true'
                            avatarBtnVariant="pri5"
                            avatarBtnIcon="wrench"
                        />
                    </li>
                    <li className="list-inline-item">
                        <Avatar
                            size="md"
                            variant="primary"
                            avatarImg={User}
                            isActionBtn='true'
                            avatarBtnVariant="pri5Outline"
                            avatarBtnIcon="plus"
                        />
                    </li>
                    <li className="list-inline-item">
                        <Avatar
                            size="md"
                            variant="primary"
                            avatarImg={User}
                            isActionBtn='true'
                            avatarBtnVariant="pri5Outline"
                            avatarBtnIcon="plus"
                        />
                    </li>
                    <li className="list-inline-item">
                        <Avatar
                            size="sm"
                            variant="primary"
                            avatarImg={User}
                            isActionBtn='true'
                            avatarBtnVariant="pri5Outline"
                            avatarBtnIcon="plus"
                        />
                    </li>
                </ul>
                <h2 className="mb-3">Search Input field</h2>
                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <SearchArea
                            title="Search Title"
                            inputStyle=""
                        />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <SearchArea
                            title="Search Title"
                            inputStyle="pri3"
                        />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <SearchArea
                            title="Search Title"
                            inputStyle="pri4"
                        />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <SearchArea
                            title="Search Title"
                            inputStyle="pri5"
                        />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <SearchArea
                            title="Search Title"
                            inputStyle="pri6"
                        />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <SearchArea
                            title="Search Title"
                            inputStyle="pri7"
                        />
                    </div>
                </div>
                <h2 className="mb-3">Cards</h2>
                <ul className="list-inline">
                    <li className="list-inline-item mb-2" style={{width: '300px'}}>
                        <ChartCard
                            title="Total Tenants"
                            count="29632"
                            textColor="pri"
                            btnColor="priRGBA"
                            isBarChart={true}
                            isXaxisLable={true}
                            chartData={data}
                            chartColor={colorPrimary}
                            tooltipContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                    </li>
                    <li className="list-inline-item mb-2" style={{width: '300px'}}>
                        <ChartCard
                            title="Total Properties"
                            count="23123"
                            textColor="pri2"
                            btnColor="pri2RGBA"
                            isLineChart={true}
                            isXaxisLable={true}
                            chartData={data}
                            chartColor={colorPrimary2}
                            tooltipContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                    </li>
                    <li className="list-inline-item mb-2" style={{width: '300px'}}>
                        <ChartCard
                            title="Profit"
                            count="$27632"
                            textColor="pri3"
                            btnColor="pri3RGBA"
                            isBarChart={true}
                            isXaxisLable={true}
                            chartData={data}
                            chartColor={colorPrimary3}
                            tooltipContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                    </li>
                    <li className="list-inline-item mb-2" style={{width: '300px'}}>
                        <ChartCard
                            title="Expenses"
                            count="$45645"
                            textColor="pri4"
                            btnColor="pri4RGBA"
                            isLineChart={true}
                            isXaxisLable={true}
                            chartData={data}
                            chartColor={colorPrimary4}
                            tooltipContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                    </li>
                    <li className="list-inline-item mb-2" style={{width: '300px'}}>
                        <ChartCard
                            title="Top Property of the month"
                            count="$7625"
                            textColor="pri5"
                            btnColor="pri5RGBA"
                            isBarChart={true}
                            isXaxisLable={true}
                            chartData={data}
                            chartColor={colorPrimary5}
                            tooltipContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                    </li>
                    <li className="list-inline-item mb-2" style={{width: '300px'}}>
                        <ChartCard
                            title="Least Property of the Month"
                            count="$45645"
                            textColor="pri6"
                            btnColor="pri6RGBA"
                            isLineChart={true}
                            isXaxisLable={true}
                            chartData={data}
                            chartColor={colorPrimary6}
                            tooltipContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                    </li>
                    <li className="list-inline-item mb-2" style={{width: '300px'}}>
                        <ChartCard
                            title="Total Properties Vacant"
                            count="$45645"
                            textColor="pri7"
                            btnColor="pri7RGBA"
                            isBarChart={true}
                            isXaxisLable={true}
                            chartData={data}
                            chartColor={colorPrimary7}
                            tooltipContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                    </li>
                    <li className="list-inline-item mb-2" style={{width: '300px'}}>
                        <ChartCard
                            title="Total Properties Occupied"
                            count="$45645"
                            textColor="pri8"
                            btnColor="pri8RGBA"
                            isLineChart={true}
                            isXaxisLable={true}
                            chartData={data}
                            chartColor={colorPrimary8}
                            tooltipContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                    </li>
                    <li className="list-inline-item mb-2">
                        <ChartCardSmall
                            cardStyle="pri"
                            title="Monthly"
                            count="3,250"
                            chartData={data}
                            isLineChart={true}
                            chartColor={colorPrimary}
                        />
                    </li>
                    <li className="list-inline-item mb-2">
                        <ChartCardSmall
                            cardStyle="pri2"
                            title="Monthly"
                            count="3,250"
                            chartData={data}
                            isLineChart={true}
                            chartColor={colorPrimary2}
                        />
                    </li>
                </ul>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <UserMedia
                            iconColor={colorPrimary}
                            avatarSize="lg"
                            avatarVariant="primary2"
                            avatarClass="mr-3"
                            avatarImg={User}
                            name="Jonathan B."
                            contactNumber="+1 234-567-8905"
                            isCheckin={true}
                            checkIn="2020-05-11:10:00:00 AM"
                        />
                    </li>
                    <li className="list-inline-item">
                        <UserMedia
                            iconColor={colorPrimary2}
                            avatarSize="lg"
                            avatarVariant="primary2"
                            avatarClass="mr-3"
                            avatarImg={User}
                            name="Jonathan B."
                            contactNumber="+1 234-567-8905"
                            isEmail={true}
                            email="admin@admin.com"
                        />
                    </li>
                    <li className="list-inline-item">
                        <LocationMedia
                            isName={true}
                            isPropertyNo={true}
                            isUnitNo={true}
                            name="Zone (Texas)"
                            PropertyNo="978997"
                            UnitNo="244"
                        />
                    </li>
                    <li className="list-inline-item">
                        <LocationMedia
                            isName={true}
                            isPropertyArea={true}
                            isRating={true}
                            name="Zone (Texas)"
                            PropertyArea="Texas"
                        />
                    </li>

                </ul>
                <ul className="list-inline">
                    <h2 className="mb-3">Rating</h2>
                    <li className="list-inline-item">
                        <StarRating
                            ratingVariant="pri5"
                            rating="1"
                            activeColor={colorPrimary5}
                        />
                    </li>
                    <li className="list-inline-item">
                        <StarRating
                            ratingVariant="pri7"
                            rating="3.0"
                            activeColor={colorPrimary7}
                        />
                    </li>
                    <li className="list-inline-item">
                        <StarRating
                            ratingVariant="pri11"
                            rating="4.0"
                            activeColor={colorPrimary11}
                        />
                    </li>
                    <li className="list-inline-item">
                        <StarRating
                            ratingType="simple"
                            ratingVariant="pri11"
                            rating="4.0"
                            activeColor={colorPrimary11}
                        />
                    </li>
                </ul>
                <h2 className="mb-3">Basic Table</h2>
                <div className="">
                    <BasicTable/>
                </div>
            </div>
        );
    }
}

export default StyleGuide;
