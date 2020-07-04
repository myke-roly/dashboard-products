import app from 'firebase/app';
import firebaseConfig from './config';
import 'firebase/auth';

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    } else {
    }
    this.auth = app.auth();
  }

  logIn(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  async logOut() {
    await this.auth.signOut();
  }

  resetPassword(email) {}

  emailVerification() {}

  SMSVerification() {}
}

const firebase = new Firebase();
export default firebase;
