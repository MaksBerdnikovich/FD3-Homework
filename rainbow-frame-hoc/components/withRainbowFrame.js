import React from 'react';

const withRainbowFrame = colors => Component => {
    return class extends React.Component {
        render() {
            return colors.reduce((children, color) => {
                return (
                    <div style={{ border: `5px solid ${color}`, padding: '10px', textAlign: 'center'}}>
                        {children}
                    </div>
                );
            }, <Component {...this.props} />);
        }
    };
};

export default withRainbowFrame;