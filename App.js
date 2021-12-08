import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import Profile from './Profile';
import Community from './Community';
import EditProfile from './EditProfile';
import NewPost from './NewPost'

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
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ title: 'Edit Profile' }}/>
        <Stack.Screen name="NewPost" component={NewPost} options={{ title: 'Create Post' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
