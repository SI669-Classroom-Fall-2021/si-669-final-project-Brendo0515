import { initializeApp, getApps } from 'firebase/app';
import { 
  initializeFirestore, collection, getDocs, query, orderBy, limit,
  where, doc, addDoc, deleteDoc, updateDoc, getDoc, onSnapshot
} from "firebase/firestore";
import { firebaseConfig } from './Secrets';

let app;
if (getApps().length == 0){
  app = initializeApp(firebaseConfig);
} 
const db = initializeFirestore(app, {
  useFetchStreams: false
});

class DataModel {

  constructor() {
    this.users = [];
// Home ----------------------
    this.postList = [];
    this.author = ''; //will fix later
// Community -----------------
    this.profileList = [];
// Profile -------------------
    this.bio = '';
    this.guitar = '';
    this.amp = '';
    this.key = '';
// General --------------------
    this.subscribers = []; 
    this.loadHome();
    this.loadProfile();
    this.loadCommunity();
  }

  loadHome() {
    const q = query(collection(db, 'Home'));
    onSnapshot(q, (qSnap) => {
      let list = []; 
      qSnap.docs.forEach((docSnap)=>{  
        let listItem = docSnap.data();
        listItem.key = docSnap.id;
        list.push(listItem);
      });
      this.postList = list;
      this.updateSubscribers();
    });
  }

  loadCommunity() {
    const q = query(collection(db, 'Community'));
    onSnapshot(q, (qSnap) => {
      let list = []; 
      qSnap.docs.forEach((docSnap)=>{  
        let listItem = docSnap.data();
        listItem.key = docSnap.id;
        list.push(listItem);
      });
      this.profileList = list;
      this.updateSubscribers();
    });
  }

  loadProfile() {
    const q = query(collection(db, 'Profile'));
    onSnapshot(q, (qSnap) => {
      qSnap.docs.forEach((docSnap)=>{  
        let listItem = docSnap.data();
        listItem.key = docSnap.id;
        this.key = listItem.key
        this.bio = listItem.bio;
        this.guitar = listItem.guitar;
        this.amp = listItem.amp;
      });
      this.updateSubscribers();
    });
  }


  async getUserForAuthUser(authUser) {
    const userAuthId = authUser.uid;
    this.author = authUser.providerData[0].displayName
    for (let u of this.users) {
      if (u.authId === userAuthId) {
        return u;
      }
    }
    return await this.createUser(authUser);
  }

  async createUser(authUser) {

    let newUser = {
      username: authUser.providerData[0].displayName,
      authId: authUser.uid,   
      bio: "User has not set a bio",
      guitar: "none",
      amp: "none",

    };
    this.author = newUser.username;
    const userDoc = await addDoc(collection(db, 'Community'), newUser);
    newUser.key = userDoc.id;  
    return newUser;
  }

// Home -----------------------------------
  getPostList(){
    return Array.from(this.postList);
  }

  async addPost(title, text){
    const collRef = collection(db, 'Home');
    await addDoc(collRef, {author: this.author, postTitle: title, postText: text});
    this.updateSubscribers();
  }

  async deletePost(key) {
    const docRef = doc(db, "Home", key);
    await deleteDoc(docRef);
    this.updateSubscribers();
  }

// Community -----------------------------

  getProfileList(){
    return Array.from(this.profileList);
  }

// Profile -------------------------------

  getProfileBio() {
    return this.bio;
  }

  getProfileGuitar() {
    return this.guitar;
  }

  getProfileAmp() {
    return this.amp;
  }

  async updateProfile(bio, guitar, amp) {
    const docRef = doc(db, "Profile", this.key);
    await updateDoc(docRef, {bio: bio, guitar: guitar, amp: amp});
    this.updateSubscribers();
  }

  subscribeToUpdates(callback) {
    console.log("new subscriber: ", callback);
    this.subscribers.push(callback);
  }

  updateSubscribers() {
    for (let sub of this.subscribers) {
      sub(); 
    }
  }
  
}

let theDataModel;

export function getDataModel() {
  if (!theDataModel) {
    theDataModel = new DataModel();
  }
  return theDataModel;
}