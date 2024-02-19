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

  box: {
    width: '19%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    borderColor: 'black',
  },
  boxNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },

  row: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '20%',
    borderColor: 'black',
    borderWidth: 1,
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

  activeTurn: {
    backgroundColor: 'red',
  },
  userDetailContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  medalImage: {
    objectFit: 'contain',
    height: '50%',
    width: '50%',
  },
});

export default styles;
