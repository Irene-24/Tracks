import React,
{
    useLayoutEffect,
    useContext,
    useCallback
} from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

const SignupScreen = ( { navigation } ) =>
{
    const { signup, state, clearErrMsg } = useContext( AuthContext );

    useLayoutEffect( () =>
    {

        navigation.setOptions(
            {
                headerShown: false
            } );
    }, [ navigation ] );

    useFocusEffect(
        useCallback( () =>
        {
            clearErrMsg();
        }, [] )
    );


    const register = ( { email, password } ) =>
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

        <AuthForm
            header="Sign Up for Tracker"
            buttonText="Sign Up"
            navText="Already have an account ? Sign in"
            errorMessage={ state.errorMessage }
            submit={ register }
            goTo={ () => navigation.navigate( "Signin" ) }
        />

    );
};

export default SignupScreen;
