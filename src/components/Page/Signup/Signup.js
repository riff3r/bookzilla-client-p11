import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase.init";

const Signup = () => {
  const [user] = useAuthState(auth);
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitSignup = async (data) => {
    const { displayName, email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      toast("Password Not Matched");
      return;
    }

    await createUserWithEmailAndPassword(email, password);

    await updateProfile({ displayName });
  };

  useEffect(() => {
    if (user) navigate(from, { replace: true });

    if (emailError) toast(emailError.message);
  }, [user, emailError]);

  return (
    <div className="container my-5 py-5 vh-75">
      <Form
        className="w-50 mx-auto shadow p-5 rounded-3"
        onSubmit={handleSubmit(onSubmitSignup)}
      >
        <h1 className="mb-4 text-center">Signup</h1>

        <Form.Group className="mb-3" controlId="displayName">
          <Form.Control
            {...register("displayName", { required: true })}
            type="text"
            placeholder="You Name"
          />
          {errors.displayName && (
            <span className="text-danger">This field is required</span>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
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
          <Form.Control
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
          />

          {errors.password && (
            <span className="text-danger">This field is required</span>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Control
            {...register("confirmPassword", { required: true })}
            type="password"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <span className="text-danger">This field is required</span>
          )}
        </Form.Group>

        <div className="d-grid gap-2 mb-4">
          <Button className="py-2" variant="danger" type="submit">
            Submit
          </Button>
        </div>

        <p>
          Already have an account?{" "}
          <Link className="text-danger" to="/login">
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Signup;
