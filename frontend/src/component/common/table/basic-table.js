/***********
 Props
 ratingType:PropTypes.string
 ratingVariant:PropTypes.string
 rating:PropTypes.string
 value:PropTypes.string
 activeColor:PropTypes.string
 ************/
import React, {Component} from 'react';
import {Table, Tag, Space, Tooltip} from 'antd';
import {AntTable} from "../../../assets/css/TableStyle";
import {BadgeLabel, Btn} from "../../../globalStyle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ratingChanged = (newRating) => {
    console.log(newRating);
};

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: true,
    },
    {
        title: 'Chinese Score',
        dataIndex: 'chinese',
        sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
        },
    },
    {
        title: 'Math Score',
        dataIndex: 'math',
        sorter: {
            compare: (a, b) => a.math - b.math,
            multiple: 2,
        },
    },
    {
        title: 'English Score',
        dataIndex: 'english',
        sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
        },
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'pri' : 'pri2';
                    if (tag === 'block') {
                        color = 'pri10';
                    }
                    return (
                        <Space size="small">
                            <BadgeLabel size="md" variant={color} key={tag}>
                                {tag.toUpperCase()}
                            </BadgeLabel>
                        </Space>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="small">
                <Tooltip placement="topLeft" title="view">
                    <Btn size="sm" variant="pri">
                        <FontAwesomeIcon icon="eye"/>
                    </Btn>
                </Tooltip>

                <Btn size="sm" variant="pri2">
                    <FontAwesomeIcon icon="edit"/>
                </Btn>
                <Btn size="sm" variant="pri10">
                    <FontAwesomeIcon icon="trash"/>
                </Btn>
            </Space>
        ),
    },

];

const data = [
    {
        key: '1',
        name: 'John Brown',
        chinese: 98,
        math: 60,
        english: 70,
        tags: ['approved'],
    },
    {
        key: '2',
        name: 'Jim Green',
        chinese: 98,
        math: 66,
        english: 89,
        tags: ['pending'],
    },
    {
        key: '3',
        name: 'Joe Black',
        chinese: 98,
        math: 90,
        english: 70,
        tags: ['approved'],
    },
    {
        key: '4',
        name: 'Jim Red',
        chinese: 88,
        math: 99,
        english: 89,
        tags: ['block'],
    },
];

function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}


class BasicTable extends Component {

    render() {
        return (
            <AntTable className="basicTable" columns={columns} dataSource={data} onChange={onChange}/>
        );
    }
}

export default BasicTable;
