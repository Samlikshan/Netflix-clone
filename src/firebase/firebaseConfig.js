import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtMMGQN68a0sZyfrw6gzg-rgA8krxm35M",
  authDomain: "netflix-clone-dcaa5.firebaseapp.com",
  projectId: "netflix-clone-dcaa5",
  storageBucket: "netflix-clone-dcaa5.firebasestorage.app",
  messagingSenderId: "501195559294",
  appId: "1:501195559294:web:3d0cdd7490fdae2854232f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
