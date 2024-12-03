import './Copyright.scss';

const Copyright = () => {
    return (
        <div className="Copyright">{`© ${new Date().getFullYear()} All Rights Reserved.`}</div>
    );
}

export default Copyright