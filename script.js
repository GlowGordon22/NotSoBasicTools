  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBRs0vuYoDIuwkr_3EfgA5_31TviE0rB2U",
    authDomain: "not-so-basic-tools.firebaseapp.com",
    projectId: "not-so-basic-tools",
    storageBucket: "not-so-basic-tools.firebasestorage.app",
    messagingSenderId: "99251936528",
    appId: "1:99251936528:web:f87fd59c82772c65429995",
    measurementId: "G-YZGBG6K68W"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

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
      console.log('User signed in: ', user.displayName);
      // Redirect to another page or update UI after login
      window.location.href = "home.html";  // Replace with your desired URL after login
    })
    .catch((error) => {
      console.error('Error signing in with Google: ', error);
    });
});

// Optional: Sign out functionality if needed (e.g., add a sign-out button)
const signOutBtn = document.getElementById('sign-out-btn'); // Assuming you have a sign-out button

signOutBtn?.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      console.log('User signed out');
      // Redirect to login page after sign out
      window.location.href = "index.html";  // Redirect back to the login page
    })
    .catch((error) => {
      console.error('Error signing out: ', error);
    });
});
