import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './CreateRoom.js';
import ClipboardToast from 'react-native-clipboard-toast';
import io from 'socket.io-client';

function CreateRoom({navigation, route}) {
  const [roomId, setRoomId] = useState();
  const [socket, setSocket] = useState();
  const {userName} = route.params;
  const [usersArray, setUserArray] = useState([]);
  const [isAdmin, setIsAdmin] = useState(true);
  // Currently whenver the user is coming to this screen a new socket connection is establsihed.We can stop that but since we are not thinking about that scale so going with the flow...

  useEffect(() => {
    const socket = io('http://192.168.64.246:5000');
    socket.on('connect', () => {
      console.log(socket.id);
      setSocket(socket);
    });

    socket.emit('createRoom', userName);

    socket.on('roomId', message => {
      setRoomId(message.roomId);
      const updatedArray = [...usersArray];
      updatedArray.push(message.infoToSend[0]);
      setUserArray(updatedArray);
    });

    socket.on('joinedSuccessfully', message => {
      const updatedData = message;
      console.log('THe users joined i am the admin', updatedData);
      setUserArray(updatedData.infoToSend);
    });
  }, []);

  const handleStartGame = () => {
    socket.emit('startGame', roomId);
    navigation.navigate('MainScreen', {socket, userName, roomId, isAdmin});
  };
  const handleCancel = () => {
    socket.disconnect();
    navigation.navigate('FirstScreen');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ROOM CREATED</Text>

      <View style={styles.wrapper}>
        <View style={styles.roomIdContainer}>
          <ClipboardToast
            textToShow={`ROOM ID : ${roomId}`}
            textToCopy={typeof roomId ? roomId : 'Nothing copied'}
            toastText={'Text copied to clipboard!'}
            id={'top'}
            containerStyle={{
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 5,
            }}
            textStyle={{fontSize: 18, color: '#223345'}}
            accessibilityLabel={'click me to copy'}
            toastPosition={'top'}
            toastDelay={100}
            toastOnShow={() => {
              console.log('Is Copied');
            }}
          />
        </View>
        <Text style={styles.roomId}>
          CONNECTED USERS : {usersArray.length}/3
        </Text>

        <View style={styles.joinedContainer}>
          {usersArray.map((element, index) => (
            <Text key={index} style={styles.names}>
              {element.userName}
            </Text>
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleStartGame}
            style={styles.startButton}>
            <Text style={styles.buttonText}>START GAME</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
            <Text style={styles.buttonText}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default CreateRoom;
