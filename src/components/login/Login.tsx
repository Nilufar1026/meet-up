import React from "react";
import { auth, provider } from "../../firebase-config";
import {signInWithPopup} from 'firebase/auth'
// import './login.css'



type OwnProps = {
    setIsAuth: (isAuth: boolean) => void;
  }
  
  type Props = OwnProps

const Login: React.FunctionComponent<Props> =({setIsAuth})=> {
const signInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{
        let trueFalse:any=true
        localStorage.setItem("isAuth", trueFalse )
        setIsAuth(true)
    })
}
  
  return (
    <div className="login" id="login">
      <p>Sign in with Google to continue</p>
      <button onClick={signInWithGoogle}>Sign  in</button>
    </div>
  );
}

export default Login;