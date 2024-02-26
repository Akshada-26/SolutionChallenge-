// src/saveUserData.js
import { db } from './firebase-config';
import { doc, setDoc } from 'firebase/firestore';

export const saveUserData = async (user) => {
  try {
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || '', // Might be empty for email/password registration
      photoURL: user.photoURL || '', // Might be empty for email/password registration
      // Add other fields as needed
    }, { merge: true });
    console.log("User data saved in Firestore");
  } catch (error) {
    console.error("Error saving user data: ", error);
  }
};
