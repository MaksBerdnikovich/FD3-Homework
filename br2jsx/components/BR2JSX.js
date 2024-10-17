import React from 'react';
import './BR2JSX.css';

class BR2JSX extends React.Component {
    render() {
        const text = this.props.text.split(/<br\s*\/?>/i);

        return (
            <div>{text.map((item, index) => {
                const textOutput = []

                textOutput.push(item)

                if (index < text.length - 1) {
                    textOutput.push(<br key={index}/>)
                }

                return textOutput
            })}</div>
        );
    }
}

export default BR2JSX;
