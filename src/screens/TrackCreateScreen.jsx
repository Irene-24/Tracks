import React, { useContext, useCallback } from 'react';
import { StyleSheet, useF } from 'react-native';
import { Text } from 'react-native-elements';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useLocation from "../hooks/useLocation";

import { Context as LocationContext } from "../context/LocationContext";

import "../_mockLocation";
import Map from "../components/Map";
import Spacer from '../components/Spacer';
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = () =>
{

    const { addLocation } = useContext( LocationContext );
    const [ err ] = useLocation( useIsFocused(), addLocation );

    return (
        <SafeAreaView>
            <Spacer>
                <Text h2>Create a track</Text>
                <Map />
                <TrackForm />
                { err ? <Text>Please enable locations</Text> : null }
            </Spacer>

        </SafeAreaView>
    );
};

export default TrackCreateScreen;

const styles = StyleSheet.create(
    {

    } );
