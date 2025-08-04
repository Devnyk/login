import React, { useContext } from "react";
import { MyStore } from "./Context/MyContext";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import UserCard from "./components/UserCard";

const App = () => {
  const { toggle, theme, setTheme, currentUser } = useContext(MyStore);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-start py-10 px-4 transition-colors duration-300 
      ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
    >
      {/* Theme Toggle */}
      <button
        className={`absolute top-4 right-4 px-4 py-2 rounded-md shadow-md flex items-center gap-2 text-sm
        ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-6">User Panel</h1>

      {/* Auth Form */}
      {toggle ? <LoginForm /> : <RegisterForm />}

      {/* Show user card if logged in */}
      {currentUser && (
        <div className="mt-6 w-full max-w-sm">
          <UserCard userData={currentUser} />
        </div>
      )}
    </div>
  );
};

export default App;
