import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet, Text, View, Button} from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons'; 
import { getDataModel } from './DataModel';

function HomeScreen({navigation}) {

  const dataModel = getDataModel();

  const [postList, setPostList] = useState(dataModel.getPostList());

  useEffect(()=>{
    dataModel.subscribeToUpdates(()=>{
      setPostList(dataModel.getPostList());
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.bodyArea}>
        <Button 
            title="+ New Post"
            color="red"
            onPress={()=>{
              navigation.navigate("NewPost");
            }} 
          />
        <FlatList 
          data={postList} 
          renderItem={({item})=>{
            return (
            <View style={styles.postBody}>
              <View style={styles.contentHeader}>
                <Text style={styles.postTitle}>{item.postTitle}</Text>
                <Button
                  title="x"
                  color="red"
                  onPress={()=>{
                    dataModel.deletePost(item.key);
                  }}
                />
              </View>
              <View>
                <Text style={styles.postAuthor}>{item.author}</Text>
              </View>
              <View style={styles.postText}>
                <Text>{item.postText}</Text>
              </View>
            </View>
              );
            }}
          />
      </View>
      <View style={styles.bottomNav}>
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

export default HomeScreen;