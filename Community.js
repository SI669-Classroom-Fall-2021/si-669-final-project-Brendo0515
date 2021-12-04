import React from 'react';
import { FlatList, StyleSheet, Text, View, Button} from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons'; 
import { getDataModel } from './DataModel';

function Community({navigation}) {

  return (
    <View style={styles.container}>
      <View style={styles.bodyArea}>
        <Text>No Posts Yet</Text>
      </View>
      <View style={styles.inputArea}>
        <Button
            title="Home"
            onPress={()=>{
              navigation.navigate("Home");
            }}
          />

          <Button
            title="Community"
            onPress={()=>{
              navigation.navigate("Community");
            }}
          />

          <Button
            title="Profile"
            onPress={()=>{
              navigation.navigate("Profile");
            }}
          /> 
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bodyArea: {
    flex: 0.85,
    width: '100%',
    backgroundColor: 'grey',
  },
  inputArea: {
    flex: 0.15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});

export default Community;