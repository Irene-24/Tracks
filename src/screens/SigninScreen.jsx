import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';

const SigninScreen = ( { navigation } ) =>
{
    return (
        <>
            <Text>Sign in Screen</Text>
            <Button
                title="Go to sign up"
                onPress={ () => navigation.navigate( "Signup" ) } />
        </>
    );
};

export default SigninScreen;

const styles = StyleSheet.create( {} );
