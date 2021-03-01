/***********
 Props
 ratingType:PropTypes.string
 ratingVariant:PropTypes.string
 rating:PropTypes.string
 value:PropTypes.string
 activeColor:PropTypes.string
 ************/
import React, {Component} from 'react';
import {Rating, RatingLabel} from "../../../assets/css/ratingStyle";
import ReactStars from "react-rating-stars-component";

const ratingChanged = (newRating) => {
    console.log(newRating);
};

class StarRating extends Component {
    render() {
        return (
            <Rating type={this.props.ratingType} variant={this.props.ratingVariant}>
                <RatingLabel>{this.props.rating}</RatingLabel>
                <ReactStars
                    classNames="starts"
                    count={5}
                    size={15}
                    onChange={ratingChanged}
                    color="#dbdbdb"
                    value={this.props.rating}
                    activeColor={this.props.activeColor}
                />
            </Rating>
        );
    }
}
export default StarRating ;
