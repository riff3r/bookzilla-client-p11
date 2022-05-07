import React from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase.init";

const Signup = () => {
  const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, error] = useUpdateProfile(auth);

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
    console.log(data);

    await createUserWithEmailAndPassword(email, password);

    await updateProfile({ displayName });
  };

  return (
    <div className="container my-5">
      <Form onSubmit={handleSubmit(onSubmitSignup)} className="w-50 mx-auto">
        <h1 className="text-center">Signup</h1>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            {...register("displayName", { required: true })}
            type="text"
          />
          {errors.displayName && (
            <span className="text-danger">This field is required</span>
          )}
        </Form.Group>

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

        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
