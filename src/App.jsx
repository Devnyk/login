import React, { useContext } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import UserCard from "./components/UserCard";
import { MyStore } from "./Context/MyContext";

const App = () => {
  const { currentUser, toggle, userData, theme, setTheme } =
    useContext(MyStore);

  const themeClass = theme === "dark" ? "dark-theme" : "light-theme";

  return (
    <div
      className={`app-root min-h-screen p-4 sm:p-8 md:p-10 flex flex-col items-center gap-4 sm:gap-6 md:gap-8 ${themeClass}`}
    >
      <button
        className="theme-toggle-btn self-end w-full max-w-xs sm:max-w-sm md:max-w-md"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-center w-full">
        User Panel
      </h1>
      <div className="w-full flex flex-col items-center gap-4">
        {toggle ? (
          <>
            <LoginForm />
            {currentUser && <UserCard userData={currentUser} />}
          </>
        ) : (
          <>
            <RegisterForm />
            {currentUser && <UserCard userData={currentUser} />}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
