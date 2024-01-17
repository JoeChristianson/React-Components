"use client"
import Coordinates from "types/Coordinates"
import styles from "./index.module.scss"
import React from "react"
import { GoogleMap, LoadScript } from '@react-google-maps/api';


type Props = {
className?:string
    coordinates:Coordinates
    apiKey?:string
}

const containerStyle = {
    width: '50%',
    height: 'unset'
  };

const MapGoogle = ({className,coordinates,apiKey}: Props) => {

    const key = apiKey
    console.log({key})

    if(!key){
        return<div>Need API Key</div>
    }

    const {lat,lng,zoom} = coordinates

    const center = {
        lat,
        lng
    }

    return     <LoadScript
    googleMapsApiKey={key} // Replace with your API key
  >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
      ></GoogleMap>
  </LoadScript>
}

export default MapGoogle