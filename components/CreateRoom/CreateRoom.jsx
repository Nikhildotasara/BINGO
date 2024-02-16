import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './CreateRoom.js';
import ClipboardToast from 'react-native-clipboard-toast';

function CreateRoom({navigation}) {
  const handleStartGame = () => {
    console.log('Start Game pressed');
    navigation.navigate('MainScreen');
  };
  const handleCancel = () => {
    console.log('Canceleed the game');
    navigation.navigate('FirstScreen');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ROOM CREATED</Text>

      <View style={styles.wrapper}>
        <View style={styles.roomIdContainer}>
          <ClipboardToast
            textToShow={`ROOM ID : ABCD`}
            textToCopy={'ABCD'}
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
        <Text style={styles.roomId}>CONNECTED USERS : 0/3</Text>

        <View style={styles.joinedContainer}>
          <Text style={styles.names}>ANKIT</Text>
          <Text style={styles.names}>KUMAR</Text>
          <Text style={styles.names}>NIKHIL</Text>
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
