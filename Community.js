import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet, Text, View, Button, Pressable} from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons'; 
import { getDataModel } from './DataModel';

function Community({navigation}) {

  const dataModel = getDataModel();

  const [profileList, setProfileList] = useState(dataModel.getProfileList());

  useEffect(()=>{
    dataModel.subscribeToUpdates(()=>{
      setProfileList(dataModel.getProfileList());
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.bodyArea}>
        <FlatList
          data={profileList} 
          renderItem={({item})=>{
            return (
          <Pressable onPress={()=>{navigation.navigate("ViewProfile", {item: item});}}>
            <View style={styles.postBody}>
              <View style={styles.contentHeader}>
                  <Text style={styles.postTitle}>{item.username}</Text>
              </View>
              <View style={styles.postText}>
                <Text>{item.bio}</Text>
              </View>
            </View>
          </Pressable>
              );
            }}
          />
      </View>
      <View style={styles.bottomNav}>
        <Button
            title="Home"
            color="black"
            onPress={()=>{
              navigation.navigate("Home");
            }}
          />

          <Button
            title="Community"
            color="black"
            onPress={()=>{
              navigation.navigate("Community");
            }}
          />

          <Button
            title="Profile"
            color="black"
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
    backgroundColor: '#853E99',
  },
  bottomNav: {
    flex: 0.15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  postBody: {
    margin: 10,
    padding: 7,
    paddingBottom: 15,
    backgroundColor: 'white',
  },
  contentHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  postText: {
    paddingTop: 15,
    alignItems: 'center',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  postAuthor: {
    fontSize: 11,
    fontStyle: 'italic',
  },
});

export default Community;