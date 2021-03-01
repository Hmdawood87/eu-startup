/***********
 Props
 mediaStyle:PropTypes.string
 contractIcon:PropTypes.oneOfType([PropTypes.object, PropTypes.func])
 isRenewalContract:PropTypes.bool
 badgeStyle:PropTypes.string
 RenewalContract:PropTypes.bool
 isRenewalDate:PropTypes.bool
 RenewalDate:PropTypes.string
 EndDate:PropTypes.string
 ContractAmount:PropTypes.string
 ************/

import React, {Component} from 'react';
import Media from "react-bootstrap/Media";
import {InfoHeading, InfoItem, InfoText} from "../../../assets/css/mediaStyle";
import {BadgeLabel} from "../../../globalStyle";


class ContractMedia extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <InfoItem>
                <img
                    className="mr-3"
                    src={this.props.contractIcon}
                    alt="icon"
                />
                <Media.Body>
                    {this.props.isRenewalContract ? (
                        <InfoHeading><span className="mr-3">Renewal Contract:</span>
                            <BadgeLabel variant={this.props.badgeStyle}>{this.props.RenewalContract}</BadgeLabel>
                        </InfoHeading>) : (
                        <InfoHeading><span className="mr-3">End Contract</span></InfoHeading>)
                    }
                    {this.props.isRenewalDate ? (
                        <InfoText><b className="mr-1">Renewal Date:</b>{this.props.RenewalDate}
                        </InfoText>) : (
                        <InfoText><b className="mr-1">End Date:</b>{this.props.EndDate}</InfoText>
                    )
                    }
                    <InfoText><b className="mr-1">Contract Amount:</b>{this.props.ContractAmount}
                    </InfoText>
                </Media.Body>
            </InfoItem>
        );
    }
}

export default ContractMedia;
