const ItemsStyle = {
  flex: "0.1 0",
  padding: "10px",
  marginLeft: "10px",
  marginTop: "10px"
};

const InputText = ({ title, type, name, value, onChange, placeholder }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "start"
    }}
    className="form-group"
  >
    <label
      style={{
        ItemsStyle,
        flex: "0.2 0"
      }}
      htmlFor={name}
      className="form-label"
    >
      {title}
    </label>
    <input
      style={{ ItemsStyle }}
      className="form-input"
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

export default InputText;
