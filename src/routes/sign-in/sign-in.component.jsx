import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

const SignIn = () => {
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
    </div>
  );
};

export default SignIn;
