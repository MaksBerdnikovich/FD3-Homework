import React from 'react';
import ReactDOM from 'react-dom';

const text = "первый<br>второй<br/>третий<br />последний";

class Br2Jsx extends React.Component {
    setStyles = () => ({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#ccc'
    })

    setText = (text) => {
        const brArr = ['<br>', '<br/>', '<br />'];
        let newText = text
        let newTextArr = []

        for (let br of brArr) {
            if (newText.indexOf(br) > -1) {
                newText = newText.replaceAll(br, ',')
            }
        }

        newTextArr = newText.split(',')

        return newTextArr.map((item, index) => {
            const newTextOutput = []

            if (item) {
                newTextOutput.push(item)

                if (newTextArr.length - 1 !== index) {
                    newTextOutput.push(<br key={index} />)
                }
            }

            return newTextOutput
        });
    }

    render() {
        return (
            <div className={'br2jsx'} style={this.setStyles()}>
                {this.setText(this.props.text)}
            </div>
        )
    }
}

ReactDOM.render(<Br2Jsx text={text} />, document.getElementById('app'));