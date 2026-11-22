// Configuração do Firebase (estas chaves são públicas por design; quem protege os dados são as regras do banco)
const FB_CONFIG = {
  apiKey: "AIzaSyAkoG-1Ik_Mb-ULcw1GnYhutSXOkeILEgY",
  authDomain: "castelhanos-lanches.firebaseapp.com",
  databaseURL: "https://castelhanos-lanches-default-rtdb.firebaseio.com",
  projectId: "castelhanos-lanches",
  appId: "1:327012344643:web:fa7f9a62b64a65afbe85f6"
};
let DB = null;
try { firebase.initializeApp(FB_CONFIG); DB = firebase.database(); } catch (e) { console.warn("Firebase indisponível", e); }
