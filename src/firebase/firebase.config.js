import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNL_k7XRSycF6h6mOn3ywy4OJBmuMYQk4",
  authDomain: "cuote-project.firebaseapp.com",
  projectId: "cuote-project",
  storageBucket: "cuote-project.firebasestorage.app",
  messagingSenderId: "720944032451",
  appId: "1:720944032451:web:3fea05e575cd3313e95076",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
