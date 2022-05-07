import React from "react";
import auth from "../../Firebase/Firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitEmailLogin = async (data) => {
    const { email, password } = data;

    signInWithEmailAndPassword(email, password);

    console.log(data);
  };

  let from = location.state?.from?.pathname || "/";

  if (emailUser || googleUser) navigate(from, { replace: true });

  return (
    <div className="container my-5">
      <Form
        onSubmit={handleSubmit(onSubmitEmailLogin)}
        className="w-50 mx-auto"
      >
        <h1 className="text-center">Sign In</h1>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            {...register("email", { required: true })}
            type="email"
            placeholder="Enter email"
          />
          {errors.email && (
            <span className="text-danger">This field is required</span>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
          />

          {errors.password && (
            <span className="text-danger">This field is required</span>
          )}
        </Form.Group>

        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>

      <button onClick={() => signInWithGoogle()}>Google</button>
    </div>
  );
};

export default Login;
