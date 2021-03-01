/***********
 Props
 size:PropTypes.string
 variant:PropTypes.string
 cssClass:PropTypes.string
 avatarImg:PropTypes.oneOfType([PropTypes.object, PropTypes.func])
 isActionBtn:PropTypes.bool
 avatarBtnVariant:PropTypes.string
 avatarBtnIcon:PropTypes.bool
 isOpenModal:PropTypes.bool
 showModal:PropTypes.oneOfType([PropTypes.object, PropTypes.func])

 ************/

import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Avater, Dot} from '../../../assets/css/avatarStyle';
import {Img, Btn} from "../../../globalStyle";

class Avatar extends Component {

    render() {
        return (
            <Avater size={this.props.size} variant={this.props.variant} className={this.props.cssClass}>
                <Dot className="avatarDot"/>
                <Img src={this.props.avatarImg} alt="user-img"/>
                {this.props.isActionBtn ? (
                    this.props.isOpenModal ? (
                            <Btn onClick={this.props.showModal} variant={this.props.avatarBtnVariant}
                                 className="avatarBtn">
                                <FontAwesomeIcon className="avatarBtnIcon" icon={this.props.avatarBtnIcon}/>
                            </Btn>
                        ) : ( <Btn variant={this.props.avatarBtnVariant} className="avatarBtn">
                              <FontAwesomeIcon className="avatarBtnIcon" icon={this.props.avatarBtnIcon}/>
                        </Btn>)

                ):''}
            </Avater>
        );
    }
}


export default Avatar;
