import React from 'react';
import ReactDOM from 'react-dom';

const colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

class RainbowFrame extends React.Component {
    setStyles = (num, i = 0) => ({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        width: '300px',
        boxShadow: this.props.colors.map(color => `0px 0px 0px ${++i*num}px white, 0px 0px 0px ${++i*num}px ${color}`)
    })

    render() {
        return (
            <div style={this.setStyles(10)}>
                <h2>{this.props.children}</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <RainbowFrame colors={colors}>Hello!</RainbowFrame>
    , document.getElementById('app')
);
