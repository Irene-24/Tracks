import React, { useLayoutEffect, useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from "react-native-elements";

import { Context as AuthContext } from "../context/AuthContext";

import Spacer from "../components/Spacer";


const SigninScreen = ( { navigation, route } ) =>
{

    const { signin, state } = useContext( AuthContext );
    const [ email, setEmail ] = useState( route.params.email || "" );
    const [ password, setPassword ] = useState( route.params.password || "" );

    useLayoutEffect( () =>
    {
        navigation.setOptions(
            {
                headerShown: false
            } );
    }, [ navigation ] );

    const login = () =>
    {
        signin( { email, password } );

    };

    return (
        <View style={ styles.Container }>

            <Spacer>
                <Text h3 >Sign In to Tracker</Text>
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
                    title="Sign In"
                    onPress={ login } />
            </Spacer>


        </View>
    );
};

export default SigninScreen;

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
