import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './FirstScreen.js';

function FirstScreen({navigation}) {
  const handleCreateRoom = () => {
    console.log('Create Room Pressed');
    navigation.navigate('CreateRoom');
  };
  const handleJoinRoom = () => {
    console.log('Join Room Pressed');
    navigation.navigate('JoinRoom');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>BINGO</Text>

      <View style={styles.wrapper}>
        <TextInput
          style={styles.userNameInput}
          placeholderTextColor={'white'}
          placeholder="Enter Your Name"
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleCreateRoom}
            style={styles.createButton}>
            <Text style={styles.buttonText}>CREATE ROOM</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleJoinRoom} style={styles.joinButton}>
            <Text style={styles.buttonText}>JOIN ROOM</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default FirstScreen;
