// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRs0vuYoDIuwkr_3EfgA5_31TviE0rB2U",
  authDomain: "not-so-basic-tools.firebaseapp.com",
  projectId: "not-so-basic-tools",
  storageBucket: "not-so-basic-tools.appspot.com",
  messagingSenderId: "99251936528",
  appId: "1:99251936528:web:f87fd59c82772c65429995",
  measurementId: "G-YZGBG6K68W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Google login button
const googleLoginBtn = document.getElementById('google-login-btn');

// Google Auth Provider
const provider = new GoogleAuthProvider();

// Handling Google sign-in with a popup
googleLoginBtn.addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log('User signed in:', user.displayName);
      // Redirect after successful login
      window.location.href = "https://glowgordon22.github.io/NotSoBasicTools/dashboard.html"; // Replace with your desired URL
    })
    .catch((error) => {
      console.error('Error signing in with Google:', error);
    });
});

// Optional: Sign-out functionality
const signOutBtn = document.getElementById('sign-out-btn');

if (signOutBtn) {
  signOutBtn.addEventListener('click', () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out');
        window.location.href = "index.html"; // Redirect to login page
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  });
}
