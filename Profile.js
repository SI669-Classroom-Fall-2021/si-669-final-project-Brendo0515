import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Input, Image} from 'react-native';
import { getDataModel } from './DataModel';

function Profile({navigation, route}) {

  let item = route.params ? route.params.item : null;
  let editMode = (item != null);
  const [inputText, setInputText] = useState(item? item.text : '');

  let dataModel = getDataModel();

  return (
    <View style={styles.container}>
      <View style={styles.bodyArea}>
        <View style={styles.profileHeader}>
          <Image
            style={styles.profilePic}
            source={require('./assets/profilepic.png')}
          />
          <Text style={styles.profileText}>Brendon</Text>
        </View>
        <View style={styles.bioSection}>
          <View style={styles.contentHeader}>
            <Text>Bio</Text>
            <Button title="Edit" color='red' />
          </View>
          <View style={styles.bioText}>
            <Text>Hello, am looking for people to jam with.  I am a guitarist who likes to play rock and metal music.</Text>
          </View>
        </View>
        <View style={styles.gearSection}>
        <View style={styles.contentHeader}>
          <Text>Gear</Text>
            <Button title="Edit" color='red' />
          </View>
          <View style={styles.gearText}>
            <Image
              style={styles.blankPic}
              source={require('./assets/blank.png')}
            />
            <Text>Gibson Les Paul</Text>
          </View>
          <View style={styles.gearText}>
            <Image
                style={styles.blankPic}
                source={require('./assets/blank.png')}
              />
            <Text>Marshall 40w</Text>
          </View>
        </View>
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
    justifyContent: 'space-between',
  },
  inputArea: {
    flex: 0.15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  profilePic: {
    width: 90,
    height: 90,
    marginLeft: 25,
    marginRight: 35,
  },
  blankPic: {
    width: 70,
    height: 70,
    marginRight: 30,
  },
  profileHeader: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'grey',
  },
  profileText: {
    fontSize: 20,
    color: 'white',
  },
  bioSection: {
    flex: 0.3,
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bioText: {
    paddingTop: 20,
    alignItems: 'center',
  },
  gearSection: {
    flex: 0.5,
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  gearText: {
    paddingTop: 10,
    paddingLeft: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  editButton: {
    backgroundColor: 'red',
    color: 'red',
    fontSize: 15,
  },
});

export default Profile;