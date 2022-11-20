// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import {getDatabase, ref} from "firebase/database"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpxhEmNY7mfquqfDDqCxjMOoowkrR8-QI",
    authDomain: "react-lessons-7d330.firebaseapp.com",
    databaseURL: "https://react-lessons-7d330-default-rtdb.firebaseio.com",
    projectId: "react-lessons-7d330",
    storageBucket: "react-lessons-7d330.appspot.com",
    messagingSenderId: "350299416350",
    appId: "1:350299416350:web:6d82b5cacbca7a63f04b0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const singUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
};
export const logIn = async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
};
export const logOut = async () => {
    await signOut(auth);
};

export const userRef = ref(db, 'user');
export const userNameRef = ref(db, "user/name");
export const userShowNameRef = ref(db, "user/showName");
export const chatsRef = ref(db, "chats");
export const msgRef = ref(db, "messages")
export const getChatRefById = (id) => ref(db, `chats/${id}`);
export const getMsgRefById = (chatId) => ref(db, `messages/${chatId}`);
export const getMsgListRefById = (chatId) => ref(db, `messages/${chatId}/messageList`);




