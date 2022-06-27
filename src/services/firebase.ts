import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyB3PRtmxFpnGZTx08g7VntPxkJr3K0eVIE',
  authDomain: 'gb-1992.firebaseapp.com',
  projectId: 'gb-1992',
  storageBucket: 'gb-1992.appspot.com',
  messagingSenderId: '928924053067',
  appId: '1:928924053067:web:95b43c10e11c1775df27ce',
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

export const signUp = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(firebaseAuth, email, password);

export const logIn = async (email: string, password: string) =>
  await signInWithEmailAndPassword(firebaseAuth, email, password);

export const logOut = async () => await signOut(firebaseAuth);

const db = getDatabase(app);

export const userRef = ref(db, 'user');
export const messagesRef = ref(db, 'messages');

export const getChatById = (chatId: string) => ref(db, `messages/${chatId}`);

export const getMessageListById = (chatId: string) =>
  ref(db, `messages/${chatId}/messageList/`);
