// Importar módulos de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// Configuración de tu proyecto Firebase (igual que en app.js)
const firebaseConfig = {
  apiKey: "AIzaSyDBGVtduFeMqxRff-iLvnlF2S7VOaRSWUo",
  authDomain: "boddycount-10581.firebaseapp.com",
  projectId: "boddycount-10581",
  storageBucket: "boddycount-10581.appspot.com",
  messagingSenderId: "784931135371",
  appId: "1:784931135371:web:eb7db6d56512cd4ec9d98e"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Elementos del DOM
const welcome = document.getElementById("welcome");
const logoutBtn = document.getElementById("logoutBtn");

// Verificar si el usuario está logueado
onAuthStateChanged(auth, (user) => {
  if (user) {
    welcome.textContent = `Bienvenido, ${user.email} 🎉`;
  } else {
    // Si no hay usuario logueado, redirigir al login
    window.location.href = "index.html";
  }
});

// Cerrar sesión
logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "index.html";
});
