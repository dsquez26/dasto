import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.utils"

const SignIn = () => {
  const logGoogleUser = async ()=> {
    const { user } = await signInWithGooglePopup()
    createUserDocumentFromAuth(user)
  }

  return (
    <div>
    <div>Sign-In Page</div>
     <button onClick={logGoogleUser}>
      Sign-In with Google Pop-up
     </button>
    </div>
  )
}

export default SignIn