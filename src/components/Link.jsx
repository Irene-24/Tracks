import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Link = ( { goToPage, navText } ) =>
{
    return (

        <TouchableOpacity
            onPress={ goToPage }>
            <Text style={ styles.Link }>{ navText }</Text>
        </TouchableOpacity>
    );
};

export default Link;

const styles = StyleSheet.create(
    {

        Link:
        {
            color: "blue"
        }
    } );
