import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";


const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('userToken', value);
    } catch (e) {
        console.log('Failed to save the data to the storage', e);
    }
};

const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('userToken');
        if (value !== null) {
            console.log(value);
        }
    } catch (e) {
        console.log('Failed to fetch the data from storage', e);
    }
};

const removeData = async () => {
    try {
        await AsyncStorage.removeItem('userToken');
    } catch (e) {
        console.log('Failed to remove the data from storage', e);
    }
};

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button
                title="Login"
                onPress={() => {
                    if (username === "username" && password === "password") {
                        storeData('loggedIn');
                        navigation.replace("Profile");
                    } else {
                        Alert.alert("Invalid credentials", "Please check your username and password.");
                    }
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});