import React,
{
    useLayoutEffect,
    useContext,
    useCallback
} from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

const SigninScreen = ( { navigation, route } ) =>
{
    const { signin, state, clearErrMsg } = useContext( AuthContext );

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

    const login = ( { email, password } ) =>
    {
        signin( { email, password } );

    };

    return (

        <AuthForm
            header="Sign In to Tracker"
            buttonText="Sign In"
            navText="Not registered? Sign up"
            errorMessage={ state.errorMessage }
            submit={ login }
            goTo={ () => navigation.navigate( "Signup" ) }
            initValues=
            {
                {
                    email: route.params?.email,
                    password: route.params?.password,
                }
            }
        />

    );
};

export default SigninScreen;
