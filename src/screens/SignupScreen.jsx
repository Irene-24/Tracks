import React, { useLayoutEffect, useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from "react-native-elements";

import { Context as AuthContext } from "../context/AuthContext";

import Spacer from "../components/Spacer";

const SignupScreen = ( { navigation } ) =>
{
    const { signup, state } = useContext( AuthContext );
    const [ email, setEmail ] = useState( "" );
    const [ password, setPassword ] = useState( "" );

    useLayoutEffect( () =>
    {
        navigation.setOptions(
            {
                headerShown: false
            } );
    }, [ navigation ] );

    const register = () =>
    {
        signup( { email, password }, () =>
        {
            if ( !state.errorMessage )
            {
                navigation.navigate( "Signin", { email, password } );
            }
        } );

    };

    return (
        <View style={ styles.Container }>

            <Spacer>
                <Text h3 >Sign Up for Tracker</Text>
            </Spacer>

            <Input
                label="Email"
                value={ email }
                autoCapitalize="none"
                autoCorrect={ false }
                onChangeText={ setEmail } />

            <Spacer />
            <Input
                label="Password"
                value={ password }
                autoCapitalize="none"
                autoCorrect={ false }
                secureTextEntry
                onChangeText={ setPassword } />


            {
                state.errorMessage ?
                    <Spacer>

                        <Text style={ styles.Error }>{ state.errorMessage }</Text>
                    </Spacer>
                    : null
            }

            <Spacer>
                <Button
                    title="Sign Up"
                    onPress={ register } />
            </Spacer>


        </View>
    );
};

export default SignupScreen;

const styles = StyleSheet.create(
    {
        Container:
        {
            flex: 1,
            justifyContent: "center",
            marginBottom: 100
        },
        Error:
        {
            fontSize: 16,
            color: "red"
        }
    } );
