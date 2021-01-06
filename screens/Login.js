import React, { useState, useEffect } from 'react';
import { TextInput, View, StyleSheet, Text, TouchableHighlight, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ChangingState } from './SignUp'

// import { AsyncStorage } from 'react-native'


const Login = ({ navigation, route }) => {
    useEffect(() => {

        getData();

    }, [])

    const [user, setUser] = useState({ username: '', password: '' });






    // const signUpHandler =()=>{
    //     storeData()
    // }
    const loginHandler2 = () => {
        navigation.navigate('Home')
    }

    const loginHandler = () => {

        storeAndGetData();

    }
    // firebase
    // .auth()
    // .signInWithEmailAndPassword(email, pass)
    // .then(res => {
    // })
    // .catch(error => {
    //   // Handle Errors here.
    //   console.log(error.message);

    // });


    const storeAndGetData = async () => {
        try {
            // if statementle daha önce kaydolmussa girilen user bilgileri, Burada tekrar girişte login sorulmayacak.
            const value = await AsyncStorage.getItem('user');
            console.log(user)
            const value1 = await AsyncStorage.getItem('user1');
            const parsedValue = JSON.parse(value);
            if (user.username === parsedValue.username && user.password === parsedValue.password) {
                await AsyncStorage.setItem('parsedValue', JSON.stringify(parsedValue))
                console.warn(user)
                console.log(value1)
                console.log(parsedValue)
                navigation.navigate('Home');
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    // JSON.stringify(itemId)
    const goToSignUp = () => {

        navigation.navigate('SignUp')

    }


    // const readStore = async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('user');
    //         const parsedValue = JSON.parse(value);
    //         console.log(parsedValue);
    //         if (parsedValue !== null) {
    //             setUser({
    //                 user: {
    //                     username: parsedValue.username,
    //                     password: parsedValue.password
    //                 }
    //             },
    //                 loginHandler()
    //             )
    //         }
    //     } catch (e) {
    //         // error reading value
    //     }

    // }










    const getData = async () => {



        try {

            const value = await AsyncStorage.getItem('user1');
            const parsedValue = JSON.parse(value);
            // const parsedValue = JSON.parse(value);
            // console.log(parsedValue)
            if (parsedValue !== null) {
                setUser(
                    {
                        username: parsedValue.username,
                        password: parsedValue.password
                    }, loginHandler2())


            }


            if (value !== null) {
                setUser(username)
            }
            if (value !== null) {
                setUser(password)
            }

        }

        catch (e) {
            console.log(e)

        }
    }

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <View>
                <Text>Username</Text>
                <TextInput style={{ borderRadius: 30, borderWidth: 1, color: 'rgb(89, 89, 89)' }} placeholder='Username'
                    onChangeText={(val) => setUser({ ...user, username: val })}
                    autoCapitalize="none"
                ></TextInput>
            </View>
            <View>
                <Text>Password</Text>
                <TextInput style={{ borderRadius: 30, borderWidth: 1, }} placeholder='Password'
                    onChangeText={(val) => setUser({ ...user, password: val })}
                    utoCapitalize="none"
                ></TextInput>
                <View>
                    <TouchableHighlight onPress={loginHandler} style={{ height: 50, width: '30%', backgroundColor: 'yellow' }}>
                        <Text> Giriş </Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={goToSignUp} style={{ height: 50, width: '30%', backgroundColor: 'yellow' }}>
                        <Text> Kaydol </Text>
                    </TouchableHighlight>

                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({


});

export default Login;
