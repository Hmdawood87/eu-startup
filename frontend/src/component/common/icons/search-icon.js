import React, {Component} from 'react';
class SearchIcon extends Component {
    render() {
        return (
            <svg width="19px" height="18px" viewBox="0 0 19 18" version="1.1">
                <desc>Created with Lunacy</desc>
                <g id="Seach-Icon" transform="translate(0.75 0.75)">
                    <path d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z" id="Oval" fill="none" stroke={this.props.color} strokeWidth="1.5" />
                    <path d="M2.37837e-13 5.76671e-20L4.17725 4.25508" transform="matrix(0.9998477 0.01745241 -0.01745241 0.9998477 12.19892 11.67266)" id="Line-2" fill="none" stroke={this.props.color} strokeWidth="1.5" strokeLinecap="round" />
                </g>
            </svg>
        );
    }
}

export default SearchIcon;