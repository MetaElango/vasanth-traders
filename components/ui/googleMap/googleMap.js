"use client";
import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  minHeight: "400px",
  height: "100%",
};

const center = {
  lat: 11.273654,
  lng: 77.588783,
};

const GoogleMapComponent = () => {
  // Load the Google Maps script
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  // Render the Google Map when the API is loaded
  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
      <Marker position={center} />
    </GoogleMap>
  ) : (
    // Loading element to display until the map is ready
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "400px",
      }}
    >
      <p>Loading...</p>
    </div>
  );
};

export default React.memo(GoogleMapComponent);
