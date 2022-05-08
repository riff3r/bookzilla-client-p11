import React, { useEffect } from "react";
import auth from "../../Firebase/Firebase.init";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Login = () => {
  const [user, loading, error] = useAuthState(auth);

  let navigate = useNavigate();
  let location = useLocation();

  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmitEmailLogin = async (data) => {
    const { email, password } = data;

    signInWithEmailAndPassword(email, password);

    console.log(data);
  };

  const handleForgetPassword = async (data) => {
    let email = watch("email");

    if (!email) {
      toast("Please enter your Email");
      return;
    }

    await sendPasswordResetEmail(email);

    toast("Please check your email to reset password");
  };

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) navigate(from, { replace: true });
  }, [user]);

  return (
    <div className="container my-5 py-5 vh-75">
      <Form
        className="w-50 mx-auto shadow p-5 rounded-3"
        onSubmit={handleSubmit(onSubmitEmailLogin)}
      >
        <h1 className="mb-4 text-center">Login </h1>

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
          <Form.Label>Enter Password</Form.Label>
          <Form.Control
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
          />

          {errors.password && (
            <span className="text-danger">This field is required</span>
          )}
        </Form.Group>

        <div className="d-grid gap-2 mb-4">
          <Button className="py-2" variant="danger" type="submit">
            Login
          </Button>

          <h5 className="text-center">or</h5>

          <Button
            onClick={() => signInWithGoogle()}
            variant="dark"
            type="submit"
          >
            <i className="me-3 bi bi-google"></i>
            Login With Google
          </Button>
        </div>

        <a
          href="#forgot"
          onClick={handleForgetPassword}
          className="text-danger mb-3 d-inline-block"
        >
          Forgot Password
        </a>

        <p>
          Already have an account?{" "}
          <Link className="text-danger" to="/signup">
            Signup
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
