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
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: '700',
  },
  wrapper: {
    width: '100%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  userNameInput: {
    color: 'white',
    fontSize: 20,
    width: '80%',
    borderBottomWidth: 3,
    borderBottomColor: 'white',
  },
  buttonContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '10%',
  },
  createButton: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'yellow',
    minHeight: 50,
  },
  joinButton: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'yellow',
    minHeight: 50,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
  },
});

export default styles;
