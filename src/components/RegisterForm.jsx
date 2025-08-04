import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { MyStore } from "../Context/MyContext";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const { setUserData, setCurrentUser, toggle, settoggle, userData, theme } =
    useContext(MyStore);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    const alreadyExists = userData.find((user) => user.email === data.email);
    if (alreadyExists) {
      toast.error("User already exists!");
      return;
    }

    const updatedData = [...userData, data];
    setUserData(updatedData);
    setCurrentUser(data);
    toast.success("Registration successful!");
    reset();
  };

  return (
    <div
      className={`w-full max-w-md flex flex-col items-center gap-4 rounded-xl shadow-lg p-6 transition-colors duration-300
      ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"}`}
    >
      <h2 className="text-2xl font-semibold transition-colors duration-300">Register</h2>

      <form
        onSubmit={handleSubmit(handleRegister)}
        className="flex flex-col gap-3 w-full"
      >
        <input
          {...register("username", { required: true, minLength: 3 })}
          className={`p-2 rounded border transition-colors duration-300
          ${theme === "dark" 
            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
            : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"}`}
          type="text"
          placeholder="Username"
        />
        {errors.username && <p className="text-red-500 text-sm">Username is required</p>}

        <input
          {...register("email", { required: true, minLength: 5 })}
          className={`p-2 rounded border transition-colors duration-300
          ${theme === "dark" 
            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
            : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"}`}
          type="text"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500 text-sm">Email is required</p>}

        <input
          {...register("password", { required: true })}
          className={`p-2 rounded border transition-colors duration-300
          ${theme === "dark" 
            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
            : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"}`}
          type="password"
          placeholder="Password"
        />
        {errors.password && <p className="text-red-500 text-sm">Password is required</p>}

        <button
          type="submit"
          className="mt-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
        >
          Register
        </button>
      </form>

      <p className="mt-2 text-sm text-center">
        Already have an account?{" "}
        <span
          onClick={() => settoggle(!toggle)}
          className="text-blue-500 cursor-pointer hover:underline"
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default RegisterForm;
