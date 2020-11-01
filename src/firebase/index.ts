import firebase from "firebase"

/**
 * const config = {
  apiKey: process.env.GATSBY_apiKey,
  authDomain: process.env.GATSBY_authDomain,
  databaseURL: process.env.GATSBY_databaseURL,
  projectId: process.env.GATSBY_projectId,
  storageBucket: process.env.GATSBY_storageBucket,
  messagingSenderId: process.env.GATSBY_messagingSenderId,
  appId: process.env.GATSBY_appId,
}
 */
const firebaseConfig = {
  apiKey: "AIzaSyDDa1TYCeBrSeBBwf4XcYmVqMI658AFPk8",
  authDomain: "devfest20-gdgalgiers.firebaseapp.com",
  databaseURL: "https://devfest20-gdgalgiers.firebaseio.com",
  projectId: "devfest20-gdgalgiers",
  storageBucket: "devfest20-gdgalgiers.appspot.com",
  messagingSenderId: "310107797875",
  appId: "1:310107797875:web:d27e7847a8e2078d0d2d06",
  measurementId: "G-521HBRQHJM",
}

export const app = firebase.initializeApp(firebaseConfig)
export const analytics = app.analytics()
export const firestore = app.firestore()
