import React from 'react';
import { StyleSheet, View } from 'react-native';

const Spacer = ( { children } ) =>
{
    return (
        <View style={ styles.Container }>
            {children }
        </View>
    );
};

export default Spacer;

const styles = StyleSheet.create(
    {
        Container:
        {
            margin: 15
        }
    } );
