"use client";
import React from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
var containerStyle = {
    width: '50%',
    height: 'unset'
};
var MapGoogle = function (_a) {
    var className = _a.className, coordinates = _a.coordinates, apiKey = _a.apiKey;
    var key = apiKey;
    console.log({ key: key });
    if (!key) {
        return React.createElement("div", null, "Need API Key");
    }
    var lat = coordinates.lat, lng = coordinates.lng, zoom = coordinates.zoom;
    var center = {
        lat: lat,
        lng: lng
    };
    return React.createElement(LoadScript, { googleMapsApiKey: key },
        React.createElement(GoogleMap, { mapContainerStyle: containerStyle, center: center, zoom: zoom }));
};
export default MapGoogle;
