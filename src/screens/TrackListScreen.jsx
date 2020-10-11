import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';

const TrackListScreen = ( { navigation } ) =>
{
    return (
        <>
            <Text>TrackListScreen</Text>
            <Button
                title="Go to track details"
                onPress={ () => navigation.navigate( "TrackDetails" ) } />
        </>
    );
};

export default TrackListScreen;

const styles = StyleSheet.create( {} );
