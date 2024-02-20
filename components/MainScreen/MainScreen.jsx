import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './MainScreen.js';
import Gold from './../../assests/king.png';
import Silver from './../../assests/silver.png';

import Snackbar from 'react-native-snackbar';

function MainScreen({route}) {
  const [timerRunning, setTimerRunning] = useState(true);
  const [currentTime, setCurrentTime] = useState(10);
  const [currentFilledNumber, setCurrentFilledNumber] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [usersArray, setUsersArray] = useState([]);
  const [winners, setWinners] = useState([]);
  const [turn, setTurn] = useState();
  const [won, setWon] = useState(false);

  const {socket, userName, roomId, isAdmin} = route.params;
  const [set, setSet] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 25, 24,
  ]);

  const [board, setBoard] = useState(() => {
    return Array(5)
      .fill()
      .map(() =>
        Array(5)
          .fill()
          .map(() => ({isChecked: false, value: ''})),
      );
  });

  useEffect(() => {
    if (timerRunning) {
      const intervalId = setInterval(() => {
        setCurrentTime(currentTime => {
          if (currentTime > 0) {
            const updatedTime = currentTime - 1;
            return updatedTime;
          } else {
            setTimerRunning(false);
            handleFillingDelay();
            if (isAdmin) {
              socket.emit('realGameStart', roomId);
            }
            return 0;
          }
        });
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timerRunning]);

  const handleBroadcastWin = message => {
    const winnerInfo = usersArray[message];
    const updatedWinners = [...winners, winnerInfo];
    setWinners(updatedWinners);
  };

  const handleNumberPressed = message => {
    setTurn(message.turn);
    const updatedBoard = [...board];

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (updatedBoard[i][j].value == message.numberPressed) {
          if (message.socketId == socket.id) {
            updatedBoard[i][j].value = 'YOU';
            updatedBoard[i][j].isChecked = true;
          } else {
            updatedBoard[i][j].value = message.sender;
            updatedBoard[i][j].isChecked = true;
          }
          setBoard(updatedBoard);

          const win = checkForWin();
          if (win) {
            socket.emit('win', roomId);
          }
          return;
        }
      }
    }
  };

  const handleInitialData = initialData => {
    const updatedData = initialData.userInfo;
    setUsersArray(updatedData);
    setTurn(initialData.turn);
  };

  useEffect(() => {
    socket.on('broadcastWin', handleBroadcastWin);
    socket.on('numberPressed', handleNumberPressed);
    socket.on('sendInitialData', handleInitialData);

    return () => {
      socket.off('broadcastWin', handleBroadcastWin);
      socket.off('numberPressed', handleNumberPressed);
      socket.off('sendInitialData', handleInitialData);
    };
  }, [usersArray]);

  const updateCurrentFilledNumber = () => {
    const updatedCurrentFilledNumber = currentFilledNumber + 1;
    setCurrentFilledNumber(updatedCurrentFilledNumber);
    return updatedCurrentFilledNumber;
  };

  const updateFilledNumber = (row, column, updateCurrentFilledNumber) => {
    if (board[row][column].value === '') {
      const number = updateCurrentFilledNumber();
      board[row][column].value = number;
      set.splice(set.indexOf(number), 1);
      return board[row][column].value;
    } else {
      return;
    }
  };

  const handleBoxPressed = (rowIndex, columnIndex) => {
    if (gameStarted) {
      const numberPressed = board[rowIndex][columnIndex];

      if (won) {
        Snackbar.show({
          text: 'YOU ALREADY WON',
          duration: Snackbar.LENGTH_SHORT,
        });
      }

      const message = {
        sender: userName,
        numberPressed: numberPressed.value,
        roomId: roomId,
        won: won,
      };

      if (!numberPressed.isChecked) {
        socket.emit('numberPressed', message);
        const updatedBoard = [...board];
      }
    } else {
      updateFilledNumber(rowIndex, columnIndex, updateCurrentFilledNumber);
    }
  };

  const handleFillingDelay = () => {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (board[i][j].value === '') {
          const randomIndex = Math.floor(Math.random() * set.length);
          const randomNumber = set[randomIndex];
          board[i][j].value = randomNumber;
          set.splice(set.indexOf(randomNumber), 1);
        } else {
        }
      }
    }
    setGameStarted(true);
  };

  const checkForWin = () => {
    let countX = 0;
    let countY = 0;
    let countZ = 0;
    for (let i = 0; i < 5; i++) {
      let isCrossed = true;
      for (let j = 0; j < 5; j++) {
        if (!board[i][j].isChecked) {
          isCrossed = false;
          break;
        }
      }

      if (isCrossed) countX++;
    }

    for (let i = 0; i < 5; i++) {
      let isCrossed = true;
      for (let j = 0; j < 5; j++) {
        if (!board[j][i].isChecked) {
          isCrossed = false;
          break;
        }
      }

      if (isCrossed) countY++;
    }

    let isCrossed = true;
    for (let row = 0, col = 0; row <= 4; row++, col++) {
      if (!board[row][col].isChecked) {
        isCrossed = false;
        break;
      }
    }
    if (isCrossed) countZ++;

    isCrossed = true;
    for (let row = 0, col = 4; row <= 4; row++, col--) {
      if (!board[row][col].isChecked) {
        isCrossed = false;
        break;
      }
    }
    if (isCrossed) countZ++;

    return countX + countY + countZ >= 5;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>BINGO</Text>

      <View
        style={[timerRunning ? null : {display: 'none'}, styles.timeContainer]}>
        <Text style={styles.time}>
          {currentTime >= 10 ? `00:${currentTime}` : `00:0${currentTime}`}
        </Text>
      </View>

      <View style={styles.board}>
        {board.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((box, columnIndex) => (
              <TouchableOpacity
                key={columnIndex}
                disabled={board[rowIndex][columnIndex].isChecked}
                onPress={() => {
                  handleBoxPressed(rowIndex, columnIndex);
                  key = {columnIndex};
                }}
                style={styles.box}>
                <Text style={styles.boxNumber}>
                  {board[rowIndex][columnIndex].value}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <View style={styles.userContainer}>
        {usersArray.map((element, index) => {
          const winnerIndex = winners.findIndex(
            winner => winner.socketId === element.socketId,
          );

          let imageSource;
          if (winnerIndex === 0) {
            imageSource = Gold;
          } else if (winnerIndex === 1) {
            imageSource = Silver;
          } else {
            imageSource = null; // No image
          }

          return (
            <View
              key={index}
              style={[
                styles.playerButton,
                index === turn - 1 ? styles.activeTurn : null,
              ]}>
              <View style={styles.userDetailContainer}>
                <Text style={styles.playerText}>{element.userName}</Text>
                {imageSource && (
                  <Image style={[styles.medalImage]} source={imageSource} />
                )}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default MainScreen;
