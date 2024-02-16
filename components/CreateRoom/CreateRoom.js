import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  heading: {
    color: 'white',
    fontSize: 25,
    fontStyle: 'italic',
  },
  wrapper: {
    height: '70%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  joinedContainer: {
    height: '25%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  names: {
    fontSize: 20,
    color: 'white',
  },
  roomId: {
    color: 'white',
    fontSize: 20,
  },

  buttonContainer: {
    height: '20%',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  startButton: {
    width: '45%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'yellow',
  },
  cancelButton: {
    width: '45%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'yellow',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default styles;
