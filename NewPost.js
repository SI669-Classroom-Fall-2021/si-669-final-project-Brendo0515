import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Input } from 'react-native-elements';
import { getDataModel } from './DataModel';

function NewPost({navigation}) {

  const dataModel = getDataModel();

  const [titleText, setTitleText] = useState('');
  const [postText, setPostText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <Text style={styles.inputLabel}>Title:</Text>
        <Input 
          containerStyle={styles.inputBox} 
          placeholder="Enter title"
          onChangeText={(text)=>setTitleText(text)}
          value={titleText}
        />
      </View>      

      <View style={styles.inputArea}>
        <Text style={styles.inputLabel}>Text:</Text>
        <Input 
          multiline
          numberOfLines={3}
          containerStyle={styles.inputBox} 
          placeholder="Enter text"
          onChangeText={(text)=>setPostText(text)}
          value={postText}
        />
      </View>   

      <View style={styles.buttonArea}>
        <Button
          containerStyle={styles.button}
          title="Cancel"
          onPress={()=>{
            navigation.navigate("Home");
          }}
        />
        <Button
          containerStyle={styles.button}
          title="Save"
          onPress={()=>{
            dataModel.addPost(titleText, postText); 
            navigation.navigate("Home");
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
    justifyContent: 'flex-start',
    padding: 30
  },
  inputArea: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 35,
    paddingTop: 25,
  },
  inputLabel: {
    flex: 0.2,
    textAlign: 'right',
    fontSize: 18,
    paddingRight: 10,
    paddingBottom: 10
  },
  inputBox: {
    flex: 0.8,
  },
  buttonArea: {
    flex: 0.1,
    flexDirection: 'row',
    paddingTop: 30,
    justifyContent: 'space-between',
    //alignItems: 'center',
    width: '70%',
    //backgroundColor: 'tan'
  },
  button: {
    width: '40%'
  }
});

export default NewPost;