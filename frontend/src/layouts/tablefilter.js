import {Input} from "antd";
import {Col, Form} from "react-bootstrap";
import {Btn} from "../globalStyle";
import Highlighter from "react-highlight-words";
import React from "react";
import {SearchOutlined} from '@ant-design/icons';

export const getColumnSearchProps = (dataIndex,state,thisis) => ({
    filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
        <div className="p-2">
            <Input
                className="mb-2"
                // ref={node => {
                //     thisis.setState({
                //         input : node
                //     });
                //
                // }}
                placeholder={`Search ${dataIndex}`}
                value={selectedKeys[0]}
                onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                // onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            />
            <Form.Row>
                <Col size="6">
                    <Btn onClick={() => handleReset(clearFilters,thisis)} size="sm"  variant="pri5Outline" block>
                        Reset
                    </Btn>
                </Col>
                <Col xs="6">
                    <Btn
                        variant="pri5" size="sm" block
                        onClick={() => {
                            confirm({closeDropdown: true});
                            thisis.setState({
                                searchText: selectedKeys[0],
                                searchedColumn: dataIndex,
                            });
                        }}>
                        Filter
                    </Btn>
                </Col>
            </Form.Row>
        </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{color: filtered ? '#1890ff' : undefined}}/>,
    onFilter: (value, record) =>
        record[dataIndex]
            ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
            : '',
    onFilterDropdownVisibleChange: visible => {
        // if (visible) {
        //     setTimeout(() => thisis.state.input.select(), 100);
        // }
    },
    render: text =>
        state.searchedColumn === dataIndex ? (
            <Highlighter
                highlightStyle={{backgroundColor: 'Red', padding: 0}}
                searchWords={[state.searchText]}
                autoEscape
                textToHighlight={text ? text.toString() : ''}
            />
        ) : (
            text
        ),
});
const handleReset = (clearFilters,current) => {
    clearFilters();
    current.setState({searchText: ''});
};
