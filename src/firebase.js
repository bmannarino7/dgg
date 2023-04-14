      // Import the functions you need from the SDKs you need
      import { initializeApp } from "firebase/app";
      import { getAnalytics } from "firebase/analytics";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries

      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
        apiKey: "AIzaSyAyacFxRIpL9MYWOO7gsqDVB0M-pQFNwWM",
        authDomain: "dont-get-got-bc19b.firebaseapp.com",
        projectId: "dont-get-got-bc19b",
        storageBucket: "dont-get-got-bc19b.appspot.com",
        messagingSenderId: "123377658027",
        appId: "1:123377658027:web:02e2dd6ec79253876bafee",
        measurementId: "G-GL8QXG1QQN"
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);