const CommonInput = ({ name, type, placeholder, value, onChange, rows }) => {
    if (type === 'textarea') {
        return (
            <textarea
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                rows={rows}
            />
        );
    } else {
        return (
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        );
    }
};

export default CommonInput;