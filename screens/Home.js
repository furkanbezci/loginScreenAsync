import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { View, Text, Button } from 'react-native'



const Home = ({ navigation }) => {

    const logoutHandler = async () => {

        try {
            // await AsyncStorage.removeItem('user');
            await AsyncStorage.removeItem('user1');

            navigation.navigate('Login');

        }
        catch (exception) {
            return false;
        }
    }

    return (
        <View>
            <Text>Welcome to the secret shop</Text>
            <Button title='LogOut' onPress={logoutHandler} />
        </View>
    )
}
export default Home;
