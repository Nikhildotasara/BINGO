import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './WelCome.js';

function WelcomeScreen({navigation}) {
  const handlePlay = () => {
    console.log('PlayButton pressed');
    navigation.navigate('FirstScreen');
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assests/Animation - 1708115326289.json')}
        style={{width: '100%', height: '80%'}}
        autoPlay
        loop={false}
      />

      <TouchableOpacity onPress={handlePlay} style={styles.playButton}>
        <Text style={styles.playText}>PLAY</Text>
      </TouchableOpacity>
    </View>
  );
}

export default WelcomeScreen;
