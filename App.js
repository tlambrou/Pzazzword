import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  generatePassword() {
    console.log("Password Generate!")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>pzazzwords</Text>
        <Text style={styles.tagline}>Generate the most secure passwords</Text>
        <Button title="Generate" onPress={this.generatePassword} color="#FB5258" style={styles.button}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    color: '#FB5258',
    fontSize: 56,
  },
  tagline: {
    color: '#DDD',
  },
});
