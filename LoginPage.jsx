import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Alert  } from 'react-native';
import { TextInput, Card, Title, Paragraph } from 'react-native-paper';
import { Button } from 'react-native-material-design';

const LoginPage = ({ navigation }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    if (user === 'pengguna' && password === 'masuk') {
      console.log(user, password);
      console.log('Login successful');
      navigation.navigate('Home');
    } else {
      console.log('Login failed');
      Alert.alert('Login Failed', 'Incorrect username or password.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Kelompok 6</Text>
      <Card>
        <Card.Content>
          <Title>Login</Title>
          <TextInput
            label="User" 
            value={user}
            onChangeText={text => setUser(text)}
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            mode="outlined"
            style={styles.input}
          />
          <Button mode="contained" onPress={handleLogin}>
            Login
          </Button>
          <Button value="NORMAL FLAT" onPress={()=> console.log("I pressed a flat button")} />
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    marginBottom: 10,
  },title: {
    fontSize: 30, // Increased font size
    fontWeight: 'bold',
    textAlign: 'center', // Centered text
    marginBottom: 20,
  },
});

export default LoginPage;
