import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './Waitingroom.js';

function WaitingRoom({navigation}) {
  const handleCancel = () => {
    console.log('Cancel Button pressed');
    navigation.navigate('FirstScreen');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>WAITING FOR PLAYERS TO JOIN</Text>

      <LottieView
        source={require('../../assests/Animation - 1708123214257.json')}
        style={{width: '30%', height: '15%'}}
        autoPlay
        loop
      />

      <Text style={styles.joinedText}>JOINED 0/3</Text>

      <View style={styles.playersContainer}>
        <Text style={styles.playerText}>ANKIT</Text>
        <Text style={styles.playerText}>NIKHIL</Text>
        <Text style={styles.playerText}>KUMAR</Text>
      </View>

      <TouchableOpacity onPress={handleCancel} style={styles.button}>
        <Text style={styles.buttonText}>CANCEL</Text>
      </TouchableOpacity>
    </View>
  );
}

export default WaitingRoom;
