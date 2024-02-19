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
    fontWeight: '700',
  },
  wrapper: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  inputWrapper: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  roomIdText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  inputContainer: {
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    color: 'white',
  },

  buttonContainer: {
    width: '100%',
    height: '8%',
    alignSelf: 'baseline',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  joinButton: {
    width: '45%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'yellow',
  },
  cancelButton: {
    width: '45%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'yellow',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default styles;
