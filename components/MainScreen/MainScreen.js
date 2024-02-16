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
    fontSize: 30,
  },
  timeContainer: {
    width: '20%',
    height: '7%',
    position: 'absolute',
    right: '4%',
    top: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  time: {
    color: 'white',
    fontSize: 20,
  },
  board: {
    height: '55%',
    width: '90%',
    borderWidth: 2,
    borderColor: 'white',
  },
  userContainer: {
    flexDirection: 'row',
    height: '8%',
    width: '90%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  playerButton: {
    width: '32%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'yellow',
  },
  playerText: {
    color: 'white',
    fontSize: 20,
  },
});

export default styles;
