import "./Textarea.scss";

const Textarea = ({value, onChange, placeholder, disabled = false, rows = 3}) => (
    <textarea
        className="Textarea"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
    />
);

export default Textarea;
