import React from 'react';
import './RainbowFrame.css';

class RainbowFrame extends React.Component {
    render() {
        return this.props.colors.reduce((acc, color) => {
            return <div style={{border: `5px solid ${color}`, padding: '10px', textAlign: 'center'}}>{acc}</div>
        }, this.props.children);
    }
}

export default RainbowFrame;
