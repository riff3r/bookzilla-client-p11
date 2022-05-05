import React from "react";
import auth from "../../Firebase/Firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => signInWithGoogle()}>Google</button>
    </div>
  );
};

export default Login;
