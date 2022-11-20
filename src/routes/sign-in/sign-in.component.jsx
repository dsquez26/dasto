import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth"
import { createUserWithEmailAndPassword } from '../../utils/firebase.utils'

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {

useEffect(() => {
  async function fetchData() {
    const response = await getRedirectResult(auth);
    console.log(response)
    if(response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
  }
  fetchData();
},[])


  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log({user})
  };
  

  return (
    <div>
      <div>Sign-In Page</div>
      <button onClick={logGoogleUser}>Sign-In with Google Popup</button>
      <button onClick={logGoogleRedirectUser}>Sign-In with Google Redirect</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
