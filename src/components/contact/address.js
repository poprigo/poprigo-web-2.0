import React from 'react';

const AddressComponent = ({ title, value }) => {
    return (
        <div className="address">
            <p className="contact-title">{title}</p>
            <h2 className="contact-value">{value}</h2>
        </div>
    );
};

export default AddressComponent;
