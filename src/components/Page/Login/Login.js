import React from "react";
import auth from "../../Firebase/Firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let from = location.state?.from?.pathname || "/";

  if (user) navigate(from, { replace: true });

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => signInWithGoogle()}>Google</button>
    </div>
  );
};

export default Login;
