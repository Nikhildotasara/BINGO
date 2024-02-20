import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './Waitingroom.js';

function WaitingRoom({navigation, route}) {
  const {socket, userName, roomId, isAdmin, userInfo} = route.params;
  const [joinedUsers, setJoinedUsers] = useState([]);

  useEffect(() => {
    setJoinedUsers(userInfo);

    socket.on('startGame', () => {
      navigation.navigate('MainScreen', {socket, userName, roomId, isAdmin});
    });
  }, [socket]);

  const handleCancel = () => {
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

      <Text style={styles.joinedText}>JOINED {joinedUsers.length}/3</Text>

      <View style={styles.playersContainer}>
        {joinedUsers.map((element, index) => (
          <Text key={index} style={styles.playerText}>
            {element.userName}
          </Text>
        ))}
      </View>

      <TouchableOpacity onPress={handleCancel} style={styles.button}>
        <Text style={styles.buttonText}>CANCEL</Text>
      </TouchableOpacity>
    </View>
  );
}

export default WaitingRoom;
