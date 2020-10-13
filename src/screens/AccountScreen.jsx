import React, { useContext } from 'react';
import { Text } from 'react-native';
import { Button } from "react-native-elements";
import { SafeAreaView } from 'react-native-safe-area-context';

import { Context as AuthContext } from "../context/AuthContext";

import Spacer from "../components/Spacer";



const AccountScreen = () => 
{
    const { signout } = useContext( AuthContext );
    return (
        <SafeAreaView>
            <Spacer>
                <Text
                    style={ { fontSize: 40 } }>Account Screen</Text>

                <Spacer />
                <Button
                    title="Sign Out"
                    onPress={ signout } />
            </Spacer>

        </SafeAreaView>
    );
};

export default AccountScreen;
