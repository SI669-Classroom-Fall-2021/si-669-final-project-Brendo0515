import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Input } from 'react-native-elements';
import { getDataModel } from './DataModel';

function EditProfile({navigation}) {

  const dataModel = getDataModel();

  const [bioText, setBioText] = useState(dataModel.getProfileBio());
  const [guitarText, setGuitarText] = useState(dataModel.getProfileGuitar());
  const [ampText, setAmpText] = useState(dataModel.getProfileAmp());

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <Text style={styles.inputLabel}>Bio:</Text>
        <Input 
          multiline
          numberOfLines={3}
          containerStyle={styles.inputBox} 
          placeholder="Enter bio"
          onChangeText={(text)=>setBioText(text)}
          value={bioText}
        />
      </View>      

      <View style={styles.inputArea}>
        <Text style={styles.inputLabel}>Guitar:</Text>
        <Input 
          containerStyle={styles.inputBox} 
          placeholder="Enter guitar model"
          onChangeText={(text)=>setGuitarText(text)}
          value={guitarText}
        />
      </View>   

      <View style={styles.inputArea}>
        <Text style={styles.inputLabel}>Amp:</Text>
        <Input 
          containerStyle={styles.inputBox} 
          placeholder="Enter amplifier model"
          onChangeText={(text)=>setAmpText(text)}
          value={ampText}
        />
      </View>   

      <View style={styles.buttonArea}>
        <Button
          containerStyle={styles.button}
          title="Cancel"
          color="red"
          onPress={()=>{
            navigation.navigate("Profile");
          }}
        />
        <Button
          containerStyle={styles.button}
          title="Save"
          color="black"
          onPress={()=>{
              dataModel.updateProfile(bioText, guitarText, ampText);
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
    width: '70%',
  },
  button: {
    width: '40%'
  }
});

export default EditProfile;