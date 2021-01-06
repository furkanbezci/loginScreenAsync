import React, { useState, useEffect } from 'react';
import { TextInput, View, StyleSheet, Text, TouchableHighlight, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const SignUp = ({ navigation, }) => {
    const [user, setUser] = useState({ username: '', password: '' });
    const [user1, setUser1] = useState({ username1: '', password1: '' });

    useEffect(() => {
        setUser1({ ...user1, username1: user.username, password1: user.password })
    }, [user])

    const [kayitBasarili, setKayitBasarili] = useState(false)

    const goToLogin = () => {
        navigation.navigate('Login', { user, user1 })
        setKayitBasarili(!kayitBasarili);
    }




    const signUpHandler = () => {

        storeData();
        setKayitBasarili(!kayitBasarili);

    }


    const SuccesfullSignUp = () => {
        return (
            <View>
                <Text>Kayıt Başarılı</Text>
                <TouchableHighlight style={{ height: 50, width: '30%', backgroundColor: 'red' }}
                    onPress={goToLogin}
                >
                    <Text> Giriş Ekranına Dön </Text>
                </TouchableHighlight>


            </View>
        )
    }

    const storeData = async () => {
        try {
            await AsyncStorage.setItem('user', JSON.stringify(user))
            await AsyncStorage.setItem('user1', JSON.stringify(user1))
            // await AsyncStorage.setItem('userLogged', JSON.stringify(userLogged))
            console.log(user)

            console.log(user1)
        }
        catch (err) {
            console.log(err)
        }
    }
    console.log(kayitBasarili)


    return (
        <View>
            {(!kayitBasarili ?

                <View>
                    <View>
                        <Text>Username </Text>
                        <TextInput style={{ borderRadius: 30, borderWidth: 1, color: 'rgb(89, 89, 89)' }} placeholder='Username'
                            onChangeText={(val) => setUser({ ...user, username: val })}
                            autoCapitalize="none"
                        ></TextInput>
                    </View>
                    <View>
                        <Text>Password</Text>
                        <TextInput style={{ borderRadius: 30, borderWidth: 1, }} placeholder='Password'
                            onChangeText={(val) => setUser({ ...user, password: val }) && setUser1({ ...user1, password: user.password })}
                            autoCapitalize="none"
                        ></TextInput>
                        <View>
                            <TouchableHighlight style={{ height: 50, width: '30%', backgroundColor: 'red' }}
                                onPress={signUpHandler}
                            >
                                <Text> Kaydol </Text>
                            </TouchableHighlight>

                        </View>
                    </View>
                </View>
                : //! burda

                <SuccesfullSignUp />

            )}

            {/* <View>
                <Text>Username</Text>
                <TextInput style={{ borderRadius: 30, borderWidth: 1, color: 'rgb(89, 89, 89)' }} placeholder='Username'
                    onChangeText={(val) => setUser({ ...user, username: val })}
                ></TextInput>
            </View>
            <View>
                <Text>Password</Text>
                <TextInput style={{ borderRadius: 30, borderWidth: 1, }} placeholder='Password'
                    onChangeText={(val) => setUser({ ...user, password: val })}
                ></TextInput>
                <View>
                    <TouchableHighlight style={{ height: 50, width: '30%', backgroundColor: 'red' }}
                        onPress={signUpHandler && Show}
                    >
                        <Text> Kaydol </Text>
                    </TouchableHighlight>

                </View>
            </View> */}
        </View>
    )
}
export default SignUp

