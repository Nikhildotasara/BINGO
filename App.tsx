import  React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from "./components/WelcomeScreen/Welcome.jsx"
import FirstScreen from "./components/FirstScreen/FirstScreen.jsx"
import CreateRoom from "./components/CreateRoom/CreateRoom.jsx"
import JoinRoom from "./components/JoinRoom/JoinRoom.jsx"
import WaitingRoom from './components/WaitingRoom/WaitingRoom.jsx';
import MainScreen from "./components/MainScreen/MainScreen.jsx"

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomeScreen'>
        <Stack.Screen
          name="WelComeScreen"
          component={WelcomeScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="CreateRoom"
          component={CreateRoom}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="JoinRoom"
          component={JoinRoom}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="WaitingRoom"
          component={WaitingRoom}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;