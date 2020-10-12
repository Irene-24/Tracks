import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from "react-native-elements";

import Link from "../components/Link";
import Spacer from "../components/Spacer";

const AuthForm = ( props ) =>
{
    const { header, buttonText, submit, navText, initValues, goTo, errorMessage } = props;

    const [ email, setEmail ] = useState( initValues?.email || "" );
    const [ password, setPassword ] = useState( initValues?.password || "" );

    const submitHandler = () => 
    {
        submit( { email, password } );
    };

    return (
        <View style={ styles.Container }>

            <Spacer>
                <Text h3 >{ header }</Text>
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
                errorMessage ?
                    <Spacer>

                        <Text style={ styles.Error }>{ errorMessage }</Text>
                    </Spacer>
                    : null
            }

            <Spacer>
                <Button
                    title={ buttonText }
                    onPress={ submitHandler } />
            </Spacer>

            <Spacer>
                <Link goToPage={ goTo } navText={ navText } />
            </Spacer>

        </View>
    );
};

export default AuthForm;

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
