import React from 'react';
import { StyleSheet, Text, View, Clipboard } from 'react-native';

const Header = (props) => {
            return (
              <View style={styles.header}>
                <Text style={styles.title}>pzazzwords</Text>
                <Text style={styles.tagline}>Generate the most secure passwords</Text>
              </View>
            )
        }

export default Header
