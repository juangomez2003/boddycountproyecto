// Importar módulos de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

// ⚠️ Configuración de tu proyecto Firebase
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
const db = getFirestore(app);

// Elementos del DOM
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const message = document.getElementById("message");

// Registrar usuario
registerBtn.addEventListener("click", async () => {
  try {
    const res = await createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
    // Guardar en Firestore
    await setDoc(doc(db, "users", res.user.uid), {
      email: res.user.email,
      createdAt: new Date()
    });
    message.textContent = "Usuario registrado correctamente ✅";

    // 🚀 Redirigir al dashboard
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);

  } catch (error) {
    message.textContent = "Error: " + error.message;
  }
});

// Login usuario
loginBtn.addEventListener("click", async () => {
  try {
    const res = await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
    message.textContent = "Bienvenido, " + res.user.email;

    // 🚀 Redirigir al dashboard
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);

  } catch (error) {
    message.textContent = "Error: " + error.message;
  }
});

// Logout usuario
logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  message.textContent = "Sesión cerrada.";
});

// Escuchar cambios de sesión
onAuthStateChanged(auth, (user) => {
  if (user) {
    message.textContent = `Conectado como: ${user.email}`;
    logoutBtn.style.display = "inline-block";
    loginBtn.style.display = "none";
    registerBtn.style.display = "none";
  } else {
    logoutBtn.style.display = "none";
    loginBtn.style.display = "inline-block";
    registerBtn.style.display = "inline-block";
  }
});
