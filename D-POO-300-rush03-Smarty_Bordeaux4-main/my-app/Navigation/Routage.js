import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Map from '../screens/Map'
import LoginScreen from '../screens/Login_Page'
import Activity from '../screens/Activity_Page'
import Filtre from '../screens/Filtre'
import Accident from '../screens/Accident_Page'

const Tab = createBottomTabNavigator();

export default function expo() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={LoginScreen} />
                <Tab.Screen name="Map" component={Map} />
                <Tab.Screen name="Accident" component={Accident} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}


