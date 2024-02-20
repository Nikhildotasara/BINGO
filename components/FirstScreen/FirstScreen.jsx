import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './FirstScreen.js';

function FirstScreen({navigation}) {
  const [userName, setUserName] = useState('Player');
  const handleCreateRoom = () => {
    navigation.navigate('CreateRoom', {userName});
  };
  const handleJoinRoom = () => {
    navigation.navigate('JoinRoom', {userName});
  };
  const handleWithComputer = () => {
    navigation.navigate('JoinRoom', {userName});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>BINGO</Text>

      <View style={styles.wrapper}>
        <TextInput
          style={styles.userNameInput}
          placeholderTextColor={'white'}
          placeholder="Enter Your Name"
          onChangeText={text => {
            setUserName(text);
          }}
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
          <TouchableOpacity
            onPress={handleWithComputer}
            style={styles.joinButton}>
            <Text style={styles.buttonText}>COMPUTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default FirstScreen;
