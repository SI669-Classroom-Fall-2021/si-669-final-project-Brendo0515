import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import Profile from './Profile';
import Community from './Community';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Home' }}/>
        <Stack.Screen name="Community" component={Community} options={{ title: 'Community' }}/>
        <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
