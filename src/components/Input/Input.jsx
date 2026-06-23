import "./Input.css";
function Input(
    type = "text",
    placeholder = "Search for properties",
    value = "",
    onChange = () => {}
){
    return (<div>
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="input-field"
        />
    </div>
    );
}

export default Input;