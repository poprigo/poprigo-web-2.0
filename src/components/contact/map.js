import React from 'react';

const MapComponent = () => {
    return (
        <div className="map-frame">
            <iframe
                width="100%"
                height="100%"
                style={{ border: 0, borderColor: 'transparent' }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.0039519615807!2d72.86365997543412!3d21.231691880468915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0778f12ea7%3A0xd4bc1f45fa091301!2sDigital%20Valley!5e0!3m2!1sen!2sin!4v1712925726174!5m2!1sen!2sin"
            />
        </div>
    );
};

export default MapComponent;
