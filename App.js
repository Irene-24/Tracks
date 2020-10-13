import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SafeAreaProvider } from 'react-native-safe-area-context';


import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Context as AuthContext } from "./src/context/AuthContext";


import AccountScreen from "./src/screens/AccountScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailsScreen from "./src/screens/TrackDetailsScreen";

const Stack = createStackNavigator();
const StackB = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tracks = () => (
  <StackB.Navigator>
    <StackB.Screen
      name="TrackList"
      component={ TrackListScreen } />
    <StackB.Screen
      name="TrackDetails" component={ TrackDetailsScreen } />
  </StackB.Navigator>
);

const MainApp = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="TrackList"
      component={ Tracks } />
    <Tab.Screen
      name="TrackCreate"
      component={ TrackCreateScreen } />
    <Tab.Screen
      name="Account"
      component={ AccountScreen } />

  </Tab.Navigator>
);

const AuthScreens = () => (
  <Stack.Navigator>

    <Stack.Screen name="Signup" component={ SignupScreen } />

    <Stack.Screen name="Signin" component={ SigninScreen } />

  </Stack.Navigator>
);

const Container = () =>
{
  const { state } = useContext( AuthContext );
  const [ loading, setLoading ] = useState( true );

  useEffect( () =>
  {
    setTimeout( () => setLoading( false ), 500 );

  }, [ loading ] );

  if ( loading )
  {
    return <ResolveAuthScreen />;
  }

  return (
    <NavigationContainer>
      {
        state.token ?
          <MainApp /> :
          <AuthScreens />
      }
    </NavigationContainer>
  );
};

export default function App ()
{
  return (
    <SafeAreaProvider>
      <LocationProvider>
        <AuthProvider>
          <Container />
        </AuthProvider>
      </LocationProvider>
    </SafeAreaProvider>
  );
}
