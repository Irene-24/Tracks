import React, { useState, useContext } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import MapView, { Polyline, Circle } from "react-native-maps";

import { Context as LocationContext } from "../context/LocationContext";


const Map = () =>
{
    const { state: { currentLocation } } = useContext( LocationContext );

    if ( !currentLocation ) 
    {
        return <ActivityIndicator size="large" style={ { marginTop: 200 } } />;
    }

    return (
        <MapView
            style={ styles.Map }
            initialRegion={
                {
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }
            }
        >
            {/* rgba(158,158,255,1)  rgba(158,158,255,0.3) */ }
            {/* <Polyline coordinates={ points } /> */ }
            <Circle
                center={ currentLocation.coords }
                radius={ 30 }
                strokeColor="rgba(158,158,255,1)"
                fillColor="rgba(158,158,255,0.3)e"

            />
        </MapView>
    );
};

export default Map;

const styles = StyleSheet.create(
    {
        Map:
        {
            height: 300
        }
    } );
