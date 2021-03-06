import React, {Component} from 'react';
class ChatIcon extends Component {
    render() {
        return (
            <svg width="58px" height="58px" viewBox="0 0 58 58"
                 className="d-block mx-auto mb-2">
                <g id="Chat-Icon">
                    <g id="Chat-Icon">
                        <path
                            d="M29 57.816C33.385 57.816 41.2687 55.1092 41.2687 55.1092L58 58L55.0425 41.6411C55.0425 41.6411 58 33.4775 58 28.908C58 12.9426 45.0163 0 29 0C12.9837 0 0 12.9426 0 28.908C0 44.8735 12.9837 57.816 29 57.816Z"
                            id="Oval" fill={this.props.color} fillOpacity="0.5019608"
                            stroke="none"/>
                        <path
                            d="M5.5 11C8.53757 11 11 8.53757 11 5.5C11 2.46243 8.53757 0 5.5 0C2.46243 0 0 2.46243 0 5.5C0 8.53757 2.46243 11 5.5 11Z"
                            transform="translate(16 24)" id="dot-1" fill={this.props.color}
                            stroke="none"/>
                        <path
                            d="M5.5 11C8.53757 11 11 8.53757 11 5.5C11 2.46243 8.53757 0 5.5 0C2.46243 0 0 2.46243 0 5.5C0 8.53757 2.46243 11 5.5 11Z"
                            transform="translate(31 24)" id="dot-2" fill={this.props.color}
                            stroke="none"/>
                    </g>
                </g>
            </svg>
        );
    }
}

export default ChatIcon;