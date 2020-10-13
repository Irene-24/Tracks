import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

import Map from "../components/Map";
import Spacer from '../components/Spacer';
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = () =>
{
    return (
        <SafeAreaView>
            <Spacer>
                <Text h2>Create a track</Text>
                <Map />
                <TrackForm />
            </Spacer>

        </SafeAreaView>
    );
};

export default TrackCreateScreen;

const styles = StyleSheet.create( {} );
