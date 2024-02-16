import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  heading: {
    color: 'white',
    fontSize: 28,
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: '700',
  },
  joinedText: {
    color: 'white',
    fontSize: 20,
  },
  playersContainer: {
    // backgroundColor: 'red',
    height: '20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  playerText: {
    color: 'white',
  },
  button: {
    width: '32%',
    height: '6%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'yellow',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    fontStyle: 'italic',
  },
});

export default styles;
