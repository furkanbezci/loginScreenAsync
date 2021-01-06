import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Login'
import Home from '../screens/Home'
import SignUp from '../screens/SignUp';
import { TextInput, View, StyleSheet, Text, TouchableHighlight, Button } from 'react-native';


const Stack = createStackNavigator();

export default function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            headerMode="screen"
            screenOptions={{
                headerTintColor: 'black',
                headerStyle: { backgroundColor: '#ffffcc' },
            }}
        >
            <Stack.Screen name="Login" component={Login}
                options={{
                    headerLeft: () => null,
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="#00cc00"
                        />
                    ),
                }}
            />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SignUp" component={SignUp} />




        </Stack.Navigator>
    );
}
