/***********
 Props
 title:PropTypes.string
 dropDownOption:PropTypes.bool
 inputStyle:PropTypes.string
 ************/

import React, {Component} from 'react';
import {Dropdown, Form} from "react-bootstrap";
import {SearchField, SearchSection, SearchTitle} from "../../../assets/css/searchAreaStyle";


class SearchArea extends Component {
    render() {
        return (
            <SearchSection>
                <SearchTitle>{this.props.title}</SearchTitle>
                <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                        <span style={{fontSize: '16px', paddingRight: '4px'}}>Show:</span><span>Latest</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Monthly</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Annually</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Group controlId="search">
                    <SearchField variant={this.props.inputStyle} type="search"
                                placeholder="search.."/>
                </Form.Group>
            </SearchSection>
        );
    }
}


export default SearchArea;
