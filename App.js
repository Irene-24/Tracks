import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountScreen from "./src/screens/AccountScreen";
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
      name="Tracks"
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

export default function App ()
{
  const [ isAuth, setIsAuth ] = useState( false );

  return (
    <NavigationContainer>
      {
        isAuth ? <MainApp /> : <AuthScreens />
      }
    </NavigationContainer>
  );
}
