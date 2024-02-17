import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './MainScreen.js';

function MainScreen() {
  const [timerRunning, setTimerRunning] = useState(true);
  const [currentTime, setCurrentTime] = useState(10);
  const [currentFilledNumber, setCurrentFilledNumber] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [isCompletelyFilled, setIsCompletelyFilled] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [set, setSet] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 25, 24,
  ]);

  const [board, setBoard] = useState(() => {
    return Array(5)
      .fill()
      .map(() => Array(5).fill());
  });

  const [filledData, setFilledData] = useState(
    Array(5)
      .fill(false)
      .map(() => Array(5).fill(false)),
  );

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
            return 0;
          }
        });
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timerRunning]);

  const updateCurrentFilledNumber = () => {
    const updatedCurrentFilledNumber = currentFilledNumber + 1;
    setCurrentFilledNumber(updatedCurrentFilledNumber);
    return updatedCurrentFilledNumber;
  };

  const updateFilledNumber = (row, column, updateCurrentFilledNumber) => {
    if (!filledData[row][column]) {
      const number = updateCurrentFilledNumber();
      board[row][column] = number;
      filledData[row][column] = true;
      set.splice(set.indexOf(number), 1);
      return board[row][column];
    } else {
      return;
    }
  };

  const handleBoxPressed = (rowIndex, columnIndex) => {
    if (gameStarted) {
      console.log('Yes the game stated');
      console.log(board);
      if (board[rowIndex][columnIndex].isChecked === false) {
        (board[rowIndex][columnIndex].isChecked = true),
          (board[rowIndex][columnIndex].value = 'YOU');
        console.log(board);
      }
    } else {
      updateFilledNumber(rowIndex, columnIndex, updateCurrentFilledNumber);
    }
  };

  const handleFillingDelay = () => {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (typeof board[i][j] === 'undefined') {
          const randomIndex = Math.floor(Math.random() * set.length);
          const randomNumber = set[randomIndex];
          board[i][j] = randomNumber;
          filledData[i][j] = true;
          set.splice(set.indexOf(randomNumber), 1);
        } else {
          console.log('I am at else ');
        }
      }
    }
    setGameStarted(true);
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
                boxFilled={false}
                boxChecked={false}
                key={columnIndex}
                onPress={() => {
                  handleBoxPressed(rowIndex, columnIndex);
                  key = {columnIndex};
                }}
                style={styles.box}>
                <Text style={styles.boxNumber}>
                  {board[rowIndex][columnIndex]}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <View style={styles.userContainer}>
        <TouchableOpacity style={styles.playerButton}>
          <Text style={styles.playerText}>NIKHIL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playerButton}>
          <Text style={styles.playerText}>ANKIT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playerButton}>
          <Text style={styles.playerText}>KUMAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MainScreen;
