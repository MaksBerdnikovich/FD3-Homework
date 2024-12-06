import './Select.scss'

const Select = ({options, value, onChange, disabled = false}) => (
    <select className="Select" value={value} onChange={onChange} disabled={disabled}>
        <option value="">Choose an option</option>
        {options.map((option) => (<option key={option} value={option}>{option}</option>))}
    </select>
);

export default Select;
