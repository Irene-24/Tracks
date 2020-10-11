import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';

const SignupScreen = ( { navigation, ...props } ) =>
{
    return (
        <>
            <Text>Signup Screen</Text>
            <Button
                title="Go to sign in"
                onPress={ () => navigation.navigate( "Signin" ) } />

            <Button
                title="Go to main flow"
                onPress={ props.toggle } />
        </>
    );
};

export default SignupScreen;

const styles = StyleSheet.create( {} );
