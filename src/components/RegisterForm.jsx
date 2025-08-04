import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { MyStore } from "../Context/MyContext";

const RegisterForm = () => {
  let { setUserData, setCurrentUser, toggle, settoggle, userData } =
    useContext(MyStore);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const handleregister = (data) => {
    let updatedData = [...userData, data];
    setUserData(updatedData);
    setCurrentUser(data);
    reset();
  };

  return (
    <div className="card flex flex-col gap-3 items-center w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-2">Register</h2>
      {isValid && <p className="text-green-600">Form is valid!</p>}
      <form
        onSubmit={handleSubmit(handleregister)}
        className="flex flex-col gap-3 w-full"
      >
        <input
          {...register("username", { required: true, minLength: 3 })}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="username"
          type="text"
          placeholder="Username"
        />
        {errors.username && (
          <p className="text-red-500 text-sm">Username is required</p>
        )}
        <input
          {...register("email", { required: true, minLength: 5 })}
          name="email"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">Email is required</p>
        )}
        <input
          {...register("password", { required: true })}
          name="password"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">Password is required</p>
        )}
        <button type="submit" className="theme-toggle-btn mt-2">
          Register
        </button>
      </form>
      <p className="mt-2 text-sm text-center">
        Already have an account?{" "}
        <span
          onClick={() => settoggle(!toggle)}
          className="text-blue-500 cursor-pointer underline"
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default RegisterForm;
