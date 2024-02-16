import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './JoinRoom.js';

function JoinRoom({navigation}) {
  const handleJoin = () => {
    console.log('Join button pressed');
    navigation.navigate('WaitingRoom');
  };

  const handleCancel = () => {
    console.log('Cancel button pressed');
    navigation.navigate('FirstScreen');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>JOIN THE ROOM</Text>

      <View style={styles.wrapper}>
        <View style={styles.inputWrapper}>
          <Text style={styles.roomIdText}>ROOM ID :</Text>
          <TextInput
            style={styles.inputContainer}
            placeholderTextColor={'white'}
            placeholder="ENTER THE ROOM ID"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleJoin} style={styles.joinButton}>
            <Text style={styles.buttonText}>JOIN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
            <Text style={styles.buttonText}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default JoinRoom;
