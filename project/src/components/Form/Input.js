import "./Input.scss";


const Input = ({type = 'text', value, onChange, placeholder}) => (
    <input
        className="Input"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
    />
);

export default Input;
