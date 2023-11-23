import { StyleSheet, Text, View, TextInput, Image, ImageBackground } from 'react-native';
import React from 'react'

export default function App() {
    const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: 'https://images.pexels.com/photos/7130473/pexels-photo-7130473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}>
      <Text style={styles.heading}>Welcome To React Native</Text>
      <View>
        <Image  style={styles.image}
          source={{uri: "https://www.thestatesman.com/wp-content/uploads/2022/02/tiger-1024x683.jpg"}} />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder='Please Enter Your Name'
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Please Enter Your Age"
        keyboardType="numeric"
      />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  image: {
    width: 400,
    height: 400,
  },
  heading:{
    fontWeight: 'bold',
    fontSize: 20,
    margin: 30,
    fontFamily: 'Roboto',
    color: 'red'
  }
});
