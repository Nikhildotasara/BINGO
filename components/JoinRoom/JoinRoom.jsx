import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './JoinRoom.js';
import io from 'socket.io-client';

import Snackbar from 'react-native-snackbar';

function JoinRoom({navigation, route}) {
  const [roomId, setRoomId] = useState();
  const [socket, setSocket] = useState();
  const {userName} = route.params;
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const socket = io('http://192.168.64.246:5000');

    setSocket(socket);

    socket.on('connect', () => {
      console.log('Connection Established with roomId', socket.id);
      // setSocket(socket);
    });

    socket.on('joinedSuccessfully', message => {
      setRoomId(message.roomId);

      const userInfo = message.infoToSend;
      const roomId = message.roomId;

      navigation.navigate('WaitingRoom', {
        socket,
        userName,
        roomId,
        isAdmin,
        userInfo,
      });
    });

    socket.on('roomNotFound', () => {
      Snackbar.show({
        text: 'Room not found',
        duration: Snackbar.LENGTH_SHORT,
      });
    });

    socket.on('roomFull', () => {
      Snackbar.show({
        text: 'Room already full',
        duration: Snackbar.LENGTH_SHORT,
      });
    });
  }, []);

  const handleJoin = () => {
    const message = {
      userName: userName,
      roomId: roomId,
    };
    socket.emit('joinRoom', message);
  };

  const handleCancel = () => {
    socket.disconnect();
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
            onChangeText={text => {
              setRoomId(text);
            }}
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
