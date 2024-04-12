import React from 'react';

const MapComponent = () => {
    return (
        <div className="map-frame">
            <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                style={{ border: 0 }}
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=L.H.%20Road,%20surat,%20gujarat,%20india+(Poprigo%20Technolabs)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
                <a href="https://www.gps.ie/">gps systems</a>
            </iframe>
        </div>
    );
};

export default MapComponent;
