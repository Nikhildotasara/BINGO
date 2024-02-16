import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './MainScreen.js';

function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>BINGO</Text>

      <View style={styles.timeContainer}>
        <Text style={styles.time}> 01:57</Text>
      </View>

      <View style={styles.board}>
        <Text>asdfads</Text>
      </View>

      <View style={styles.userContainer}>
        <TouchableOpacity style={styles.playerButton}>
          <Text style={styles.playerText}>NIKHIL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playerButton}>
          <Text style={styles.playerText}>ANKIT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playerButton}>
          <Text style={styles.playerText}>KUMAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MainScreen;
