import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { getDataModel } from './DataModel';

function viewProfile({navigation, route}) {

  let item = route.params ? route.params.item : null;

  return (
    <View style={styles.container}>
      <View style={styles.bodyArea}>
        <View style={styles.profileHeader}>
          <Image
            style={styles.profilePic}
            source={require('./assets/profilepic.png')}
          />
          <Text style={styles.profileText}>{item.username}</Text>
        </View>
        <View style={styles.bioSection}>
          <View style={styles.contentHeader}>
            <Text>Bio</Text>
          </View>
          <View style={styles.bioText}>
            <Text>{item.bio}</Text>
          </View>
        </View>
        <View style={styles.gearSection}>
        <View style={styles.contentHeader}>
          <Text>Gear</Text>
          </View>
          <View style={styles.gearText}>
            <Image
              style={styles.blankPic}
              source={require('./assets/guitar.png')}
            />
            <Text>{item.guitar}</Text>
          </View>
          <View style={styles.gearText}>
            <Image
                style={styles.blankPic}
                source={require('./assets/amp.png')}
              />
            <Text>{item.amp}</Text>
          </View>
        </View>
      </View>
      <View style={styles.inputArea}>
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
    backgroundColor: '#853E99',
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
    paddingTop: 25,
    alignItems: 'center',
  },
  gearSection: {
    flex: 0.5,
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  gearText: {
    paddingTop: 20,
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

export default viewProfile;